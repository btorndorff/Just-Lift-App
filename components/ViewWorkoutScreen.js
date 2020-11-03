import React from 'react';
import { View, StyleSheet, Text, Image, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ExercisePlaylistView from './ExercisePlaylistView'

function ViewWorkoutScreen({navigation}) {
    return (
        <ScrollView style={{width: "100%"}}>
            <View style={styles.container}>
                <Image source={require('../assets/wallpaper5.jpg')} style={{height: 200, width: 200, marginTop: 50}}/>
                <Text style={{fontSize: 30}}>Push Day</Text>
                <Text>6 Excercises</Text>
                <Button
                    onPress={() => navigation.navigate('RecordWorkoutExercise')}
                    title="Start Workout"
                    color="#841584"
                />
                <ExercisePlaylistView />
                <ExercisePlaylistView />
                <ExercisePlaylistView />
                <ExercisePlaylistView />
                <ExercisePlaylistView />
                <ExercisePlaylistView />
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

export default ViewWorkoutScreen;