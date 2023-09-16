import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    button:{
        height: 120,
        borderRadius: 12,

        alignItems:'flex-end',
        justifyContent: 'flex-end',
        marginBottom: 8,
    },

    buttonText:{
        fontSize: 55,
        fontWeight: 'bold',
        color: theme.colors.white090,
        textTransform: 'uppercase',
    },

    buttonSelect:{
        backgroundColor: 'green',
        height: 120,
        borderRadius: 12,

        alignItems:'flex-end',
        justifyContent: 'flex-end',
        marginBottom: 8,
    },

    buttonTextSelect:{
        fontSize: 55,
        fontWeight: 'bold',
        color: theme.colors.white090,
        textTransform: 'uppercase',
    },
})
