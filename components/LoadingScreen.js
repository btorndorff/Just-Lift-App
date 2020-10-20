import * as React from 'react';
import { Text, View, ImageBackground, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class LoadingScreen extends React.Component {
    render(){
      return (
        <View style={styles.container}>
        <LinearGradient
          colors={['#D4EFF5', '#B4EDFF', '#026479']}
          start ={[1,1]}
          end = {[0.1, 0.1]}
          style={{
            flex: 1, 
            flexDirection: 'column',
            width: "100%",
            justifyContent: 'center', 
            alignItems: 'center',
          }}>
        <Image source={require("../assets/dumbell.png")} style={styles.logo} />
        <Text style={styles.instructions}>
          JustLift
        </Text> 
        </LinearGradient>
      </View>
      )
    }
}