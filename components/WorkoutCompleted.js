import React, {useState} from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';

function WorkoutCompleted({navigation, route}) {
    const {name} = route.params;
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 35, fontWeight: "bold"}}>Workout Completed</Text>
            <Text style={{fontSize: 30, marginVertical: "5%"}}>{name}</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('ChooseWorkoutScreen')}
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