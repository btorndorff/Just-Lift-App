import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ExercisePlaylistView from './ExercisePlaylistView'

function CreateWorkoutScreen() {
    return (
        <ScrollView style={{width: "100%"}}>
            <View style={styles.container}>
                <Image source={require('../assets/add.jpg')} style={{height: 200, width: 200, marginTop: 50}}/>
                <Text style={{fontSize: 30}}>Push Day</Text>
                <Text style={{marginBottom: 20}}>6 Excercises</Text>
                <ExercisePlaylistView />
                <View style={styles.horContainer}>
                    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{textAlign: "left", minWidth: "90%", fontSize:20}}>Add Excercise</Text>
                    </View>
                    <Image source={require("../assets/arrow.png")} style={styles.arrow}/>
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
    }
})

export default CreateWorkoutScreen;