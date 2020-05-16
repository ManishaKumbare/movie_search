import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import * as React from 'react';

import MoviesScreen from "../screens/MoviesScreen";

import ShowScreen from "../screens/ShowScreen";



const Stack = createStackNavigator();



export default function AppRoutes() {

    return (

        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen name="HomeScreen" component={MoviesScreen} options={{title: "Movies List"}}/>

                <Stack.Screen name="ShowScreen" component={ShowScreen} options={{title: "Movie Detail"}}/>

            </Stack.Navigator>

        </NavigationContainer>

    );

}