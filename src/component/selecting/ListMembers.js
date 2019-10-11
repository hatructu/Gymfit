import React, { Component } from 'react'
import {
    View, ScrollView, FlatList, TouchableOpacity, SafeAreaView
} from 'react-native'
import { ListItem } from 'react-native-elements'
import { Data, GYMER } from '@datas'
import Icon from 'react-native-vector-icons/FontAwesome'
import { AppColors, AppSizes } from '@theme'
import Swipeout from 'react-native-swipeout'
import { Actions } from 'react-native-router-flux'

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
                autoClose={true}
                right={
                    [
                        {
                            component: (<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                <Icon name='trash' size={30} />
                            </View>),
                            onPress: () => {
                                Data.write(() => Data.delete(item))
                            }
                        },
                        {
                            component: (<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                <Icon name='edit' size={30} />
                            </View>),
                            // gửi thông tin của item dc chọn sang màn hình sửa
                            onPress:()=>{Actions.addmembers({sendData : item})}
                        }
                    ]
                   
                }
            >
                <TouchableOpacity
                    onPress={() => { Actions.userDetail({ dataMember: item }) }}
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
        console.log('haibt: ', JSON.stringify(this.state.listData))
        return (
            <ScrollView>
                <View>
                    <SafeAreaView>
                        <FlatList
                            data={this.state.listData}
                            renderItem={({ item }) => {
                                return (
                                    this.customItem(item)
                                )
                            }}
                        />
                    </SafeAreaView>
                </View>
            </ScrollView>
        )
    }
}