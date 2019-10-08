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
import { Input, CheckBox, Button, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { AppColors, AppSizes } from '@theme'
import { Messages } from '@constant'
import { Actions } from 'react-native-router-flux'
import ImagePicker from 'react-native-image-picker'
import { Data, GYMER } from '@datas'
import moment from 'moment'
import DateTimePicker from "react-native-modal-datetime-picker"


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
            linkImg: '',
            bodyMath: 0,
            phoneNumber: '',
            isDateTimePickerVisible: false,
        }
    }
    // lấy đường dẫn ảnh
    getImage = () => {
        var options = {
            title: 'Select Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        }
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton)
            } else {
                const source = { uri: response.uri }
                this.setState({ linkImg: source })
            }
        })
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        this.setState({ dateOfBirth: moment(date).format('DD/MM/YYYY')})
        this.hideDateTimePicker()
    };

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
                            source={this.state.linkImg}
                            onPress={this.getImage.bind(this)}
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
                            value={this.state.dateOfBirth}
                            keyboardType='default'
                            containerStyle={styles.input}
                            rightIcon={<Icon name='birthday-cake' size={24} onPress={this.showDateTimePicker} />}                          
                            onChange={()=>this.state.dateOfBirth}
                        />
                        {/* hiển thị calendar */}
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this.handleDatePicked}
                            onCancel={this.hideDateTimePicker}
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
                            onChangeText={(text) => this.setState({ bodyMath: parseInt(text, 10) })}
                        />
                        <Input
                            placeholder={Messages.loginScreen.phoneNumber}
                            keyboardType='numeric'
                            containerStyle={styles.input}
                            onChangeText={(text) => this.setState({ phoneNumber: text })}
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
                                            bodymath: this.state.bodyMath,
                                            avatar: this.state.linkImg.uri,
                                            phoneNumber: this.state.phoneNumber,

                                        })
                                    })
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
        padding:5,
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