import React, { Component } from 'react'
import {
    View,
} from 'react-native'
import ListMembers from '@selecting/ListMembers'

export default class Members extends Component{
    render(){
        return(
            <View>
                <ListMembers/>
            </View>
        )
    }
}