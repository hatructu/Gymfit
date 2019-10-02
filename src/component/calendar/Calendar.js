import React, { Component } from 'react'
import {
    View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import ActionButton from 'react-native-circular-action-menu'
import { Data, GYMER } from '@datas'
import { Messages } from '@constant'
import Icon from 'react-native-vector-icons/FontAwesome'
import { AppColors, AppSizes } from '@theme'

export default class Calendar extends Component {
    render() {
        return (
            <View style={styles.container}>               
                <ActionButton
                    buttonColor={AppColors.background}
                    position='right'
                    style={styles.actionBtn}
                    onPress={() => Actions.addCalendar()}
                >
                </ActionButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    actionBtn: {
        justifyContent: 'flex-end',
        zIndex: 100,
    },
})