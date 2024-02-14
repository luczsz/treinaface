import React, {useState, useContext} from 'react';
import { View, Text, Button, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
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

                <ScrollView style={styled.contentModal}>
                 <Text  style={styled.labelModal}>
                 Esta Política de Privacidade descreve como as informações pessoais são coletadas, usadas e compartilhadas quando você utiliza este aplicativo.{`\n`}{`\n`}

**Coleta e Uso de Informações Pessoais**{`\n`}{`\n`}

Ao utilizar este aplicativo, podemos coletar informações sobre você, incluindo, mas não se limitando a:{`\n`}
- Informações de identificação pessoal, como nome, endereço de e-mail e outras informações que você voluntariamente nos fornece ao usar o aplicativo.{`\n`}
- Informações sobre como você utiliza o aplicativo, como quais recursos você acessa e como interage com o aplicativo.{`\n`}{`\n`}

Usamos as informações coletadas para:{`\n`}
- Fornecer e manter o funcionamento do aplicativo.{`\n`}
- Personalizar sua experiência de usuário e entender melhor suas necessidades.{`\n`}
- Enviar notificações importantes relacionadas ao uso do aplicativo.{`\n`}
- Analisar tendências e melhorar o desempenho e a qualidade do aplicativo.{`\n`}

**Compartilhamento de Informações Pessoais**{`\n`}{`\n`}

Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer os serviços oferecidos pelo aplicativo ou quando exigido por lei.{`\n`}

**Segurança**{`\n`}{`\n`}

Implementamos medidas de segurança razoáveis para proteger as informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.{`\n`}

**Links para Outros Sites**{`\n`}{`\n`}

Este aplicativo pode conter links para outros sites. Não somos responsáveis pelas práticas de privacidade desses outros sites e encorajamos você a ler as políticas de privacidade deles.{`\n`}

**Alterações a esta Política de Privacidade**{`\n`}{`\n`}

Podemos atualizar esta Política de Privacidade de tempos em tempos. Recomendamos que você revise esta página periodicamente para estar ciente de quaisquer alterações.{`\n`}

**Contato**{`\n`}{`\n`}

Se você tiver alguma dúvida ou preocupação sobre esta Política de Privacidade, entre em contato conosco em francisco.lucs@gmail.com.
                 </Text>
                </ScrollView>


            </View>
        </Modal>
   </View>
  );
}
