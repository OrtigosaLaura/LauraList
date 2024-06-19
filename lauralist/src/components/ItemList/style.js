import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    itemList: {
        padding: 15,
        elevation: 12,
        borderRadius: 7,
        backgroundColor: '#B2DFEEc0',
        borderWidth: 2,
        borderColor: 'white',
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    itemToBuy: {
        color: '#7B68EE',
        fontSize: 22,
        textDecorationLine: 'none'
    },
    itemBought: {
        color: '#FF3E96',
        fontSize: 22,
        textDecorationLine: 'line-throught'
    },
    actionIcon: {
        height: 40,
        width: 40,
        backgroundColor: '#7B68EE',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 20,
    },

});