import React, { Component } from 'react'
import {
    View, ScrollView, FlatList, TouchableOpacity,
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
        const {action} = this.props
        return (
            <Swipeout
            >
                <TouchableOpacity  
                    onPress={()=>{
                        action && action(item)
                        Actions.pop()
                    }}                 
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