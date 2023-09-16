import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        marginTop: 31,
        height: 180,

        borderBottomWidth: 2,
        borderBottomColor: theme.colors.secondary
    },
    content:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        paddingTop: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },

    profile:{
        width: 80,
        height: 80,
        borderRadius: 44,
        marginRight: 10,
    },

    username:{
        fontSize:22,
        fontFamily: theme.fonts.title700,
    },
    usernivel:{
        fontSize:14,
        color: theme.colors.secondary,
        fontFamily: theme.fonts.text400,
    },

    clock:{
        flex: 1,
        justifyContent: 'center',

        paddingLeft: 14,
        paddingRight: 14,

    },

})
