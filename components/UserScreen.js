import { logOutAsync, setAutoInitEnabledAsync } from 'expo-facebook';
import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Button} from 'react-native';
import Post from './Post';
import Workout3View from './Workout3View'
import * as Facebook from 'expo-facebook';

// function logOut(){
//     Facebook.logOutAsync();
//     navigate('Home');
// }

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
                {/* <Button title="logout" onPress={()=> logOut()}/> */}
                {/*Workouts*/}
                <Workout3View />

                {/*Social Posts*/}
                <Text style={{fontSize: 30, minWidth: "99%", textAlign: "left"}}>Activity</Text>
                <Post />
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