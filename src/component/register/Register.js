import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, StyleSheet, Alert, } from 'react-native';
import {AppColors, AppFonts, AppStyles, AppSizes} from '@theme'

import { Actions } from 'react-native-router-flux';
import {Data, TABLE_USER, GYMER, EXERCISE, CALENDAR, CALENDAR_DETAIL} from '@datas'

import {Messages} from '@constant'


export default class Register extends Component{

    constructor(props){
        super(props);
        this.state={
            id:'',
            username:'',
            email:'',
            password:''
        }
    }

    _onPressRegister=()=>{
        if(this.state.username.length == ""){
            Alert.alert('Không được để trống tài khoản')
        } if( this.state.email.length ==""){
            Alert.alert('Không được để trống email')
        } if( this.state.password.length==""){
            Alert.alert('Không được để trống mật khẩu')
        } else{
            Data.write(()=>{
                Data.create(TABLE_USER,{
                    id: Math.floor(Date.now() / 1000),
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                })
            })
            Actions.replace('login')
            Alert.alert
        }
    }


    render(){
        return(
            <View style={AppStyles.appContainerRegister}>
                <SafeAreaView style={AppStyles.appContainerRegister}>  
                    <Text style={styles.texts}>Đăng ký</Text>
                    
                    <Text style={AppStyles.whiteText}>Tài khoản</Text>
                    <TextInput style={AppStyles.textInput}
                        placeholder={Messages.registerScreen.userName}
                        placeholderTextColor={AppColors.gray}
                        onChangeText={(text)=>this.setState({username:text})}
                    />
                    <Text style={[AppStyles.whiteText]}>Email</Text>
                    <TextInput style={AppStyles.textInput}
                        placeholder={Messages.registerScreen.email}
                        placeholderTextColor={AppColors.gray}
                        onChangeText={(text)=>this.setState({email:text})}
                    />
                    <Text style={AppStyles.whiteText}>Mật khẩu</Text>
                    <TextInput style={AppStyles.textInput}
                        placeholder={Messages.registerScreen.password}
                        placeholderTextColor={AppColors.gray}
                        onChangeText={(text)=>this.setState({password:text})}
                    />
                    <TouchableOpacity style={[AppStyles.button, {marginTop:15}]} onPress={this._onPressRegister}>
                        <Text style={{color:AppColors.white, fontSize:AppSizes.paddingMedium}}>Tạo tài khoản</Text>
                    </TouchableOpacity>
                    <Text style={AppStyles.whiteText} >
                        Nếu bạn đã có tài khoản! <Text style={styles.textLogin} onPress={()=>Actions.replace("login")}>Mời đăng nhập</Text>
                    </Text>
                    
                </SafeAreaView>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    texts:{
        color:AppColors.white,
        fontSize:AppSizes.fontXL, 
        margin:AppSizes.fontLarge, 
        marginBottom:AppSizes.fontXL 
    },
    
    textLogin:{
        color:AppColors.background
    }
})