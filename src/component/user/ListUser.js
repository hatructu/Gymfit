import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native'
import { Icon } from 'react-native-elements'
import ActionButton from 'react-native-circular-action-menu'
import {AppColors} from '@theme'

export default class ListUser extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ActionButton 
                    buttonColor={AppColors.background}
                    position='right'
                    style={styles.actionBtn}
                >
                </ActionButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
    },
    actionBtn:{
        justifyContent:'flex-end'
    },
})