import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    card:{
        backgroundColor: theme.colors.white090,
        width: '90%',
        height: '70%',
        borderRadius: 12,

        alignItems: 'center',
        justifyContent: 'center',
    },

    title:{
        fontSize: 35,
        color: theme.colors.secondary,
        fontFamily: theme.fonts.title700,
    },
    subTitle:{
        fontSize: 35,
        fontFamily: theme.fonts.text400,
        color: theme.colors.secondary,
    },
    foget:{
        fontSize: 16,
        color: '#b5b5b5',
        width: '80%',
        marginTop: 10,
        marginBottom: 12,
        fontFamily: theme.fonts.text400,
    },
    singon:{
        color: theme.colors.secondary,
        fontSize: 16,
        fontFamily: theme.fonts.title700,
    },  


    inputs:{
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.secondary,
        width: '80%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        padding: 8,
        marginTop: 3,
    },

    singinBnt:{
        backgroundColor: theme.colors.secondary,
        width: '70%',
        height: 45,
        borderRadius: 12,

        alignItems: 'center',
        justifyContent: 'center',
    },

    bntText:{
        fontSize: 22,
        fontFamily: theme.fonts.title700,
        color: theme.colors.white090,
    },
})
