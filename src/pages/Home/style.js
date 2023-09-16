import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    content:{
        height: '100%',
        backgroundColor: 'white',

        padding:20,
    },
    button:{
        height: 120,
        marginBottom: 10,
        borderRadius: 12,

        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    title:{
        fontSize: 45,
        fontFamily: theme.fonts.title700,
        color: theme.colors.white090,
        textTransform: 'uppercase'
    }
})
