import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from '../global/theme';

import { AntDesign } from '@expo/vector-icons';

import Home from '../pages/Home';
import Account from '../pages/Account';
import Progress from '../pages/Progress';


export default function AppRoutes(){
    
    const AppStack = createNativeStackNavigator();
    const TabsStack = createBottomTabNavigator();

    function Tabs(){
        return(
            <TabsStack.Navigator

            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    backgroundColor: '#f5f5f5',

                    borderTopWidth: 0,

                    //bottom: 14,
                    elevation: 0,
                    //borderRadius: 4,
                    height: 70,
                                
                }
            }}
            
            >
                <TabsStack.Screen 
                    name='Home' 
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused}) => {
                            if(focused){
                                return <AntDesign name="home" size={24} color={theme.colors.primary} />
                            }
                                return <AntDesign name="home" size={24} color={theme.colors.secondary} />
        
                            }
                        }
                    }
                
                />
                <TabsStack.Screen 
                    name='Progress' 
                    component={Progress}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused}) => {
                            if(focused){
                                return <AntDesign name="enviroment" size={24} color={theme.colors.primary} />
                            }
                                return <AntDesign name="enviromento" size={24} color={theme.colors.secondary} />
        
                            }
                        }
                    }
                
                />
                <TabsStack.Screen 
                    name='User' 
                    component={Account}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused}) => {
                            if(focused){
                                return <AntDesign name="user" size={24} color={theme.colors.primary} />
                            }
                                return <AntDesign name="user" size={24} color={theme.colors.secondary} />
        
                            }
                        }
                    }
                
                />
            </TabsStack.Navigator>
        )
    }

    return(
        <AppStack.Navigator>
            <AppStack.Screen 
                name='Inicio' 
                component={Tabs}
                options={{
                    headerShown: false,
                }} 
            />
        </AppStack.Navigator>
    )
}
