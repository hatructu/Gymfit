import React, { Component } from 'react'
import {
    View, ScrollView, FlatList, TouchableOpacity, Text, StyleSheet
} from 'react-native'
import { CheckBox, Header } from 'react-native-elements'
import { Data, EXERCISE } from '@datas'
import Icon from 'react-native-vector-icons/FontAwesome'
import { AppColors, AppSizes } from '@theme'
import Swipeout from 'react-native-swipeout'
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

        return (
            <View>
                <View
                    style={{ height: '20%', }}
                >
                    <Header
                        leftComponent={
                            <TouchableOpacity
                                onPress={()=>{                                  
                                   let filterSelect = _.filter(this.state.listData, itemData=>
                                        itemData.isChecked
                                    )                                  
                                    console.log('van:', filterSelect)
                                    
                                }}
                            >
                                <Text style={styles.saveText}>Lưu</Text>
                            </TouchableOpacity>
                        }
                        backgroundColor={AppColors.background}
                        containerStyle={{ flex: 1, justifyContent: 'space-between' }}
                    />
                </View>
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
            </View>
        )
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
            </Swipeout>
        )
    }
}

const styles = StyleSheet.create({
    saveText: {
        fontSize: AppSizes.fontLarge,
        alignItems: 'center',
        color: '#fff',
        justifyContent: 'center',
        marginBottom: '50%',
    }
})