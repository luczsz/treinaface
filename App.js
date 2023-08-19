import { StatusBar } from 'react-native';

//Provider

import Routes from './src/routes';

import { NavigationContainer } from '@react-navigation/native';

export default function App(){
  return(
    <NavigationContainer>
      <StatusBar backgroundColor={"transparent"} barStyle={'light-content'} translucent={true} />
      <Routes/>
    </NavigationContainer>
  )
}
