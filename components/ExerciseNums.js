import React , {useState} from 'react';
import { View, StyleSheet, Text, Image, Button, TextInput, TouchableOpacity, } from 'react-native';
import ExercisePlaylistView from './ExercisePlaylistView';
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

const ChooseCategory = ({route, navigation}) => {
    let {exercise , workoutName} = route.params;
    const [Exercise, setExercise] = useState({name: exercise.name, reps: 0, sets: 0, weight: 0});

    function addExercise(exc) { //json object with id, name, etc..., for selected exercise
        //Update workout in database with the exercise added

        var postData = {
            name: exc.name,
            sets: exc.sets,
            reps: exc.reps,
            weight: exc.weight,
        };

        console.log(exercise.id)
        firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/workouts/' + workoutName + '/exercises/' + exercise.id).set(postData)
        //var newPostKey = firebase.database().ref().child('workout1').push().key;

        /*
        var updates = {};
        //updates['workout1/' + newPostKey] = postData;
        updates['users/' + firebase.auth().currentUser.uid + '/workouts/' + workoutName + '/exercises/' + exercise.id] = postData;

        firebase.database().ref().update(updates);
        */
        //navigate back to workout
        navigation.navigate('CreateWorkoutScreen')
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30}}>{Exercise.name}</Text>
            <Button
                    onPress={() => navigation.navigate('ChooseCategory')}
                    title="Cancel"
                    color="#841584"
            />
            <TextInput
                placeholder="Sets"
                keyboardType="number-pad" 
                style={{height: 50, width: 150, fontSize: 20, textAlign: "center"}}
                onChangeText={(value) => {
                    let exc = Exercise;
                    exc.sets = value;
                    setExercise(exc);
                }}/>
            <TextInput
                placeholder="Reps"
                keyboardType="number-pad" 
                style={{height: 50, width: 150, fontSize: 20, textAlign: "center"}}
                onChangeText={(value) => {
                    let exc = Exercise;
                    exc.reps = value;
                    setExercise(exc);
                }}/>
            <TextInput
                placeholder="Weight"
                keyboardType="number-pad" 
                style={{height: 50, width: 150, fontSize: 20, textAlign: "center"}}
                onChangeText={(value) => {
                    let exc = Exercise;
                    exc.weight = value;
                    setExercise(exc);
                }}/>
            <Button
                    onPress={() => {
                        //update workout
                        let exc = Exercise;
                        addExercise(exc)
                        navigation.navigate('CreateWorkoutScreen')
                    }}
                    title="Add"
                    color="#841584"
            />
        </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})

export default ChooseCategory;