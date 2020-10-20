import * as React from 'react';
import { Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


function Feed() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed!</Text>
      </View>
    );
  }
  
  function Account() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Account!</Text>
      </View>
    );
  }

  function Edit() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Edit Workout!</Text>
      </View>
    );
  }
  
  function Record() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Record Workout!</Text>
      </View>
    );
  }

  function Statistics() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Statistics!</Text>
      </View>
    );
  }

  const Tab = createBottomTabNavigator();


export default class FeedScreen extends React.Component {
    render(){
      return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Feed') {
                    iconName = focused ? 'ios-home' : 'ios-home';
                    } else if (route.name === 'Account') {
                    iconName = focused ? 'md-person' : 'md-person';
                    } else if (route.name === 'Edit') {
                        iconName = focused ? 'ios-create' : 'ios-create';
                    } else if (route.name == 'Record'){
                        iconName = focused ? 'ios-fitness' : 'ios-fitness';
                    } else if (route.name == 'Statistics'){
                        iconName = focused ? 'ios-stats' : 'md-stats';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                })}
                tabBarOptions={{
                activeTintColor: '#42d1f5',
                inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Feed" component={Feed} />
                <Tab.Screen name="Edit" component={Edit} />
                <Tab.Screen name="Record" component={Record} />
                <Tab.Screen name="Statistics" component={Statistics} />
                <Tab.Screen name="Account" component={Account} />
            </Tab.Navigator>
      );
    }
}