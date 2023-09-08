import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    header:{
        flexDirection: 'row',
        marginTop: 31,
        height: 90,
        alignItems: 'center',
        gap: 8,

        paddingLeft: 14,
        paddingRight: 14,

        borderBottomWidth: 2,
        borderBottomColor: theme.colors.secondary,
    },

    content:{
        
        flex: 1,

        padding: 20,
    },
    progresed:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,

        padding: 14,
        marginBottom: 12,
        backgroundColor: theme.colors.white090,
        borderRadius: 12,
    },

    title:{
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.colors.secondary,
        textTransform: 'uppercase',
    },
    subTitle:{
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.highlight,
        
    },
})
