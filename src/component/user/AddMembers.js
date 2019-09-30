import React, { Component } from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native'
import { Icon, Input, CheckBox, Button, Avatar } from 'react-native-elements'
import { AppColors, AppSizes } from '@theme'
import { Messages } from '@constant'
import { Actions } from 'react-native-router-flux'
import { Data, TABLE_USER, GYMER, EXERCISE, CALENDAR, CALENDAR_DETAIL, } from '@datas'

export default class AddMembers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMale: false,
            nameMember: '',
            dateOfBirth: '',
            sex: '',
            weight: 0,
            height: 0,
            linkimg: '',
            bodymath: 0,
        }
    }


    render() {
        return (
            <ScrollView >
                <View style={styles.container}>
                    <View>
                        <Text style={styles.tittle}>{Messages.loginScreen.addmember}</Text>
                    </View>

                    <View style={styles.inputView}>
                        <Avatar
                            rounded
                            size='large'
                            source={{
                                uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                            }}
                            showEditButton
                        />

                        <Input
                            placeholder={Messages.loginScreen.addname}
                            containerStyle={styles.input}
                            onChangeText={(text) => this.setState({ nameMember: text })}
                        />
                        <View style={{ flexDirection: 'row', marginTop: 16, }}>
                            <CheckBox
                                center
                                title='Nam'
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                onPress={() => {
                                    this.setState({ isMale: !this.state.isMale })

                                }}
                                checkedColor={AppColors.background}
                                checked={this.state.isMale}
                                containerStyle={{ backgroundColor: '' }}
                            />
                            <CheckBox
                                title='Nữ'
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checkedColor={AppColors.background}
                                onPress={() => this.setState({ isMale: !this.state.isMale })}
                                checked={!this.state.isMale}
                                containerStyle={{ backgroundColor: '' }}
                            />
                        </View>
                        <Input
                            placeholder={Messages.loginScreen.adddob}
                            keyboardType='default'
                            containerStyle={styles.input}
                            onChangeText={(text) => this.setState({ dateOfBirth: text })}
                        />
                        <Input
                            placeholder={Messages.loginScreen.addheight}
                            keyboardType='numeric'
                            containerStyle={styles.input}
                            onChangeText={(text) => this.setState({ height: parseInt(text, 10) })}
                        />
                        <Input
                            placeholder={Messages.loginScreen.addweight}
                            keyboardType='numeric'
                            containerStyle={styles.input}
                            onChangeText={(text) => this.setState({ weight: parseInt(text, 10) })}
                        />
                        <Input
                            placeholder={Messages.loginScreen.bodymath}
                            keyboardType='numeric'
                            containerStyle={styles.input}
                            onChangeText={(text) => this.setState({ bodymath: parseInt(text, 10) })}
                        />

                        <Button

                            title='Lưu'
                            containerStyle={styles.input}
                            buttonStyle={{ backgroundColor: AppColors.background, width: AppSizes.widthInput }}
                            onPress={() => {
                                if (this.state.nameMember.length == 0 ||
                                    this.state.dateOfBirth.length == 0 ||
                                    this.state.weight.length == 0 ||
                                    this.state.height.length == 0
                                ) {
                                    alert('Cảnh báo', Messages.loginScreen.msg)
                                } else {
                                    Data.write(() => {
                                        Data.create(GYMER, {
                                            id: Math.floor(Date.now() / 1000),
                                            name: this.state.nameMember,
                                            sex: this.state.isMale,
                                            height: this.state.height,
                                            weight: this.state.weight,
                                            bodymath: this.state.bodymath,
                                            avatar: this.state.avatar

                                        })
                                    })
                                    console.log("van:", Data.objects(GYMER).length)

                                    Actions.pop()
                                }

                            }}
                        />

                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    tittle: {
        color: AppColors.background,
        fontSize: AppSizes.fontTittle,
        marginTop: 24,
    },
    inputView: {
        alignItems: 'center',
        marginTop: 16,
        width: AppSizes.widthInput
    },
    input: {
        marginTop: 24,
        borderEndColor: AppColors.background,

    },


})