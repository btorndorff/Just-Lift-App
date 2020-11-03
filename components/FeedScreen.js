import * as React from 'react';
import { Button, Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import StatisticsScreen from './StatisticsScreen';
import SocialScreen from './SocialScreen';
import UserScreen from './UserScreen';
import RecordScreen from './RecordScreen';
import EditScreen from './EditScreen';


function Feed() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <SocialScreen />
      </View>
    );
  }
  
  function Account() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <UserScreen />
      </View>
    );
  }

  function Edit() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <EditScreen />
      </View>
    );
  }
  
  function Record() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <RecordScreen />
      </View>
    );
  }

  function Statistics() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <StatisticsScreen />
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