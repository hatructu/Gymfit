import React, { Component } from 'react'
import {
    View,
    Image,
} from 'react-native'
import { Router, Scene, Stack, Tabs } from 'react-native-router-flux'
import ListUser from '@user/ListUser'
import ListExercise from '@exercise/ListExercise'
import Calendar from '@calendar/Calendar'
import Report from '@report/Report'
import Login from './Login'
import AddMembers from '@user/AddMembers'
import AddExercise from '@exercise/AddExercise'
import Register from '@register/Register'
import Members from '@calendar/Members'
import AddCalendar from '@calendar/AddCalendar'
import ListExerciseSelect from '@selecting/ListExerciseSelect'
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
                <Scene
                    hideNavBar
                    key='login'
                    component={Login}
                    initial
                />
                <Scene
                    hideNavBar
                    key='addmembers'
                    component={AddMembers}

                />
                <Scene
                    hideNavBar
                    key='addexercise'
                    component={AddExercise}

                />
                <Scene
                    key='register'
                    component={Register}
                />
                <Scene                   
                    component={ListExerciseSelect}
                    key='listExerciseSelect'
                />
                <Scene
                    component={AddCalendar}
                    key='addCalendar'
                />
                <Scene
                    hideNavBar
                    key='members'
                    component={Members}
                />
                <Tabs
                    showLabel={false}
                    key='tabs'
                >
                    <Stack
                        hideNavBar={true}
                        icon={TabsIcon}
                        iconActive={require('@icons/users_check.png')}
                        iniconActive={require('@icons/users.png')}
                    >
                        <Scene
                            component={ListUser}
                            key='listUser'
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
                            key='ListExercise'
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
                            key='Calendar'
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
                            key='Report'
                        />

                    </Stack>
                </Tabs>
            </Stack>
        </Router>
    )
}

export default tabScreen