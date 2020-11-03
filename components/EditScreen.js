import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import WorkoutHorDisplay from './WorkoutHorDisplay';

function EditScreen() {
    return (
        <ScrollView style={{maxWidth: "100%"}}>
            <View style={styles.container}>
            <Text style={{fontSize: 30, minWidth: "99%", textAlign: "left"}}>Workouts</Text>
            {/*Create Workout*/}
            <View style={styles.horContainer}>
                <Image source={require("../assets/add.jpg")} style={styles.thumb}/>
                <View style={styles.container}>
                    <Text style={styles.leftText}>Create Workout</Text>
                </View>
                <Image source={require("../assets/arrow.png")} style={styles.arrow}/>
            </View>
            <WorkoutHorDisplay />
            <WorkoutHorDisplay />
            <WorkoutHorDisplay />
            <WorkoutHorDisplay />
            <WorkoutHorDisplay />
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        alignSelf: "center"
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
    }
})

export default EditScreen;