import React from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';

function RecordWorkoutExercise() {
    return (
        <View style={styles.container}>
            <Text>Workout Name Date</Text> 
            <Text>Workout Title</Text>
            <Text>Set i: reps x weight</Text>
            <Button
                onPress={() => console.log('switch to create workout screen')}
                title="Next Exercise"
                color="#841584"
            />
            <Button
                onPress={() => console.log('switch to create workout screen')}
                title="End Workout"
                color="#841584"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    }
})

export default RecordWorkoutExercise;