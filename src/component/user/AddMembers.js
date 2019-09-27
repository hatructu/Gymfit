import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native'
import { Icon } from 'react-native-elements'
import {AppColors} from '@theme'

export default class AddMembers extends Component{
    render(){
        return(
            <View>
                <Text>add member</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
    },
})