import React, {useState} from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import { Dimensions } from 'react-native';
const win = Dimensions.get('window');
import { useIsFocused } from '@react-navigation/native';
import * as firebase from 'firebase'

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

function Post(workout) {
    const [username, setUsername] = useState("Bob Dylan"); 
    let image = <Image source={require("../assets/wallpaper5.jpg")} style={styles.ImageNone}/>
    /*if (workout.image != "../assets/add.jpg") {
        image = <Image source={{uri: workout.image}} style={styles.Image}/>
    }*/



    function getUser() {
        var p;
        if (firebase.auth().currentUser.uid != null){
            return firebase.database().ref('users/' + workout.userid).once('value').then( function(snapshot){
                p = snapshot.val();
                
                return p;
            })
        }
        return p;
    }

    if(useIsFocused()) {
        getUser().then(p => setUsername(p.name))
    }

    return (
        <View style={styles.container}>
            <View style={styles.horContainer}>
                <Image source={require("../assets/wallpaper5.jpg")} style={styles.avi}/>
                <View style={{alignSelf: "center"}}>
                    <Text>{username}</Text>
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
                    <Text style={{textAlign: "left", fontSize: 20}}>{workout.volume + "lbs"}</Text>
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