import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../pages/Splash';
import Login from '../pages/SingIn';
import Cadastro from '../pages/SingUp';

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name='Splash' 
                component={Splash}
                options={{
                    headerShown: false,
                }} 
            />
    
            <AuthStack.Screen name='Login' component={Login} />
            <AuthStack.Screen name='Cadastro' component={Cadastro} />
        </AuthStack.Navigator>
    )
}
