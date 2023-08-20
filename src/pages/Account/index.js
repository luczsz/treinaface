import React, {useState, useContext} from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth';

export default function Account() {
    
    const { SingOut } = useContext(AuthContext);
    
return (
   <View>
        <Text>USER DADOS</Text>
        <Button
            title='LOGOUT'
            onPress={ () => SingOut()}
        />
   </View>
  );
}
