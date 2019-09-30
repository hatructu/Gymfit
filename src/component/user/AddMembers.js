import React, { Component } from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native'
import { Icon, Input, CheckBox, Button, Avatar } from 'react-native-elements'
import { AppColors, AppSizes } from '@theme'
import Messages from '@constant'
import {Data} from '@datas'

export default class AddMembers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMale: false,
            nameMember:'',
            dateOfBirth:'',
            sex:'',
            weight:0,
            height:0,
            linkimg:'',
        }
    }

    
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.tittle}>Thêm Thành Viên</Text>
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
                            placeholder='Nhập tên thành viên'
                            containerStyle={styles.input}
                            onChangeText={(text)=> this.setState({nameMember: text})}
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
                                containerStyle={{backgroundColor:''}}
                            />
                            <CheckBox
                                title='Nữ'
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checkedColor={AppColors.background}
                                onPress={() => this.setState({ isMale: !this.state.isMale })}
                                checked={!this.state.isMale}
                                containerStyle={{backgroundColor:''}}
                            />
                        </View>
                        <Input
                            placeholder='01/01/1980'
                            keyboardType='default'
                            containerStyle={styles.input}
                            onChangeText={(text)=> this.setState({dateOfBirth: text})}
                        />
                        <Input
                            placeholder='Nhập chiều cao(cm)'
                            keyboardType='numeric'
                            containerStyle={styles.input}
                            onChangeText={(text)=> this.setState({height: text})}
                        />
                        <Input
                            placeholder='Nhập cân nặng(kg)'
                            keyboardType='numeric'
                            containerStyle={styles.input}
                            onChangeText={(text)=> this.setState({weight: text})}
                        />

                        <Button

                            title='Lưu'
                            containerStyle={styles.input}
                            buttonStyle={{ backgroundColor: AppColors.background, width: AppSizes.widthInput }}
                            onPress={()=>{

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