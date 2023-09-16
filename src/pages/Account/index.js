import React, {useState, useContext} from 'react';
import { View, Text, Button, Image, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles, styled } from './style';
import ProfileIdoso from '../../assets/7.jpg';
import { AntDesign, Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';


import { AuthContext } from '../../contexts/auth';

export default function Account() {
    
    const { user, SingOut } = useContext(AuthContext);
    const navigate = useNavigation();

    const [open, setOpen] =  useState(false);
    
return (
   <View style={styles.container} >
        <View style={styles.header} >
            <Image
                source={ProfileIdoso}
                style={styles.profile}
            />
            
            <Text style={styles.username}> {user.nome} </Text>
            <Text style={styles.useremail} > {user.email} </Text>
        </View>

        <View style={styles.content} >
        
            <TouchableOpacity style={styles.menuItem} onPress={ () => navigate.navigate('Registros')} >
                <AntDesign name='user' size={25} color={theme.colors.secondary} />
                <Text style={[styles.username, {textTransform: 'uppercase'}]}>Seus dados</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem} onPress={ () => setOpen(true)} >
                <AntDesign name='Safety' size={25} color={theme.colors.secondary} />
                <Text style={[styles.username, {textTransform: 'uppercase'}]}>Politica e Privacidade</Text>
            </TouchableOpacity>
        
        </View>

        <View style={styles.footer} >

            <TouchableOpacity 
                style={{flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'center'}} 
                onPress={ () => SingOut()}
            >
                <AntDesign name='logout' size={24} color={theme.colors.secondary} />
                <Text style={styles.username} >
                    SAIR
                </Text>
            </TouchableOpacity>
        </View>

        {/* POLITICA DE PRIVACIDADE */}
        <Modal
            visible={open}
            animationType='fade'
            onRequestClose={ () => setOpen(false)}
        >
            <View style={styled.containerModal}>
                <View style={styled.headerModal}>
                    <TouchableOpacity onPress={ () => setOpen(false)} activeOpacity={0.8}>  
                     <Feather name='arrow-left-circle' size={30} color={theme.colors.primary} />
                    </TouchableOpacity>
                    <Text style={styled.titleModal}>
                        Política de privacidade
                    </Text>

                </View>

                <View style={styled.contentModal}>
                 <Text  style={styled.labelModal}>
                    politica de privacidade
                 </Text>
                </View>
            </View>
        </Modal>
   </View>
  );
}
