import React, {useState} from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function RecordWorkoutExercise({route, navigation}) {
    let {name, i, exercises} = route.params;
    const [Index, setIndex] = useState(0);
    const [Exercise, setExercise] = useState(exercises[i])
    let date = new Date();
    date = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 40, marginBottom: 10, fontWeight: "bold"}}>{name + " " + date}</Text> 
            <Text style={{fontSize: 30, marginBottom: 10}}>{Exercise.name}</Text>
            <Text style={{fontSize: 30}}>Set {Exercise.sets}: {Exercise.reps} x {Exercise.weight}</Text>
            <TouchableOpacity
                 onPress={() => {
                    let i = Index + 1;
                    if (i != exercises.length) {
                        setIndex(i);
                        setExercise(exercises[i]);
                    } else {
                        navigation.navigate('WorkoutCompleted',{name: name, workout: exercises})
                    };
                }}
                style={styles.Button1}> 
                    <Text style={styles.ButtonText}>Next Exercise</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('WorkoutCompleted',{name: name + " " + date, workout: exercises})}
                style={styles.Button2}> 
                    <Text style={styles.ButtonText}>End Workout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        top: "5%",
        height: "100%"
    },
    Button1: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: "100%",
        marginVertical: 10
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

export default RecordWorkoutExercise;