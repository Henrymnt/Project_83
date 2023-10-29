import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Profile from '../screens/Profile'
import TabNavigator from './TabNavigator'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name= 'Home' component={TabNavigator}/>
            <Drawer.Screen name= 'Profile' component={Profile}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator