import React , {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, Button, TextInput, TouchableOpacity, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ExercisePlaylistView from './ExercisePlaylistView'
import * as firebase from 'firebase'
import { useIsFocused } from '@react-navigation/native';

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

function CreateWorkoutScreen({navigation}) {
    const [Workout, setWorkout] = useState({
        name: "temp",
        exercises: {
          0: {
            name: "temp",
            sets: 0,
            reps: 0,
            weight: 0
          }
        }
      })
    //create this workout in the database
    const userid = firebase.auth().currentUser.uid;

    function getExercise() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic Ym9yZmY6ODgyMjI3NTEzYzk1ZDJhZTQyZTYwZDJlODEyMjM2MmM0YTUzYTcxMQ==");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
        return fetch("https:wger.de/api/v2/exercisecategory/", requestOptions)
            .then(r => r.json().then(data => ({
                status:r.status,
                body:data
            })))
            .then((obj) => {
            let arr = obj.body.results;
            return arr; //array of exercise categories (arms, abs, chest, ...)
          })
    
    }
    
    function getcurrentExercises(){
        var excs;
        var ids = [];//ids of exercises in workout so far
        if (userid != null) {
            return firebase.database().ref('users/' + userid + '/workouts/' + Workout.name + '/exercises').once('value').then( function(snapshot){
                excs = snapshot.val();

                //get ids for exercises
                for(const i in excs){
                    ids.push({name : excs[i].name, sets : excs[i].sets, reps : excs[i].reps, weight : excs[i].weight});
                }
                return ids;
                //console.log(ids)
                // const listItems = ids.map((d) => <li key={d.name}>{d.name}{d.sets}{d.reps}{d.weight}</li>);
                // return listItems;
            })
        }
        //return "bad";
    }

    function updateWorkout(){
        var excs;
        var ids = [];
        if (userid != null){
            firebase.database().ref('users/' + userid + '/workouts/' + Workout.name).set({
                name: Workout.name,
                exercises: Workout.exercises
            }) 
        }
    }

    if(useIsFocused()) {
        getcurrentExercises()
            .then(workout=> {
            setWorkout(workout)
        })
    }
    
    return (
        <ScrollView style={{width: "100%"}}>
            <View style={styles.container} isfoc>

                {/* add support for user to add custom image */}
                <Image 
                    source={require('../assets/add.jpg')} style={{height: 150, width: 150, marginTop: 50}}
                    onLoad={() => {
                        getcurrentExercises()
                        .then(workout=> {
                            setWorkout(workout);
                        })
                    }}
                />
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Title of Workout"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {value => {
                        //update name of workout in database
                        console.log(value);
                    }}
                /> 
                <View style={styles.container}>
                    
                </View>

                <View style={styles.hContainer}>
                    <TouchableOpacity
                        //val is array of id and name for exercise categories
                        onPress={() => getExercise().then((val) => {
                            if (Workout.name != "temp") {
                                updateWorkout();
                                navigation.navigate('ChooseCategory', {categories: val}) 
                            } else {
                                Alert.alert("Please Enter the Workout Name First");
                            }
                        })}
                        style={styles.button_login}>
                        <Text style={styles.buttonLText}>Add Excercise</Text>  
                    </TouchableOpacity> 
                </View>
                <Button
                    onPress={() => navigation.navigate('EditScreen')}
                    title="Cancel"
                    color="#841584"
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
      },
    buttonLText: {
        fontSize: 20,
        color: '#FFFFFF',
      },
    hcontainer: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#ecf0f1',
        padding: 8,
        flexDirection:'row',
        alignItems:'center'
    
    
      },
      button_login: {
        backgroundColor: "black",
        padding: 20,
        borderRadius: 5,
      },
    horContainer: {
        flex: 1,
        minWidth: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
    },
    arrow: {
        height: 50,
        width: 50,
        //alignSelf: "bottom"
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
     },
      textInputContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        borderColor: 'black',
        borderBottomWidth: 1,
        paddingRight: 10,
        paddingBottom: 10,
      },
})

export default CreateWorkoutScreen;