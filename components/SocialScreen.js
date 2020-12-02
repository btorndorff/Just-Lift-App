import React, {useState} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Post from "./Post"
import * as firebase from 'firebase'
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


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

function SocialScreen({navigation}) {
    const [Posts, setPosts] = useState([])
    const userid = firebase.auth().currentUser.uid;

    function getPosts(users){
        var p;
        var ids = [];
        if (userid != null){
            return firebase.database().ref('users/').once('value').then( function(snapshot){
                p = snapshot.val();
                let keys = Object.keys(p);
                let index = 0
                for (const j in p) {
                    if (users.includes(keys[index])) {
                        if (p[j].completed_workouts != null) {
                            let posts = p[j].completed_workouts
                            for (const i in posts) {
                                ids.push({name: posts[i].name, volume: posts[i].volume, date: posts[i].date, image: posts[i].image, description: posts[i].description, workout: posts[i].workout, userid: posts[i].userid, time: posts[i].time});
                            }
                        }
                    }
                    index++;
                }
                ids = ids.sort(function(a,b){
                    return new Date(b.time) - new Date(a.time)
                });
                return ids;
            })
        }
        return ids;
    }

    function getUserFollowing() {
        var p;
        if (userid != null){
            return firebase.database().ref('users/' + userid  + "/social/following").once('value').then( function(snapshot){
                p = snapshot.val();
                return Object.keys(p);
            })
        }
        return p;
    }

    if(useIsFocused()) {
        getUserFollowing()
            .then(users => {
                users.push(userid)
                users = users.filter(id => id != "temp")
                getPosts(users).then(p => setPosts(p))
            })
    }

    return (
        <ScrollView style={{width:"100%"}}>
            <TouchableOpacity
                onPress={() => navigation.navigate('FriendScreen')}
                style={styles.Button2}> 
                    <Text style={styles.ButtonText}>Add Friends</Text>
            </TouchableOpacity>
            <View style={styles.container}>
                {Posts.map(x => <Post name={x.name} date={x.date} volume={x.volume} image={"../assets/add.jpg"} description={x.description} workout={x.workout} avi={x.avi} userid={x.userid}/>)}
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
    Button2: {
        elevation: 8,
        backgroundColor: "#2F4F4F",
        borderRadius: 0,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: "100%"
    },
    ButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})

export default SocialScreen;