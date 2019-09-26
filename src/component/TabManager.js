import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native'
import { Router, Scene, Stack, Tabs } from 'react-native-router-flux'
import { Icon } from 'react-native-elements'
import ListUser from '@user/ListUser'
import ListExercise from '@exercise/ListExercise'
import Calendar from '@calendar/Calendar'
import Report from '@report/Report'
const TabsIcon = ({ ...props }) => {
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
                        iconActive={require('@icons/users_check.png')}
                        iniconActive={require('@icons/users.png')}
                    >
                        <Scene
                            component={ListUser}
                            initial
                        />
                    </Stack>

                    <Stack
                        hideNavBar={true}
                        icon={TabsIcon}
                        iconActive={require('@icons/finess_check.png')}
                        iniconActive={require('@icons/finess.png')}
                    >
                        <Scene
                            component={ListExercise}
                        />
                    </Stack>

                    <Stack
                        hideNavBar={true}
                        icon={TabsIcon}
                        iconActive={require('@icons/event_check.png')}
                        iniconActive={require('@icons/event.png')}
                    >
                        <Scene
                            component={Calendar}
                        />
                    </Stack>

                    <Stack
                        hideNavBar={true}
                        icon={TabsIcon}
                        iconActive={require('@icons/investments.png')}
                        iniconActive={require('@icons/invest.png')}
                    >
                        <Scene
                            component={Report}
                        />
                    </Stack>
                </Tabs>
            </Stack>
        </Router>
    )
}

export default tabScreen