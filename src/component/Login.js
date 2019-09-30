import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Alert,
} from 'react-native'
import { Input, Button, SocialIcon, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { AppSizes, AppColors } from '@theme'
import { Actions } from 'react-native-router-flux'
import { Messages } from '@constant'
import { Data, TABLE_USER } from '@datas'

export default class Login extends Component {
    constructor(props) {
        super(props)
        let lisData = []
        lisData = this.getData()
        lisData.addListener(() => {
            this.setState({ lisData })
        })
        this.state = {
            ...this.state,
            lisData,
            user: '',
            password: '',
        }
    }
    getData = () => {
        const lisData = Data.objects(TABLE_USER)
        return lisData
    }
    isMember = (userName, password) => {
        const userNames = Data.objects(TABLE_USER).filtered(`username="${userName}"`)
        const passwords = Data.objects(TABLE_USER).filtered(`password="${password}"`)
        return (userNames.length > 0) && (passwords.length > 0)
    }

    onClickLogin = () => {
        if (this.isMember(this.state.user, this.state.password)) {
            Actions.replace('tabs')
        }
        else {
            if (this.state.user.length == 0 || this.state.password.length == 0) {
                Alert.alert(Messages.loginScreen.notifi, Messages.loginScreen.msg)
            }
            else {
                Alert.alert(Messages.loginScreen.notifi, Messages.loginScreen.failaccount)
            }
        }


    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView>
                    <View style={styles.logo}>
                        <Image source={require('@icons/logo_gym.png')} style={{ height: 112, width: 112, }} />
                    </View>

                    <View style={styles.input}>
                        <View>
                            <Input
                                placeholder={Messages.loginScreen.userName}
                                leftIcon={<Icon name='user' size={24} color='black' />}
                                paddingTop={5}
                                onChangeText={(text) => this.setState({ user: text })}
                            />
                        </View>
                        <View style={{ marginTop: 16 }}>
                            <Input
                                secureTextEntry={true}
                                placeholder={Messages.loginScreen.password}
                                leftIcon={<Icon name='lock' size={24} color='black' />}
                                onChangeText={(text) => this.setState({ password: text })}
                            />
                        </View>
                        <View style={{ alignItems: 'flex-end', width: AppSizes.screen.width - 90 }}>
                            <TouchableOpacity style={{ flexDirection: 'row', }}>
                                <Text style={styles.forgot}>{Messages.loginScreen.forgotPassword}</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.btnLogin}>
                            <Button
                                buttonStyle={{ backgroundColor: AppColors.background, width: AppSizes.screen.width - 90, }}
                                title={Messages.loginScreen.login}
                                onPress={() => {
                                    this.onClickLogin()
                                }}
                            />
                        </View>
                        <View style={styles.btnLogin}>
                            <Button
                                buttonStyle={{ backgroundColor: AppColors.background, width: AppSizes.screen.width - 90, }}
                                title={Messages.loginScreen.register}
                                onPress={() => Actions.replace("register")}

                            />
                        </View>
                        <Divider style={{ backgroundColor: 'black', width: AppSizes.screen.width - 90, marginTop: AppSizes.buttonSizeSmall }} />

                        <View style={styles.social}>
                            <SocialIcon
                                type='twitter'
                            />
                            <SocialIcon

                                raised={false}
                                type='facebook'
                            />
                            <SocialIcon

                                raised={false}
                                type='google'
                            />

                        </View>
                        <View style={{ alignItems: 'center', marginTop: AppSizes.buttonSizeSmall }}>
                            <Text>{Messages.loginScreen.version}</Text>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        alignItems: 'center',
        marginTop: AppSizes.margin,
    },
    input: {
        marginTop: AppSizes.marginInput,
        width: AppSizes.screen.width - 80,
    },
    btnLogin: {
        justifyContent: 'center',
        width: AppSizes.screen.width - 80,
        marginTop: 5,
    },
    social: {
        justifyContent: 'center',
        marginTop: AppSizes.margin,
        flexDirection: 'row',
    },
    forgot: {
        alignItems: 'flex-end',
        fontSize: AppSizes.fontSmall,
        marginTop: 4,
    },
})