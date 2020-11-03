import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';

function WorkoutPlaylistView() {
    return (
        <View style={styles.container}>
            <View style={styles.horContainer}>
                <Image source={require("../assets/wallpaper5.jpg")} style={styles.thumb}/>
                <View style={styles.container}>
                    <Text style={styles.leftText}>Pull Day</Text>
                    <Text style={styles.leftText}> 9 Exercises</Text>
                </View>
                <Image source={require("../assets/arrow.png")} style={styles.arrow}/>
            </View>
        </View>
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

export default WorkoutPlaylistView;