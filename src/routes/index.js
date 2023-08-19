import React, {useContext} from 'react';
import { View, ActivityIndicator } from 'react-native';

//Contexto Auth

import AuthRoutes from './auth.routes';
//App Routes

export default function Routes(){
    // contexto - lodingo
    return(
        <AuthRoutes/>
    )
}
