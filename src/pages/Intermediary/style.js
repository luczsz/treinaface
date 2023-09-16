import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.white090,
    },
    header:{
        flexDirection: 'row',
        marginTop: 32,
        height: 90,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 14,
        paddingRight: 14,

        borderBottomWidth: 2,
        borderBottomColor: theme.colors.secondary
    },
    title:{
        fontSize: 18,
        fontFamily: theme.fonts.title700,
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
        fontFamily: theme.fonts.title700,
        color: theme.colors.white090,
        textTransform: 'uppercase',
    },

    progress:{
        backgroundColor: theme.colors.secondary,
        padding: 10,
        borderRadius: 12,

        alignItems: 'center',
        justifyContent: 'center',

    },

    progressTitle:{
        fontSize: 16,
        fontFamily: theme.fonts.title700,
        color: theme.colors.white090
    },
    progressSubTitle:{
        fontSize: 14,
        fontFamily: theme.fonts.text400,
        color: theme.colors.white090
    }
});


export const styled = StyleSheet.create({
    modalContainer:{
        flex: 1,
        backgroundColor: theme.colors.white090,
    },
    modalHeader:{
        height: 300,
        
        paddingTop: 23,
        paddingLeft: 14,
        paddingRight: 14,


    },
    modalContent:{
        flex: 1,
        backgroundColor: theme.colors.secondary,
        padding: 10,

        borderRadius: 12,
    },

    modalUrl:{
        backgroundColor: theme.colors.secondary,
        width: '80%',
        height: '70%',
        zIndex: 99,
        marginTop: -120,
        marginLeft: 40,
        marginBottom: 10,

        alignItems: 'center',
        justifyContent: 'center',

        borderWidth: 6,
        borderColor: theme.colors.secondary,
        borderRadius: 10,
    },

    description:{
        fontSize: 22,
        fontFamily: theme.fonts.title700,
        color: theme.colors.white090,
    },

    finish:{
        backgroundColor: theme.colors.white090,
        marginTop: 20,
        height: 60,

        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 12,
    },
    textFinish:{
        fontSize: 22,
        fontFamily: theme.fonts.title700,
        color: theme.colors.secondary,
    },
    finishBack:{
        backgroundColor: theme.colors.tercery,
        marginTop: 20,
        height: 60,

        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 12,
    },
    textFinishBack:{
        fontSize: 22,
        fontFamily: theme.fonts.title700,
        color: theme.colors.white090,
    }, 

    containerAlert:{
        backgroundColor: theme.colors.overlay,
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',
    },

    contentAlert:{
        backgroundColor: theme.colors.primary,
        padding: 14,

        width: '80%',

        borderRadius: 12,
    },
    headerAlert:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    textAlert:{
        paddingTop: 20,
        fontFamily: theme.fonts.text400,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleAlert:{
        fontSize: 22,
        fontFamily: theme.fonts.title700,
        color: theme.colors.white090,
    }

})
