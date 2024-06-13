import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    itemList: {
        padding: 15,
        elevation: 12,
        borderRadius: 7,
        backgroundColor: '#F5DEB3',
        borderWidth: 2,
        borderColor: 'white',
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    itemToBuy: {
        color: '#228B22',
        fontSize: 22,
        textDecorationLine: 'none'
    },
    itemBought: {
        color: 'red',
        fontSize: 22,
        textDecorationLine: 'line-throught'
    },
    actionIcon: {
        height: 40,
        width: 40,
        backgroundColor: '#228B22',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 20,
    },

});