import React, { Component } from 'react'
import {
    View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { ListItem } from 'react-native-elements'
import ActionButton from 'react-native-circular-action-menu'
import { Data, CALENDAR } from '@datas'
import { Messages } from '@constant'
import Icon from 'react-native-vector-icons/FontAwesome'
import { AppColors, AppSizes } from '@theme'
import Swipeout from 'react-native-swipeout'

export default class Calendar extends Component {
    constructor(props) {
        super(props)
        listData = [],
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
        const listData = Data.objects(CALENDAR)
        return listData
    }

    customItem = (item) => {
        return (
            <Swipeout
                right={
                    [
                        {
                            component: (<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                <Icon name='trash' size={30}/>
                            </View>),
                            onPress:()=>{
                                Data.write(()=> Data.delete(item))
                            }
                        }
                    ]
                }
            >
                <TouchableOpacity style={{ width: '100%' }}>
                    <View>
                        <ListItem
                            title={item.name_gymer}
                            subtitle={item.date}
                            bottomDivider
                        />
                    </View>
                </TouchableOpacity>
            </Swipeout>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <FlatList
                            data={this.state.listData}
                            renderItem={({ item }) =>
                                this.customItem(item)
                            }
                        />
                    </View>
                </ScrollView>

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
    },
    actionBtn: {
        justifyContent: 'flex-end',
        zIndex: 100,
    },
})