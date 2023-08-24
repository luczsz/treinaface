import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { styles } from './style';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { theme } from '../../global/theme';

export default function Progress() {
 return (
   <View style={styles.container} >
        <View style={styles.header} >
            <MaterialCommunityIcons name='progress-star' size={34} color={theme.colors.secondary} />

            <Text style={{ fontSize: 22, fontWeight: 'bold', color: theme.colors.secondary }} >
                Seu progresso
            </Text>
        </View>
        <View style={styles.content} >
            <View style={styles.progresed}>
                <Entypo name='progress-one' size={34} color={theme.colors.secondary} />
                <Text style={styles.title} >
                    nivel 1
                </Text>
                <Text style={styles.subTitle} >
                    - Em progresso
                </Text>
            </View>
        </View>
   </View>
  );
}
