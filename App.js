import { StatusBar } from 'react-native';

import AuthProvaider from './src/contexts/auth';

import Routes from './src/routes';

import { NavigationContainer } from '@react-navigation/native';

export default function App(){
  return(
    <NavigationContainer>
      <AuthProvaider>
        <StatusBar backgroundColor={"transparent"} barStyle={'dark-content'} translucent={true} />
        <Routes/>
      </AuthProvaider>
    </NavigationContainer>
  )
}
