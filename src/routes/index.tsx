import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { create } from 'react-test-renderer';


import SignUp from '../pages/SignIn';
import SignIn from '../pages/SignUp';
const Auth = createStackNavigator(); 

const AuthRoutes: React.FC = () =>(
    <Auth.Navigator 
        screenOptions={{
            headerShown:false,
            cardStyle:{backgroundColor:'#312e38'}
        }}
    >
        <Auth.Screen name="SignIn" component={SignIn}/>
        <Auth.Screen name="SignUp" component={SignUp}/>
    </Auth.Navigator>
)

 export default AuthRoutes;