import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import { Dimensions } from 'react-native';
const win = Dimensions.get('window');

function Post(workout) {
    let image = <Image source={require("../assets/wallpaper5.jpg")} style={styles.ImageNone}/>
    if (workout.image != "../assets/add.jpg") {
        image = <Image source={{uri: workout.image}} style={styles.Image}/>
    }
    return (
        <View style={styles.container}>
            <View style={styles.horContainer}>
                <Image source={require("../assets/wallpaper5.jpg")} style={styles.avi}/>
                <View style={{alignSelf: "center"}}>
                    <Text>Benjamin Orndorff</Text>
                    <Text>{workout.date}</Text>
                </View>
            </View>
            <Text style={{textAlign: "left", minWidth: "100%", fontSize: 20}}>{workout.name}</Text>
            <Text style={{textAlign: "left", minWidth: "100%", marginBottom: 10}}>{workout.description}</Text>
            <View style={styles.horContainer2}>
                <View>
                    <Text style={{textAlign: "left"}}>Workout</Text>
                    <Text style={{textAlign: "left", fontSize: 20}}>{workout.workout}</Text>
                </View>
                <View>
                    <Text style={{textAlign: "left"}}>Time</Text>
                    <Text style={{textAlign: "left", fontSize: 20}}>58m 39s</Text>
                </View>
                <View>
                    <Text style={{textAlign: "left"}}>Volume</Text>
                    <Text style={{textAlign: "left", fontSize: 20}}>{workout.volume}</Text>
                </View>
            </View>
            {image}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#fff",
        padding: 10,
        marginBottom: "10%",
    },
    horContainer: {
        flex: 1,
        minWidth: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
    },
    horContainer2: {
        flex: 1,
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    avi: {
        height: 50,
        width: 50,
        borderRadius: 75,
        marginRight: 10,
    },
    Image : {
        marginTop: 10,
        aspectRatio: (600 / 330),
        width:  '100%',
        height: '100%',
        maxWidth: win.width,
        maxHeight: 250,
        marginLeft: 'auto',
        marginRight: 'auto',
        resizeMode: "stretch",
    },
    ImageNone : {
        height: 0,
        width: 0,
        margin: 0
    }
})

export default Post;