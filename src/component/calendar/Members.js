import React, { Component } from 'react'
import {
    View,
} from 'react-native'
import ListMemberSelect from '@selecting/ListMemberSelect'
import { Actions } from 'react-native-router-flux'

export default class Members extends Component{
    render(){
        return(
            <View>
                <ListMemberSelect  
                    action={this.props.action}
                />
            </View>
        )
    }
}