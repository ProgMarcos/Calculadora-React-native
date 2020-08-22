import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles=StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width /4,
        width: Dimensions.get('window').width /4,
        padding: 20,
        backgroundColor: '#F0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    operation: {
        color: '#FFF',
        backgroundColor: '#f90',
    },
    double: {
        width:(Dimensions.get('window').width/4)*2,
    },
    triple: {
        width:(Dimensions.get('window').width/4)*3,
    }
})

export default props => {
    const stylesButton =[styles.button]
    if (props.double) stylesButton.push(styles.double)
    if (props.triple) stylesButton.push(styles.triple)
    if (props.operation) stylesButton.push(styles.operation)
    return(
        <TouchableHighlight onPress={()=> props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}