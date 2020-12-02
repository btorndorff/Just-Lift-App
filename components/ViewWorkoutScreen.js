import React, {useState} from 'react';
import { View, StyleSheet, Text, Image, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ExercisePlaylistView from './ExercisePlaylistView'
import * as firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';

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

function ViewWorkoutScreen({navigation, route}) {
    const [Workout, setWorkout] = useState([])
    const {workout} = route.params;

    /*function getcurrentExercises(){
        var excs;
        var ids = [];//ids of exercises in workout so far
        return firebase.database().ref('workout1/').once('value').then( function(snapshot){
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
        //return "bad";
    }*/

    function getcurrentExercises(){
        var excs;
        var ids = [];//ids of exercises in workout so far
        if (firebase.auth().currentUser.uid != null) {
            return firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/workouts/' + workout + '/exercises').once('value').then( function(snapshot){
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

    return (
        <ScrollView style={{width: "100%", backgroundColor : "lightblue"}}>
            <View style={styles.container}>
                <Image source={require('../assets/wallpaper5.jpg')} style={{height: 200, width: 200, marginTop: 50}}
                    onLoad={() => {
                        getcurrentExercises()
                        .then(workout=> {
                            setWorkout(workout)
                        })
                    }}/>
                <Text style={{fontSize: 30, margin: 10}}>{workout}</Text>
                <TouchableOpacity
                    onPress={() => {
                        getcurrentExercises()
                        .then(wk=> {
                            console.log(wk);
                            navigation.navigate('RecordWorkoutExercise',{name: workout, i:0, exercises: Workout})
                        })
                    }}
                    
                    title="Start Workout"
                    style={styles.button_login}
                >
                <Text style={styles.button_text}>Start Workout</Text>   
                </TouchableOpacity>
                <View style={styles.container}>
                    {Workout.map(x => <ExercisePlaylistView name={x.name} sets={x.sets} reps={x.reps} weight={x.weight} key={x.name}/>)}
                </View>
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
    horContainer: {
        flex: 1,
        minWidth: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
    },
    arrow: {
        height: 50,
        width: 50,
        alignSelf: "center"
    },
    button_login: {
        backgroundColor: "#009688",
        // backgroundColor: "#42d1f5",
        padding: 20,
        margin: 10,
        borderRadius: 5,
    },
    button_text:{
        fontSize: 20


    }
})

export default ViewWorkoutScreen;