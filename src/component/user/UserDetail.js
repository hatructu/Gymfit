import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image, TextInput} from 'react-native';
import {AppColors, AppFonts, AppStyles, AppSizes} from '@theme';
import {Input, Button} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

export default class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectName: '',
      name: '',
      sex: '',
      weight: 0,
      height: 0,
      bodymath: 0,
      phoneNumber: 0,
  
    };
    
    this.item = props.dataMember
  }
  render() {
    let {name, sex, weight, height, bodymath, phoneNumber, avatar} = this.item
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent:'center',

          backgroundColor: AppColors.backgroundRegister,
        }}>
        <SafeAreaView style={{
          flex: 1,
          alignItems: 'center',
          justifyContent:'center',

          backgroundColor: AppColors.backgroundRegister,
        }}>
          
          <Text style={[AppStyles.whiteText,{}]}> THÔNG TIN HỌC VIÊN</Text>
          <Image style={{width: 200, height: 160, margin: 10}} source={{uri:avatar}} />
          <Text style={AppStyles.textView}>Tên : {name}</Text>
          <Text style={AppStyles.textView}>Giới tính : {sex == true ? "nam" : "nữ"}</Text>
          <Text style={AppStyles.textView}>Cân nặng : {weight}</Text>
          <Text style={AppStyles.textView}>Chiều cao : {height} </Text>
          <Text style={AppStyles.textView}>Chỉ số cơ thể : {bodymath}</Text>
          <Text style={AppStyles.textView}>Số điện thoại : {phoneNumber}</Text>
        </SafeAreaView>
      </View>
    );
  }
}
