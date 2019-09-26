import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native'
import { Icon } from 'react-native-elements'

export default class ListUser extends Component {
    render() {
        return (
            <View>
                <Icon
                    name='sc-telegram'
                    type='evilicon'
                    color='#517fa4'
                />
            </View>
        )
    }
}