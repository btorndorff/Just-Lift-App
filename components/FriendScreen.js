import React, {useState} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Post from "./Post"
import * as firebase from 'firebase'
import UserPlaylistView from './UserPlaylistView'
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

function FriendScreen({navigation}) {
    const [NotFriends, setNotFriends] = useState([])
    const userid = firebase.auth().currentUser.uid;

    function getNotFriends(){
        var p;
        var ids = [];
        if (userid != null){
            return firebase.database().ref('users/' + userid + '/social/following').once('value').then( function(snapshot){
                p = snapshot.val();
                for(const i in p) {
                    /*getUser(p[i].user) 
                        .then(x => {
                            ids.push({name: p[i].name, volume: p[i].volume, date: p[i].date, image: p[i].image, description: p[i].description, workout: p[i].workout, avi: x.avi.avi, username: x.name.first + " " + x.name.last});
                        })*/
                    ids.push(p[i]);
                }
                ids.push(userid)
                return ids;
            })
        }
        return ids;
    }

    function getUsers(user) {
        var p;
        if (userid != null){
            return firebase.database().ref('users').once('value').then( function(snapshot){
                p = snapshot.val();
                return Object.keys(p);
            })
        }
        return p;
    }

    if(useIsFocused()) {
        getUsers()
            .then(users => {
                getNotFriends()
                    .then(p => {
                        let arr = users.filter(val => !p.includes(val))
                        setNotFriends(arr)
                    })
            })
        
    }

    return (
        <ScrollView style={{width:"100%"}}>
            <View style={styles.container}>
                {NotFriends.map(x => <UserPlaylistView userid={x} />)}
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

export default FriendScreen;