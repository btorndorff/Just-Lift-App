import React from 'react';
import { View, StyleSheet, Text, Image,TextInput} from 'react-native';

function ExercisePlaylistView({navigation}) {
    return (
        <View style={styles.horContainer} >
            <View style={styles.container}>
                <TextInput style = {{textAlign: "left", minWidth: "90%", fontSize:20}}
                    underlineColorAndroid = "transparent"
                    placeholder = "Exercise"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                />
                <Text style={{textAlign: "left", minWidth: "90%"}}>3 Sets | 8 Reps | 135 lb</Text>
            </View>
            <Image source={require("../assets/arrow.png")} style={styles.arrow}/>
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
    },
})

export default ExercisePlaylistView;