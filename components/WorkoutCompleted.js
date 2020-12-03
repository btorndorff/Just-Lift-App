import React, {useState} from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase'
import * as ImagePicker from 'expo-image-picker';

var firebaseConfig = {
    apiKey: "AIzaSyCTmakAv2P965rn8RXxfocQC9EDmfbtGik",
    authDomain: "justliftapp-52af0.firebaseapp.com",
    databaseURL: "https://justliftapp-52af0.firebaseio.com",
    projectId: "justliftapp-52af0",
    storageBucket: "justliftapp-52af0.appspot.com",
    messagingSenderId: "459347127352",
    appId: "1:459347127352:web:c4dc3739b2d35ce1dccacd",
    measurementId: "G-KRT9MBHW9T"
  };
  // Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

function WorkoutCompleted({navigation, route}) {
    const [image, setImage] = useState(<Image source={require("../assets/add.jpg")} style={styles.thumb} />);
    const [source, setSource] = useState("../assets/add.jpg");
    const [Description, setDescription] = useState("");
    const {name, workout} = route.params;

    function saveWorkout() {
        let volume = 0;
        for(const i in workout){
            volume += parseInt(workout[i].weight) * parseInt(workout[i].reps) * parseInt(workout[i].sets)
        }

        let d = new Date();
        let hour = d.getHours();
        let M = "AM";
        if (hour === 12) {
            hour = 12;
        } else {
            if (hour > 11) {
                M = "PM"
            }
            hour = hour % 12;
            if (hour === 0) {
                hour = 12;
            }
        }
        let mins = d.getMinutes();
        if (mins < 10) {
            mins = "0" + mins;
        }
        let time = hour + ":" + mins;
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() + " at " + time + " " + M; 

        var postData = {
            name: name + " " + (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear(),
            date: date,
            time: d.toString(),
            volume: volume,
            image: source,
            description: Description,
            workout: name,
            userid: firebase.auth().currentUser.uid
        };
        firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/completed_workouts/' + Date.now()).set(postData)
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
            setImage(<Image source={{uri: result.uri}} style={styles.thumb} />);
            setSource(result.uri)
        }
    };

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 35, fontWeight: "bold"}}>Workout Completed</Text>
            <Text style={{fontSize: 30, marginVertical: "5%"}}>{name}</Text>
            <TouchableOpacity
                onPress={pickImage}
                style={styles.thumb}> 
                   {image}
            </TouchableOpacity> 
            <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "How was the workout?"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {value => {
                        //update name of workout in database
                        setDescription(value)
                    }}
                /> 
            <TouchableOpacity
                onPress={() => {
                    saveWorkout();
                    navigation.navigate('ChooseWorkoutScreen');
                }}
                style={styles.Button2}> 
                    <Text style={styles.ButtonText}>Finish</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        top: "5%"
    },
    leftText: {
        minWidth: "90%",
        textAlign: "left",
    },
    thumb: {
        height: 200,
        width: 200,
        marginBottom: 50,
        alignSelf: "center"
    },
    horContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        maxWidth: '100%'
    },
    arrow: {
        height: 50,
        width: 50,
        alignSelf: "center"
    },
    Button2: {
        elevation: 8,
        backgroundColor: "#2F4F4F",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: "100%"
    },
    ButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    input: {
        marginBottom: 15,
        height: "10%",
        width: 300,
        padding: 10,
        borderColor: '#7a42f4',
        borderWidth: 1,
        textAlign: "center" 
     }
})

export default WorkoutCompleted;