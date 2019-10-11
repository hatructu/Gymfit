import React, { Component } from 'react'
import {
    View, ScrollView, FlatList, TouchableOpacity, Text, StyleSheet
} from 'react-native'
import { CheckBox, Header, Card } from 'react-native-elements'
import { Data, EXERCISE } from '@datas'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AppColors, AppSizes } from '@theme'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'

export default class ListMembers extends Component {
    constructor(props) {
        super(props)
        let listData = []
        listData = this.getData()

        this.state = {
            ...this.state,
            listData,
        }
    }

    getData = () => {
        let listData = Data.objects(EXERCISE)
        // them isChecked vao trong listData
        listData = _.map(listData, item => {
            item.isChecked = false
            return item
        })

        return listData
    }



    render() {
        const { getDataTable } = this.props
        return (
            <View>
                <Header
                    containerStyle={{ height: '20%', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'baseline' }}
                    style={{ justifyContent: 'center' }}
                    leftComponent={{ icon: 'arrow-back', onPress: () => { Actions.pop() } }}
                    rightComponent={{
                        icon: 'done', onPress: () => {
                            let filterSelect = _.filter(this.state.listData, itemData => itemData.isChecked)
                            getDataTable && getDataTable(filterSelect)
                            Actions.pop()
                        }
                    }}
                />

                <ScrollView>
                    <View>
                        <FlatList
                            data={this.state.listData}
                            renderItem={({ item }) => {
                                return (
                                    this.customItem(item)
                                )
                            }}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }

    customItem = (item) => {
        return (
            <TouchableOpacity
            >
                <View>
                    <CheckBox
                        title={item.name}
                        onPress={() => {
                            let listDataClone = this.state.listData
                            _.map(listDataClone, itemData => {
                                if (itemData.id === item.id) {
                                    itemData.isChecked = !itemData.isChecked
                                }
                                return itemData
                            })
                            this.setState({ listData: listDataClone })

                        }}
                        checked={item.isChecked}
                    />

                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    saveText: {
        fontSize: AppSizes.fontLarge,
        alignItems: 'center',
        color: '#fff',
        //justifyContent: 'center',
    }
})