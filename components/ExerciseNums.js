import React , {useState} from 'react';
import { View, StyleSheet, Text, Image, Button, TextInput, TouchableOpacity, } from 'react-native';
import ExercisePlaylistView from './ExercisePlaylistView';

const ChooseCategory = ({route, navigation}) => {
    const [Exercise, setExercise] = useState({name: route.params.exercise.name, reps: 0, sets: 0, weight: 0})
    
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