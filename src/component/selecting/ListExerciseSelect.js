import React, { Component } from 'react'
import {
    View, ScrollView, FlatList, TouchableOpacity,
} from 'react-native'
import { ListItem, CheckBox } from 'react-native-elements'
import { Data, EXERCISE } from '@datas'
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
            listData,
            isChecked:false,
            ID:'',
        }
    }

    getData = () => {
        const listData = Data.objects(EXERCISE)
        return listData
    }
 
    customItem = (item) => {
        return (
            <Swipeout
            >
                <TouchableOpacity
                >
                    <View>
                        <CheckBox
                            title={item.name}
                            onPress={() =>{
                                // this.setState({ID: item.id})
                                // for (let index = 0; index < this.state.listData.length; index++) {
                                //    if(this.state.ID == this.state.listData[index].id) {
                                //       this.setState({isChecked: !this.state.isChecked})
                                //    }
                                // }
                            }}
                            checked={this.state.isChecked}
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