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
            password:'',
            Error:''
        }
    }

    validation=()=>{
        
    }

    onPressRegister=()=>{
        //loc dieu kien username
        const {username} = this.state
        var user_detail = Data.objects(TABLE_USER).filtered(`username = "${username}"`)
        
        if(this.state.username.length == ""){
            Alert.alert('Không được để trống tài khoản')
        } if( this.state.email.length ==""){
            Alert.alert('Không được để trống email')
        } if( this.state.password.length==""){
            Alert.alert('Không được để trống mật khẩu')
        } if(user_detail.length>0){
            alert('Tên tài khoản đã bị trùng, mời nhập lại')
        } else{
            Data.write(()=>{
                Data.create(TABLE_USER,{
                    id: Math.floor(Date.now() / 1000),
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                })
            })
            alert(`successful`)
            console.log("Thang:", JSON.stringify(Data.objects(TABLE_USER) ))
            Actions.replace('login')
            
        }
    }



    render(){
        return(
            <View style={AppStyles.appContainerRegister}>
                <SafeAreaView style={AppStyles.appContainerRegister}>  
                    <Text style={styles.texts}>Đăng ký</Text>
                    
                    <Text style={AppStyles.whiteText}>{Messages.registerScreen.userName}</Text>
                    <TextInput style={AppStyles.textInput}
                        placeholder={Messages.registerScreen.inputUserName}
                        placeholderTextColor={AppColors.gray}
                        onChangeText={(text)=>this.setState({username:text})}
                    />
                    <Text style={[AppStyles.whiteText]}>{Messages.registerScreen.email}</Text>
                    <TextInput style={AppStyles.textInput}
                        placeholder={Messages.registerScreen.inputEmail}
                        placeholderTextColor={AppColors.gray}
                        onChangeText={(text)=>this.setState({email:text})}
                    />
                    <Text style={AppStyles.whiteText}>{Messages.registerScreen.password}</Text>
                    <TextInput style={AppStyles.textInput}
                        placeholder={Messages.registerScreen.inputPassword}
                        placeholderTextColor={AppColors.gray}
                        onChangeText={(text)=>this.setState({password:text})}
                    />
                    <Text>{this.state.Error}</Text>
                    <TouchableOpacity style={[AppStyles.button, {marginTop:15}]} onPress={this.onPressRegister}>
                        <Text style={{color:AppColors.white, fontSize:AppSizes.paddingMedium}}>Tạo tài khoản</Text>
                    </TouchableOpacity>
                    <Text style={AppStyles.whiteText} >
                        Nếu bạn đã có tài khoản! <Text style={styles.textLogin} onPress={()=>Actions.replace("login")}>Đăng nhập!</Text>
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