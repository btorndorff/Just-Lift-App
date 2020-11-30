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
                for(const i in p){
                    ids.push({name: p[i].name, volume: p[i].volume, date: p[i].date});
                }
                return ids;
            })
        }
        return ids;
    }

    if(useIsFocused()) {
        getPosts().then(p => setPosts(p))
    }

    return (
        <ScrollView style={{width:"100%"}}>
            <View style={styles.container}>
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
})

export default SocialScreen;