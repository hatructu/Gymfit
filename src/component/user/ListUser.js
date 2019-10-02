import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image, FlatList,
} from 'react-native'
import { ListItem, Divider, Icon } from 'react-native-elements'
import ActionButton from 'react-native-circular-action-menu'
import { AppColors } from '@theme'
import { Actions } from 'react-native-router-flux'
import { Data, GYMER } from '@datas'
import Swipeout from 'react-native-swipeout'

class CustomItem extends Component {
    render() {
        const item = this.props.item
        return (
            <Swipeout
                right={
                    [
                        {
                            component: (
                                <View style={{justifyContent:'center', flex:1, backgroundColor:AppColors.backgroundBtn}}>
                                    <Icon name='trash' color='#FF0000' size={30} type='font-awesome' />
                                </View>
                            ),                   
                            onPress: () => {
                                Data.write(() => {
                                    Data.delete(item)
                                })
                            }
                        }
                    ]
                }
            >

                <View>
                    <ListItem
                        leftAvatar={{source:{uri: this.props.item.avatar}}}
                        title={this.props.item.name}
                        subtitle={this.props.item.bodymath}
                        bottomDivider
                    />

                </View>
            </Swipeout>
        )
    }
}

export default class ListUser extends Component {

    constructor(props) {
        super(props)
        let listData = []
        listData = this.getData()
        listData.addListener(() => {
            listData = this.getData()
            this.setState({ listData })
        })
        this.state = {
            ...this.state,
            listData
        }
    }

    getData = () => {
        const listData = Data.objects(GYMER)
        return listData
    }

    render() {
        return (
            <View style={styles.container}>

                <View>
                    <FlatList
                        data={this.state.listData}
                        renderItem={({ item, index }) => {
                            return (
                                <CustomItem item={item} />
                            )
                        }}
                    />
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