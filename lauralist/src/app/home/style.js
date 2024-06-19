import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        padding: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#B2DFEEc0',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#7B68EE',

    },
    footer: {
       position: 'absolute',
       bottom: 0,
       width: '100%',
       flexDirection: 'row',
       alignItems: 'center',
       paddingHorizontal: 20,
       backgroundColor: '#B2DFEEc0',
       borderTopLeftRadius: 30,
       borderTopRightRadius: 30
    },
    inputContainer: {
        backgroundColor: '#7B68EE',
        elevation: 40,
        flex: 1,
        height: 50,
        marginVertical: 20,
        borderRadius: 30,
        paddingHorizontal: 20,
        justifyContent: 'center'

    },
    iconContainer: {
        borderRadius: 25,
        height: 50,
        width: 50,
        backgroundColor: '#7B68EE',
        elevation: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
});