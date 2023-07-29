import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from "./HomeScreen"
import App2 from "./App"

const Stack = createStackNavigator();


export default function NavigationStack(){
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name ="Home" component = {HomeScreen} />
            <Stack.Screen name ="Calculadora" component = {App} />
        </Stack.Navigator>
    );
} 