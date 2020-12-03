import React, {useState} from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import WorkoutPlaylistView from './WorkoutPlaylistView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase'
import { useIsFocused } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

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

function EditScreen({navigation}) {
    const [Workouts, setWorkouts] = useState([]);
    const userid = firebase.auth().currentUser.uid;

    function getWorkouts(){
        var wks;
        var ids = [];
        if (userid != null){
            return firebase.database().ref('users/' + userid + '/workouts').once('value').then( function(snapshot){
                wks = snapshot.val();
                let x = Object.keys(wks)
                if(x.length > 1) {
                    for(const i in wks){
                        ids.push({name: wks[i].name, numExcs: Object.keys(wks[i]).length, image: wks[i].img});
                    }
                    console.log()
                    ids.splice(ids.findIndex(x => x.name === 'temp'),1)
                }
            
                return ids;
            })
        }
        return ids;
    }

    if(useIsFocused()) {
        getWorkouts().then(wks => setWorkouts(wks))
    }

    return (
        <LinearGradient
          colors={['#D4EFF5', '#B4EDFF', '#026479']}
          start ={[1,1.4]}
          end = {[0.1, 0.1]}
          style={{
            flex: 1, 
            flexDirection: 'column',
            width: "100%",
            justifyContent: 'center', 
            alignItems: 'center',
          }}>
        <ScrollView style={{maxWidth: "100%"}}>
            
            <View style={styles.container}>
            <Text style={{fontSize: 40, minWidth: "99%", textAlign: "center", margin: 30, fontWeight: "bold", color: "white"}}>Edit Workout</Text>
            {/*Create Workout*/}
            <View style={styles.horContainer} onStartShouldSetResponder={() => navigation.navigate('CreateWorkoutScreen')}>
                <Image source={require("../assets/add.jpg")} style={styles.thumb}/>
                <View style={styles.container}>
                    <Text style={styles.leftText}>Create Workout</Text>
                </View>
                <Image source={require("../assets/arrow.png")} style={styles.arrow}/>
            </View>
            <View style={styles.container}>
                {Workouts.map(x => <WorkoutPlaylistView navigation={navigation} name={x.name} numExcs={x.numExcs} image={x.image}/>)}
            </View>
        </View>
        </ScrollView>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        alignSelf: "center",
        margin: 10,
        
    },
    
    leftText: {
        minWidth: "90%",
        textAlign: "left",
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
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
        margin: 10,
        backgroundColor: "#505050",
        borderWidth: .5
    },
    arrow: {
        height: 50,
        width: 50,
        alignSelf: "center"
    }
})

export default EditScreen;