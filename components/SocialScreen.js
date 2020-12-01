import React, {useState} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Post from "./Post"
import * as firebase from 'firebase'
import { useIsFocused } from '@react-navigation/native';

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
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

function SocialScreen() {
    const [Posts, setPosts] = useState([])
    const userid = firebase.auth().currentUser.uid;

    function getPosts(){
        var p;
        var ids = [];
        if (userid != null){
            return firebase.database().ref('users/' + userid + '/completed_workouts').once('value').then( function(snapshot){
                p = snapshot.val();
                for(const i in p) {
                    /*getUser(p[i].user) 
                        .then(x => {
                            ids.push({name: p[i].name, volume: p[i].volume, date: p[i].date, image: p[i].image, description: p[i].description, workout: p[i].workout, avi: x.avi.avi, username: x.name.first + " " + x.name.last});
                        })*/
                    ids.push({name: p[i].name, volume: p[i].volume, date: p[i].date, image: p[i].image, description: p[i].description, workout: p[i].workout});
                }
                return ids.reverse();
            })
        }
        return ids;
    }

    function getUser(user) {
        var p;
        if (userid != null){
            return firebase.database().ref('users/' + user).once('value').then( function(snapshot){
                p = snapshot.val();
                return p;
            })
        }
        return p;
    }

    if(useIsFocused()) {
        getPosts().then(p => setPosts(p))
    }

    return (
        <ScrollView style={{width:"100%"}}>
            <View style={styles.container}>
                {Posts.map(x => <Post name={x.name} date={x.date} volume={x.volume} image={x.image} description={x.description} workout={x.workout} avi={x.avi} username={x.username}/>)}
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
})

export default SocialScreen;