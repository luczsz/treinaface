import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.white090,

    },

    header:{
        marginTop: 31,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,

        borderBottomWidth: 2,
        borderBottomColor: theme.colors.secondary,
    },

    profile:{
        width: 120,
        height: 120,
        
        borderRadius: 55,
        borderWidth: 2,
        borderColor: theme.colors.secondary,

        marginBottom: 10,
    },
    username:{
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.colors.secondary
    },
    useremail:{
        fontSize: 16,
        color: '#b5b5b5',
        paddingBottom: 10,
    },



    content:{
        flex: 1,
        backgroundColor: 'white',
        
        paddingTop: 20,
        paddingLeft: 14,
        paddingRight: 14,

    },

    menuItem:{
        height: 60,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,

        borderBottomWidth: 2,
        borderBottomColor: theme.colors.secondary,
    },

    footer:{
        backgroundColor: 'white',
        height: 140,
        paddingTop: 10,
 
        alignItems: 'center',
    }
})
