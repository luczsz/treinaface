import { StatusBar } from 'react-native';
import { useFonts, Ubuntu_700Bold, Ubuntu_400Regular } from '@expo-google-fonts/ubuntu';
import AuthProvaider from './src/contexts/auth';

import Routes from './src/routes';

import { NavigationContainer } from '@react-navigation/native';

export default function App(){
  
  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold,
  });

  if(!fontsLoaded){
    return null;
  }
  
  
  return(
    <NavigationContainer>
      <AuthProvaider>
        <StatusBar backgroundColor={"transparent"} barStyle={'dark-content'} translucent={true} />
        <Routes/>
      </AuthProvaider>
    </NavigationContainer>
  )
}
