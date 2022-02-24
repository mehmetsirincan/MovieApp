import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



// Screens
import HomeScreen from './screens/HomeScreen';
import BottomTab from './BottomTab';
import DetailScreen from './screens/DetailScreen';
import TakeSeatScreen from './screens/TakeSeatScreen';
import OrderSummaryScreen from './screens/OrderSummaryScreen';
import PaymentScreen from './screens/PaymentScreen';
import TicketScreen from './screens/TicketScreen';


const Stack = createNativeStackNavigator();

const HomeStack =()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown : false}}  />
        </Stack.Navigator>
    );
}

const TicketStack =()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Ticket" component={TicketScreen} options={{headerShown : false}} />
        </Stack.Navigator>
    );
}



const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    
  return (
    <Tab.Navigator initialRouteName="Main" tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen name="Main" component={HomeStack}  options={{headerShown : false, tabBarLabel : 'Home'}} />
      <Tab.Screen name="Build" component={HomeStack}  options={{headerShown : false, tabBarLabel : 'Menu2'}} />
      <Tab.Screen name="Tickets" component={TicketStack}  options={{headerShown : false, tabBarLabel : 'Ticket'}}  />
    </Tab.Navigator>
  )

}

const ModalStack =()=>{
  return (
      <Stack.Navigator>
          <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown : false,headerTransparent:true}} />
          <Stack.Screen name="TakeSeat" component={TakeSeatScreen} options={{headerShown : false,headerTransparent:true}} />
          <Stack.Screen name="OrderSummary" component={OrderSummaryScreen} options={{headerShown : false,headerTransparent:true}} />
          <Stack.Screen name="Payment" component={PaymentScreen} options={{headerShown : false,headerTransparent:true}} />
      </Stack.Navigator>
  );
}

const Navigator = () => {
    
  return (
    <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="App" component={BottomTabs}  options={{headerShown : false}}  />
        <Stack.Screen name="Modals" component={ModalStack}  options={{headerShown : false}}  />
    </Stack.Navigator>
  )

}




export default Navigator;