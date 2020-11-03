import { setAutoInitEnabledAsync } from 'expo-facebook';
import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import Post from './Post';

function UserScreen() {
    return (
        <ScrollView style={{width:"100%"}}>
            <View style={styles.container}>
                {/*AVI*/}
                <Image source={require("../assets/wallpaper5.jpg")} style={styles.avi}/>

                {/*Followers,Following,Workouts*/}
                <View style={styles.follows}>
                    <View style={styles.container}>
                        <Text style={styles.followText}>4</Text>
                        <Text style={styles.followText}>workouts</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.followText}>8</Text>
                        <Text style={styles.followText}>following</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.followText}>9</Text>
                        <Text style={styles.followText}>followers</Text>
                    </View>
                </View>

                {/*Workouts*/}
                <View style={styles.container}>
                    <Text style={{fontSize: 30, minWidth: "100%", textAlign: "left"}}>Workouts</Text>
                    {/*first workout*/}
                    <View style={styles.horContainer}>
                        <Image source={require("../assets/wallpaper5.jpg")} style={styles.thumb}/>
                        <View style={styles.container}>
                            <Text style={styles.leftText}>9</Text>
                            <Text style={styles.leftText}>Exercises</Text>
                        </View>
                        <Image source={require("../assets/arrow.png")} style={styles.thumb}/>
                    </View>
                    {/*second workout*/}
                    <View style={styles.horContainer}>
                        <Image source={require("../assets/wallpaper5.jpg")} style={styles.thumb}/>
                        <View style={styles.container}>
                            <Text style={styles.leftText}>9</Text>
                            <Text style={styles.leftText}>Exercises</Text>
                        </View>
                        <Image source={require("../assets/arrow.png")} style={styles.thumb}/>
                    </View>
                    {/*third workout*/}
                    <View style={styles.horContainer}>
                        <Image source={require("../assets/wallpaper5.jpg")} style={styles.thumb}/>
                        <View style={styles.container}>
                            <Text style={styles.leftText}>9</Text>
                            <Text style={styles.leftText}>Exercises</Text>
                        </View>
                        <Image source={require("../assets/arrow.png")} style={styles.thumb}/>
                    </View>
                    {/*See More*/}
                    <View style={styles.horContainer}>
                        <Text style={{textAlign: "left",minWidth: "88%",alignSelf: "center", fontSize: 20}}>See More</Text>
                        <Image source={require("../assets/arrow.png")} style={styles.thumb}/>
                    </View>
                </View>

                {/*Social Posts*/}
                <Text style={{fontSize: 30, minWidth: "100%", textAlign: "left"}}>Activity</Text>
                <Post />
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
        flexDirection: "row",
        alignItems: "flex-start",
    },
    thumb: {
        height: 50,
        width: 50,
    },
    avi: {
        
        top: "2%",
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    follows: {
        flex: 1,
        flexDirection: "row",
        top: 50,
        justifyContent: "space-around",
        marginBottom: 75,
    },
    followText: {
        textAlign: "center",
    },
    leftText: {
        minWidth: "90%",
        textAlign: "left",
    }
})

export default UserScreen;