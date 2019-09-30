import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView,Image, StyleSheet, Alert, Button, } from 'react-native';
import {AppColors, AppFonts, AppStyles, AppSizes} from '@theme'

import { Actions } from 'react-native-router-flux';
import {Data, TABLE_USER, GYMER, EXERCISE, CALENDAR, CALENDAR_DETAIL} from '@datas'

import {Messages} from '@constant'
import ImagePicker from 'react-native-image-picker';

const options={
    title: 'Choose Image',
    takePhotoButtonTitle: 'Take photo',
    chooseFromLibraryButtonTitle: 'Choose library',
  }

export default class AddExercise extends Component{

    constructor(props){
        super(props)
        this.state={
            idEx:'',
            nameEx:'',
            roundEx:'',
            pointEx:'',
            imageEx:null
        }
    }

    choosePhoto=()=>{
        ImagePicker.showImagePicker(options, (response)=>{
            console.log('Response = ', response)
            if(response.didCancel){
                console.log('User cancelled image picker');
            }
        })
    }

    render() {
        const {imageEx} = this.state 
      return (
        <View style={AppStyles.appContainerRegister}>
          <SafeAreaView style={AppStyles.appContainerRegister}>
            <Text style={styles.texts}>Thêm bài tập</Text>

            <Text style={AppStyles.whiteText}>{Messages.addExercise.nameEx}</Text>
                    <TextInput style={AppStyles.textInput}
                        placeholder={Messages.addExercise.inputName}
                        placeholderTextColor={AppColors.gray}
                        onChangeText={(text)=>this.setState({username:text})}
                    />
                    <Text style={[AppStyles.whiteText]}>{Messages.addExercise.roundEx}</Text>
                    <TextInput style={AppStyles.textInput}
                        placeholder={Messages.addExercise.inputRound}
                        placeholderTextColor={AppColors.gray}
                        onChangeText={(text)=>this.setState({email:text})}
                    />
                    <Text style={AppStyles.whiteText}>{Messages.addExercise.pointEx}</Text>
                    <TextInput style={AppStyles.textInput}
                        placeholder={Messages.addExercise.inputPoint}
                        placeholderTextColor={AppColors.gray}
                        onChangeText={(text)=>this.setState({password:text})}
                    />
                    <View style={{flex:1, justifyContent:'center', flexDirection:'row'}}>
                        <Button 
                            title="Choose Photo"
                            onPress = {this.choosePhoto}
                        />
                        
                        
                        
                    </View>
          </SafeAreaView>
        </View>
      )
    };
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