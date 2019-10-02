import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import ActionButton from 'react-native-circular-action-menu'
import { AppColors } from '@theme'
import { Actions } from 'react-native-router-flux'
import ListMembers from '@selecting/ListMembers'

export default class ListUser extends Component {

    render() {
        return (
            <View style={styles.container}>

                <View>
                    <ListMembers/>
                </View>
                <ActionButton
                    buttonColor={AppColors.background}
                    position='right'
                    style={styles.actionBtn}
                    onPress={() => Actions.addmembers()}
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
    },
    actionBtn: {
        justifyContent: 'flex-end',
        zIndex: 100,
    },
})