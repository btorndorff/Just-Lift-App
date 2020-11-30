import React, {useState} from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase'

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
    const {name, workout} = route.params;

    function saveWorkout() {
        let volume = 0;
        for(const i in workout){
            volume += parseInt(workout[i].weight) * parseInt(workout[i].reps) * parseInt(workout[i].sets)
        }

        let d = new Date();
        let hour = d.getHours();
        let M = "PM";
        if (hour === 12) {
            hour = 12;
        } else {
            if (hour % 12 != hour) {
                M = "PM"
            }
            hour = hour % 12;
        }
        let time = hour + ":" + d.getMinutes();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() + " at " + time + " " + M; 


        var postData = {
            name: name,
            date: date,
            volume: volume
        };
        firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/completed_workouts/' + Date.now()).set(postData)
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 35, fontWeight: "bold"}}>Workout Completed</Text>
            <Text style={{fontSize: 30, marginVertical: "5%"}}>{name}</Text>
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
        alignSelf: "center",
        top: "10%"
    },
    leftText: {
        minWidth: "90%",
        textAlign: "left",
    },
    thumb: {
        height: 100,
        width: 100,
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
    }
})

export default WorkoutCompleted;