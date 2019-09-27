import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import {AppColors, AppFonts, AppStyles, AppSizes} from '@theme'

import { Actions } from 'react-native-router-flux';

export default class Register extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }


    render(){
        return(
            <View style={AppStyles.appContainerRegister}>
                <SafeAreaView style={AppStyles.appContainerRegister}>  
                    <Text style={styles.texts}>Đăng ký</Text>
                    <Text style={{color:'#ffffff', fontSize:18, marginBottom:5, marginTop:5}}>Tài khoản</Text>
                    <TextInput style={styles.textInput}
                        placeholder='Mời nhập tài khoản'
                        placeholderTextColor='#A4A4A4'
                    />
                    <Text style={[AppStyles.whiteText]}>Email</Text>
                    <TextInput style={styles.textInput}
                        placeholder='Mời nhập email'
                        placeholderTextColor='#A4A4A4'
                    />
                    <Text style={{color:'#ffffff', fontSize:18, marginBottom:5, marginTop:5}}>Mật khẩu</Text>
                    <TextInput style={styles.textInput}
                        placeholder='Mời nhập mật khẩu'
                        placeholderTextColor='#A4A4A4'
                    />
                    <TouchableOpacity style={styles.toResiger}>
                        <Text style={{color:'#ffffff', fontSize:18}}>Tạo tài khoản</Text>
                    </TouchableOpacity>
                    <Text style={AppStyles.whiteText} >
                        Nếu bạn đã có tài khoản! <Text style={AppColors.green} onPress={()=>Actions.login()}>Mời đăng nhập</Text>
                    </Text>
                    
                </SafeAreaView>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput:{
        borderRadius:10,
        borderWidth:1,
        borderColor:'gray',
        width:300,
        height:40,
        
    },
    texts:{
        color:'#ffffff',
        fontSize:24, 
        fontWeight:'500', 
        margin:30, 
        marginBottom:50 
    },
    toResiger:{
        width:300,
        margin:10,
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#31B404',
        borderRadius:10,
    },
    toLogin:{
        width:300,
        height:40,
        margin:10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#FF8000',
        borderRadius:10,
    }
})