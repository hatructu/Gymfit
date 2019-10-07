import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image, TextInput} from 'react-native';
import {AppColors, AppFonts, AppStyles, AppSizes} from '@theme';

export default class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sex:'',
      weight:0,
      height:0,
      bodymath:0,
      phoneNumber:0
    };
  }
  render() {
    return (
      <View style={{flex:1, alignItems:'center', backgroundColor:AppColors.backgroundRegister}}>
        <SafeAreaView>
          <Text>THÔNG TIN HỌC VIÊN</Text>
          {/* <Image source={require('@icon/user')} /> */}
          <Text style={AppStyles.textInput}>Tên : {this.state.name}</Text>
          <Text style={AppStyles.textInput}>Giới tính : {this.state.sex}</Text>
          <Text style={AppStyles.textInput}>Cân nặng : {this.state.weight}</Text>
          <Text style={AppStyles.textInput}>Chiều cao : {this.state.height}</Text>
          <Text style={AppStyles.textInput}>Chỉ số cơ thể : {this.state.bodymath}</Text>
          <Text style={AppStyles.textInput}>Số điện thoại : {this.state.phoneNumber}</Text>
        </SafeAreaView>
      </View>
    );
  }
}
