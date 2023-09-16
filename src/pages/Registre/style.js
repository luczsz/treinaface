import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        flexDirection: 'row',
        marginTop: 32,
        height: 60,

        padding: 14,
        alignItems: 'center',
        gap: 8,

        borderBottomWidth: 2,
        borderBottomColor: theme.colors.primary
    },

    title:{
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.primary,
    },

    content:{

        flex: 1,

        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 20,
    },

    input:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,

        borderWidth: 2,
        padding: 10,
        borderRadius:12,
        borderColor: theme.colors.primary,
        marginBottom: 12,
    },

    password:{
        justifyContent: 'space-between',
    },

    buttons:{
        height: 100,

        alignItems: 'center',
        justifyContent: 'center',
    },

    submit:{
        backgroundColor: theme.colors.primary,
        width: '80%',
        height: 60,

        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 12,
    },

    submitText:{
        fontSize: 22,
        fontFamily: theme.fonts.title700,
        color: theme.colors.white090,
        textTransform: 'uppercase'
    },
    alertas:{
        fontSize: 16,
        color: '#b5b5b5',
        fontFamily: theme.fonts.text400,

    }

})
