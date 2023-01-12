import { createStackNavigator } from '@react-navigation/stack';
import  FindDriverScreen from '../screens/FindDriverScreen'
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();


export default function MainTabNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="FindDriver">
      <Stack.Screen name="FindDriver" component={FindDriverScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
 
}