import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.white090,
    },
    header:{
        marginTop: 32,
        height: 90,
        justifyContent: 'center',
        paddingLeft: 14,
        paddingRight: 14,

        borderBottomWidth: 2,
        borderBottomColor: theme.colors.secondary
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.colors.secondary,
        marginBottom: 20,
    },
    content:{
        padding: 20,
    },

    button:{
        backgroundColor: 'blue',
        height: 120,
        borderRadius: 12,

        alignItems:'flex-end',
        justifyContent: 'flex-end',
        marginBottom: 8,
    },

    buttonText:{
        fontSize: 55,
        fontWeight: 'bold',
        color: theme.colors.white090
    }
})
