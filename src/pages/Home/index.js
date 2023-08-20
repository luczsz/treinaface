  import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';
import Header from '../../components/Header';

export default function Home() {
 return (
   <View>
        <Header/>
        <View style={styles.content} >

        <Text>HME</Text>
        </View>
   </View>
  );
}
