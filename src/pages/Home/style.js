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
    },

    avisos:{
        borderWidth: 2,
        height: 100,
        marginTop: 10,

        padding: 18,
    }
})

export const styled = StyleSheet.create({
    containerModal:{
        backgroundColor: theme.colors.overlay,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentModal:{
        width: '80%',
        padding: 20,

        backgroundColor: theme.colors.line,
        borderRadius: 12,
    },
    title:{
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.white090,
    }
})
