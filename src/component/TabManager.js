import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native'
import { Router, Scene, Stack, Tabs } from 'react-native-router-flux'
import {Icon} from 'react-native-elements'
import ListUser from './listUser/ListUser'

const TabsIcon = ({...props }) => {
    const { focused, iconActive, iniconActive } = props
    return (
        <View>
            <Image source={focused ? iconActive : iniconActive} />
        </View>
    )
}

const tabScreen = () => {
    return (
        <Router>
            <Stack
                hideNavBar={true}
            >
                <Tabs
                    showLabel={false}
                >
                    <Stack
                        hideNavBar={true}
                        icon={TabsIcon}
                        iconActive={require('@icons/users_check')}
                        iniconActive={require('@icons/users_check')}
                    >
                        <Scene
                            component={ListUser}
                            initial
                        />
                    </Stack>
                </Tabs>
            </Stack>
        </Router>
    )
}

export default tabScreen