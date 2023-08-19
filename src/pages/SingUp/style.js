import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.white090,
    },
    header:{
        width: '100%',
        height: 70,
        marginTop: 31,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 14,
        gap: 14,
        
        borderBottomWidth: 2,
        borderBottomColor: theme.colors.secondary
    },
    content:{
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 20,
    },

    inputs:{
        height: 60,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.secondary
    },

    
    buttons:{
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
    },

    submit:{
        backgroundColor: theme.colors.secondary,
        width: '90%',
        height: 60,

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    submitText:{
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.colors.white090,
        textTransform: 'uppercase'
    },

    title:{
        color: theme.colors.secondary,
        fontSize: 16,
    }, 
    subTitle:{
        color: theme.colors.secondary,
        fontSize: 16,
        fontWeight: 'bold'
    }, 
})
