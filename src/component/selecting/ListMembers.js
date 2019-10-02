import React, { Component } from 'react'
import {
    View, ScrollView, FlatList, TouchableOpacity,
} from 'react-native'
import { ListItem } from 'react-native-elements'
import { Data, GYMER } from '@datas'
import Icon from 'react-native-vector-icons/FontAwesome'
import { AppColors, AppSizes } from '@theme'
import Swipeout from 'react-native-swipeout'

export default class ListMembers extends Component {
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

    customItem = (item) => {
        return (
            <Swipeout
                right={
                    [
                        {
                            component: (
                                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: AppColors.backgroundBtn }}>
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

                <TouchableOpacity                   
                >
                    <View>
                        <ListItem
                            leftAvatar={{ source: { uri: item.avatar } }}
                            title={item.name}
                            subtitle={item.bodymath}
                            bottomDivider
                        />

                    </View>
                </TouchableOpacity>
            </Swipeout>
        )
    }
    render() {
        return (
            <ScrollView>
                <View>
                    <FlatList
                        data={this.state.listData}
                        renderItem={({ item, index }) => {
                            return (
                                this.customItem(item)
                            )
                        }}
                    />
                </View>
            </ScrollView>
        )
    }
}