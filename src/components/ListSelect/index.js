import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './style';

export default function ListSelect({data, infor}) {
    const id = data.status; //igual 0
    const statusUser = '1'; // igual 1

 return (
           <TouchableOpacity 
            style={styles.button} 
            onPress={ () => infor(data)}
           >
                <Text style={styles.buttonText} > {data.key} </Text>
                
            </TouchableOpacity>
  );
}
