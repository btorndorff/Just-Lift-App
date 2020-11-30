import { logOutAsync, setAutoInitEnabledAsync } from 'expo-facebook';
import React, {useState} from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Button} from 'react-native';
import Post from './Post';
import Workout3View from './Workout3View'
import * as Facebook from 'expo-facebook';
import * as firebaseApp from 'firebase'
import { useIsFocused } from '@react-navigation/native';
import HomeScreen from './HomeScreen';

var firebaseConfig = {
    apiKey: "AIzaSyCTmakAv2P965rn8RXxfocQC9EDmfbtGik",
    authDomain: "justliftapp-52af0.firebaseapp.com",
    databaseURL: "https://justliftapp-52af0.firebaseio.com",
    projectId: "justliftapp-52af0",
    storageBucket: "justliftapp-52af0.appspot.com",
    messagingSenderId: "459347127352",
    appId: "1:459347127352:web:c4dc3739b2d35ce1dccacd",
    measurementId: "G-KRT9MBHW9T"
  };
  // Initialize Firebase
if (!firebaseApp.apps.length) {
  firebaseApp.initializeApp(firebaseConfig);
}

function UserScreen({navigation}) {
    const [User, setUser] = useState(firebaseApp.auth().currentUser);
    const [Posts, setPosts] = useState([])
    const userid = firebaseApp.auth().currentUser.uid;

    function getPosts(){
        var p;
        var ids = [];
        if (userid != null){
            return firebaseApp.database().ref('users/' + userid + '/completed_workouts').once('value').then( function(snapshot){
                p = snapshot.val();
                for(const i in p){
                    ids.push({name: p[i].name, volume: p[i].volume, date: p[i].date});
                }
                return ids;
            })
        }
        return ids;
    }
    /*function logOut(){
        firebaseApp.auth().signOut()
            .then(setUser(null))
            .then(navigation.navigate("HomeScreen"));
    }*/

    if(useIsFocused()) {
        getPosts().then(p => setPosts(p))
    }

    return (
        <ScrollView style={{width:"100%"}}>
            <View style={styles.container}>
                {/*AVI*/}
                {/*<Button title="logout" onPress={()=> logOut()}/>*/}
                <Image source={require("../assets/wallpaper5.jpg")} style={styles.avi}/>
                {/*Followers,Following,Workouts*/}
                <View style={styles.follows}>
                    <View style={styles.container} onStartShouldSetResponder={() => navigation.navigate('ViewWorkoutScreen')}>
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
                <Workout3View navigation={navigation}/>

                {/*Social Posts*/}
                <Text style={{fontSize: 30, minWidth: "99%", textAlign: "left"}}>Activity</Text>
                {Posts.map(x => <Post name={x.name} date={x.date} volume={x.volume} />)}
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