import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';

function WorkoutPlaylistView({navigation, name, numExcs}) {
    return (
        <View style={styles.container} onStartShouldSetResponder={() => navigation.push('ViewWorkoutScreen', {workout: name})} hitSlop={{top: -100, left: -100, bottom: -100, right: -100}}>
            <View style={styles.horContainer}>
                <Image source={require("../assets/wallpaper5.jpg")} style={styles.thumb} />
                <View style={styles.container}>
                    <Text style={styles.leftText}>{name}</Text>
                    {/*<Text style={styles.leftText}>{numExcs - 1} Exercises</Text>*/}
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
        alignSelf: "center",
    },
    leftText: {
        minWidth: "90%",
        textAlign: "left",
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    thumb: {
        height: 100,
        width: 100,
    },
    horContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        maxWidth: '100%',
        backgroundColor : "#42d1f5",
        borderWidth: .5,
        margin: 3
    },
    arrow: {
        height: 50,
        width: 50,
        alignSelf: "center"
    }
})

export default WorkoutPlaylistView;