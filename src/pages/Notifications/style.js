import { StyleSheet } from 'react-native';
import {theme} from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    }, 
    header:{
        height: 60,
        marginTop: 32,

        paddingRight: 14,
        paddingLeft: 14,
        flexDirection: 'row',
        alignItems: 'center',

        gap: 10,
        borderBottomWidth: 2,
        borderBottomColor: theme.colors.primary
    },

    title:{
        fontSize: 22,
        fontFamily: theme.fonts.title700,
        color: theme.colors.primary
    },

    content:{
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 20,
    }
})
