import React from 'react';
import { View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';


import { slides } from '../../components/slider';
import Onbordning from '../../components/Onbordning';


export default function Splash() {
 
    const navigation = useNavigation();
 
    return (
        <AppIntroSlider
            renderItem={ Onbordning  }
            data={slides}
            activeDotStyle={{
                backgroundColor: '#0E3489',
                width: 30,
            }}
            dotStyle={{
                backgroundColor: '#f5f5f5'
            }}
            renderNextButton={ () => <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Próximo</Text> }
            renderDoneButton={ () => <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Entrar</Text> }
            onDone={ () => navigation.navigate('Login')}
        />
  );
}
