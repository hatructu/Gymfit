import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import {AppColors, AppFonts, AppStyles, AppSizes} from '@theme';

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

    this.item = props.dataExercise;
  }
  render() {
    let {name, round, point, image} = this.item;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',

          backgroundColor: AppColors.backgroundRegister,
        }}>
        <SafeAreaView
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',

            backgroundColor: AppColors.backgroundRegister,
          }}>
          <ScrollView>
            <Text style={[AppStyles.whiteText, {}]}> THÔNG TIN BÀI TẬP</Text>
            <Image
              style={{width: 200, height: 160, margin: 10}}
              source={{uri: image}}
            />
            <Text style={AppStyles.textView}>Tên bài tập: {name}</Text>
            <Text style={AppStyles.textView}>Số hiệp : {round}</Text>
            <Text style={AppStyles.textView}>Điểm số : {point}</Text>
            <Button title="Quay lại" onPress={() => Actions.ListExercise()} />
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
