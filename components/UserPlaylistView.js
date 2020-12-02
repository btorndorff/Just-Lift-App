import React, {useState} from 'react';
import { View, StyleSheet, Text, Image,TextInput} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import * as firebase from 'firebase'
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

function UserPlaylistView({navigation, userid}) {
    const [name, setName] = useState('')
    const [added, setAdded] = useState(false)

    function getUser() {
        var p;
        if (userid != null){
            return firebase.database().ref('users/' + userid).once('value').then( function(snapshot){
                p = snapshot.val();
                return p.name;
            })
        }
        return p;
    }

    function addFriend() {
        firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/social/following/' + userid).set(userid)
        firebase.database().ref('users/' + userid + '/social/followers/' + firebase.auth().currentUser.uid).set(firebase.auth().currentUser.uid)
    }

    if(useIsFocused()) {
        getUser().then(user => setName(user))
    }

    return (
        <View style={styles.horContainer} >
            <View style={styles.container}>
                <Text style={{textAlign: "left", minWidth: "90%"}}>{name}</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    addFriend()
                    setAdded(true)
                }}
                disabled={added}
                style={styles.Button}> 
                    <Text style={styles.ButtonText}>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        alignSelf: "center",
    },
    leftText: {
        minWidth: "90%",
        textAlign: "left",
    },
    thumb: {
        height: 100,
        width: 100,
    },
    horContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        maxWidth: '100%',
        borderBottomWidth: 2,
        borderBottomColor: "black",
    },
    arrow: {
        height: 50,
        width: 50,
        alignSelf: "center"
    },
    Button: {
        elevation: 8,
        backgroundColor: "#2F4F4F",
        borderRadius: 0,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: "100%",
    },
    ButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})

export default UserPlaylistView;