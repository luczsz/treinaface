import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import { styles } from './style';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';
import { notifications } from '../../components/list';
import ListNotification from '../../components/ListNotification';

export default function Notifications() {

    const navigation = useNavigation();

 return (
   <View style={styles.container} >
        <View style={styles.header}>
            <TouchableOpacity
                onPress={ () => navigation.goBack()}
            >
             <Feather name='arrow-left-circle' size={30} color={theme.colors.primary} />
            </TouchableOpacity>
            <Text style={styles.title} >Notificações</Text>
        </View>

        <View style={styles.content}>
            <FlatList
               showsVerticalScrollIndicator={false}
               data={notifications}
               keyExtractor={(item) => item.id}
               renderItem={({item}) => <ListNotification data={item} /> } 
            />
        </View>
   </View>
  );
}
