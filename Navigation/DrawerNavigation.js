import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../Screens/Profile'
import TabNavigator from './TabNavigator'

const Drawer = createDrawerNavigator()

const DrawerNavigator = ()=>{
return(
<Drawer.Navigator>
<Drawer.screen
name = 'Home' component = {BottomTabNavigator}
/>
<Drawer.screen
name = 'Profile Page' component = {ProfilePage}
/>
</Drawer.Navigator>
);
}
export default DrawerNavigator;