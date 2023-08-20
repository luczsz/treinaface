import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from '../global/theme';

import { AntDesign } from '@expo/vector-icons';

import Home from '../pages/Home';

export default function AppRoutes(){
    
    const AppStack = createNativeStackNavigator();
    const TabsStack = createBottomTabNavigator();

    function Tabs(){
        return(
            <TabsStack.Navigator>
                <TabsStack.Screen 
                    name='Home' 
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused}) => {
                            if(focused){
                                return <AntDesign name="home" size={24} color={theme.colors.primary} />
                            }
                                return <AntDesign name="home" size={24} color="#DDD" />
        
                            }
                        }
                    }
                
                />
                <TabsStack.Screen 
                    name='Second' 
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused}) => {
                            if(focused){
                                return <AntDesign name="enviroment" size={24} color={theme.colors.primary} />
                            }
                                return <AntDesign name="enviromento" size={24} color="#DDD" />
        
                            }
                        }
                    }
                
                />
                <TabsStack.Screen 
                    name='User' 
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused}) => {
                            if(focused){
                                return <AntDesign name="user" size={24} color={theme.colors.primary} />
                            }
                                return <AntDesign name="user" size={24} color="#DDD" />
        
                            }
                        }
                    }
                
                />
            </TabsStack.Navigator>
        )
    }

    return(
        <AppStack.Navigator>
            <AppStack.Screen name='Inicio' component={Tabs} />
        </AppStack.Navigator>
    )
}
