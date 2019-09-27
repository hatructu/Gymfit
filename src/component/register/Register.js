import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import {AppColors, AppFonts, AppStyles, AppSizes} from '@theme'

import { Actions } from 'react-native-router-flux';

export default class Register extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            password:''
        }
    }


    render(){
        return(
            <View style={AppStyles.appContainerRegister}>
                <SafeAreaView style={AppStyles.appContainerRegister}>  
                    <Text style={styles.texts}>Đăng ký</Text>
                    
                    <Text style={AppStyles.whiteText}>Tài khoản</Text>
                    <TextInput style={styles.textInput}
                        placeholder='Mời nhập tài khoản'
                        placeholderTextColor='#A4A4A4'
                    />
                    <Text style={[AppStyles.whiteText]}>Email</Text>
                    <TextInput style={styles.textInput}
                        placeholder='Mời nhập email'
                        placeholderTextColor={AppColors.gray}
                        
                    />
                    <Text style={AppStyles.whiteText}>Mật khẩu</Text>
                    <TextInput style={styles.textInput}
                        placeholder='Mời nhập mật khẩu'
                        placeholderTextColor='#A4A4A4'
                        
                    />
                    <TouchableOpacity style={AppStyles.button}>
                        <Text style={{color:AppColors.white, fontSize:AppSizes.paddingMedium}}>Tạo tài khoản</Text>
                    </TouchableOpacity>
                    <Text style={AppStyles.whiteText} >
                        Nếu bạn đã có tài khoản! <Text style={styles.textLogin} onPress={()=>Actions.login()}>Mời đăng nhập</Text>
                    </Text>
                    
                </SafeAreaView>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput:{
        borderRadius:AppSizes.paddingSml,
        borderWidth:AppSizes.borderWidth,
        borderColor:AppColors.gray,
        width:AppSizes.buttonSizeWidth,
        height:AppSizes.buttonSizeBase,
        paddingHorizontal: AppSizes.paddingSml,
    },
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