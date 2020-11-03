import { setAutoInitEnabledAsync } from 'expo-facebook';
import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Workout3View from './Workout3View'
import RecordWorkoutExercise from './RecordWorkoutExercise';



function ChooseWorkoutScreen({navigation}) {
    return(
        <ScrollView style={{width:"100%"}}>
            <View style={styles.container}>
                <Workout3View navigation={navigation}/>
                <Button
                    onPress={() => navigation.navigate('CreateWorkoutScreen')}
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

export default ChooseWorkoutScreen;