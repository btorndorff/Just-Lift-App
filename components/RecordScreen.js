import { setAutoInitEnabledAsync } from 'expo-facebook';
import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Workouts from './Workouts'
import RecordWorkoutExercise from './RecordWorkoutExercise';


function RecordScreen() {
    

    return(
    <ScrollView style={{width:"100%"}}>
    <View style={styles.container}>
        <Workouts />
        <Button
            onPress={() => console.log('switch to create workout screen')}
            title="Create New Workout"
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
        top: "15%",
    }
})

export default RecordScreen;