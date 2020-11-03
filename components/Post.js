import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';

function Post() {
    return (
        <View style={styles.container}>
            <View style={styles.horContainer}>
                <Image source={require("../assets/wallpaper5.jpg")} style={styles.avi}/>
                <View style={{alignSelf: "center"}}>
                    <Text> Jeffery Lai</Text>
                    <Text>September 19, 2020 at 4:35 PM</Text>
                </View>
            </View>
            <Text style={{textAlign: "left", minWidth: "100%", fontSize: 20}}>Saturday Workout</Text>
            <Text style={{textAlign: "left", minWidth: "100%", marginBottom: 10}}>Great Awesome workout time</Text>
            <View style={styles.horContainer2}>
                <View>
                    <Text style={{textAlign: "left"}}>Workout</Text>
                    <Text style={{textAlign: "left", fontSize: 20}}>Pull Day</Text>
                </View>
                <View>
                    <Text style={{textAlign: "left"}}>Time</Text>
                    <Text style={{textAlign: "left", fontSize: 20}}>58m 39s</Text>
                </View>
                <View>
                    <Text style={{textAlign: "left"}}>Volume</Text>
                    <Text style={{textAlign: "left", fontSize: 20}}>7,098 lb</Text>
                </View>
            </View>
            <Image source={require("../assets/wallpaper5.jpg")} style={styles.Image}/>
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
        marginBottom: "25%",
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
        width: '100%',
        height: '100%',
        maxWidth: 600,
        maxHeight: 330,
        marginLeft: 'auto',
        marginRight: 'auto',
        resizeMode: 'contain',
    }
})

export default Post;