import { logOutAsync, setAutoInitEnabledAsync } from 'expo-facebook';
import React, {useState} from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Button} from 'react-native';
import Post from './Post';
import Workout3View from './Workout3View'
import * as Facebook from 'expo-facebook';
import * as firebaseApp from 'firebase'
import { useIsFocused } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
if (!firebaseApp.apps.length) {
  firebaseApp.initializeApp(firebaseConfig);
}

function UserScreen({navigation}) {
    const [User, setUser] = useState(firebaseApp.auth().currentUser);
    const [Posts, setPosts] = useState([])
    var userid = 'none';
    if (firebaseApp.auth().currentUser.uid) {
        userid = firebaseApp.auth().currentUser.uid;
    }
    const [Source, setSource] = useState()
    const [AVI, setAVI] = useState(<Image source={require("../assets/add.jpg")} style={styles.avi} />)
    const [NumWorkouts, setNumWorkouts] = useState(0)
    const [NumFollowers, setNumFollowers] = useState(0)
    const [NumFollowing, setNumFollowing] = useState(0)
    const [Checked, setChecked] = useState(0)
    const [Name, SetName] = useState();

    function getPosts(){
        var p;
        var ids = [];
        if (userid != null){
            return firebaseApp.database().ref('users/' + userid + '/completed_workouts').once('value').then( function(snapshot){
                p = snapshot.val();
                for(const i in p) {
                    /*getUser() 
                        .then(x => {
                            ids.push({name: p[i].name, volume: p[i].volume, date: p[i].date, image: p[i].image, description: p[i].description, workout: p[i].workout, username: x.name.first + " " + x.name.last});
                        })*/
                    ids.push({name: p[i].name, volume: p[i].volume, date: p[i].date, image: p[i].image, description: p[i].description, workout: p[i].workout});
                }
                return ids.reverse();
            })
        }
        return ids;
    }

    function getUser() {
        var p;
        if (userid != null){
            return firebaseApp.database().ref('users/' + userid).once('value').then( function(snapshot){
                p = snapshot.val();
                return p;
            })
        }
        return p;
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          firebaseApp.database().ref('users/' + userid + '/avi').set(result.uri)
          setSource(result.uri)
          setAVI(<Image source={{uri: result.uri}} style={styles.avi} />)
        }
    };
    
    function logOut(){
        firebaseApp.auth().signOut()
            .then(setUser(null))
    }

    if(useIsFocused()) {
        getPosts().then(p => setPosts(p))
        getUser().then(x => {
            setNumWorkouts(Object.keys(x.workouts).length - 1)
            setNumFollowers(Object.keys(x.social.followers).length - 1)
            setNumFollowing(Object.keys(x.social.following).length - 1)
        })
        /*getUser().then(x => {
            setSource(x.avi.avi)
            if (Source != "../assets/add.jpg") {
                setAVI(<Image source={{uri: x.avi.avi}} style={styles.avi} />)
            }
        })*/
    }


    if (Checked < 2) {
        setChecked(Checked + 1);
        //getPosts().then(p => setPosts(p))
        getUser().then(p => {
            SetName(p.name)
            console.log(p.avi)
            if (p.avi != null) {
                setSource(p.avi)
                setAVI(<Image source={{uri: p.avi}} style={styles.avi} />)
            }
        })
    }

    if (User === null) {
        return (<HomeScreen />)
    } else {
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
            <ScrollView style={{width:"100%"}}>
                <View style={styles.container}>
                    {/*AVI*/}
                    <Button title="logout" onPress={()=> logOut()}/>
                    <TouchableOpacity
                        onPress={pickImage}
                        style={styles.avi}> 
                            {AVI}
                    </TouchableOpacity>
                    <Text style={{fontSize: 30}}>{Name}</Text> 

                    {/*Followers,Following,Workouts*/}
                    <View style={styles.follows}>
                        <View style={styles.container}>
                            <Text style={styles.followText}>{NumWorkouts}</Text>
                            <Text style={styles.followText}>workouts</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.followText}>{NumFollowing}</Text>
                            <Text style={styles.followText}>following</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.followText}>{NumFollowers}</Text>
                            <Text style={styles.followText}>followers</Text>
                        </View>
                    </View>
    
                    {/*Workouts*/}
                    <Workout3View navigation={navigation}/>
    
                    {/*Social Posts*/}
                    <Text style={{fontSize: 40 , minWidth: "99%", textAlign: "center", margin: 10, fontWeight: "bold"}}>Activity</Text>
                    {Posts.map(x => <Post name={x.name} date={x.date} volume={x.volume} image={x.image} description={x.description} workout={x.workout} userid={userid}/>)}
                </View>
            </ScrollView>
            </LinearGradient>
        );
    }
    
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
        marginTop: "5%",
        height: 150,
        width: 150,
        borderRadius: 75,
        marginBottom: 10,

    },
    follows: {
        flex: 1,
        flexDirection: "row",
        top: 30,
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