import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';
import {AppColors, AppFonts, AppStyles, AppSizes} from '@theme';

import {Actions} from 'react-native-router-flux';
import {
  Data,
  TABLE_USER,
  GYMER,
  EXERCISE,
  CALENDAR,
  CALENDAR_DETAIL,
} from '@datas';

import {Messages} from '@constant';
import ImagePicker from 'react-native-image-picker';

export default class AddExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      round: 0,
      point: 0,
      image: null,
    };
  }

  validation = () => {};

  choosePhoto = () => {
    // alert('clicked')
    // const options = {
    //     title: 'Select Images',

    //     storageOptions: {
    //       skipBackup: true,
    //       path: 'images',
    //     },
    //   };
    ImagePicker.launchImageLibrary(
      {noData: true, mediaType: 'photo'},
      response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          const source = {uri: response.uri};

          this.setState({
            image: source,
          });
        }
      },
    );
  };

  onPressSave = () => {
    if (this.state.name.length == '') {
      Alert.alert('Không được để trống tên bài tập');
    }
    if (this.state.round.length == '') {
      Alert.alert('Không được để trống số hiệp của bài tập');
    }
    if (this.state.point.length == '') {
      Alert.alert('Không được để trống điểm số của bài tập');
    } else {
      Data.write(() => {
        Data.create(EXERCISE, {
          id: Math.floor(Date.now() / 1000),
          name: this.state.name,
          round: this.state.round,
          point: this.state.point,
          image: this.state.image.uri,
        });
      });
      alert('successful');
      console.log('Thang:', JSON.stringify(Data.objects(EXERCISE)));
      Actions.replace('ListExercise');
    }
  };
  onPressCancel = () => {
    Actions.replace('ListExercise');
  };

  render() {
    return (
      <ScrollView style={{flexGrow: 1}} keyboardShouldPersistTaps="handled">
        <SafeAreaView style={AppStyles.appContainerRegister}>
          <Text style={styles.texts}>Thêm bài tập</Text>

          <Text style={AppStyles.whiteText}>{Messages.addExercise.nameEx}</Text>
          <TextInput
            style={AppStyles.textInput}
            placeholder={Messages.addExercise.inputName}
            placeholderTextColor={AppColors.gray}
            keyboardType="default"
            onChangeText={text => this.setState({name: text})}
          />
          <Text style={[AppStyles.whiteText]}>
            {Messages.addExercise.roundEx}
          </Text>
          <TextInput
            style={AppStyles.textInput}
            placeholder={Messages.addExercise.inputRound}
            placeholderTextColor={AppColors.gray}
            keyboardType="numeric"
            onChangeText={text => this.setState({round: parseInt(text, 10)})}
          />
          <Text style={AppStyles.whiteText}>
            {Messages.addExercise.pointEx}
          </Text>
          <TextInput
            style={AppStyles.textInput}
            placeholder={Messages.addExercise.inputPoint}
            placeholderTextColor={AppColors.gray}
            onChangeText={text => this.setState({point: parseInt(text, 10)})}
            keyboardType="numeric"
          />

          <Button title="Choose Photo" onPress={this.choosePhoto} />

          <Image style={AppStyles.images} source={this.state.image} />

          <TouchableOpacity
            style={[AppStyles.button, {marginTop: AppSizes.paddingSml}]}
            onPress={this.onPressSave}>
            <Text
              style={{
                color: AppColors.white,
                fontSize: AppSizes.paddingMedium,
              }}>
              Lưu bài tập
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[AppStyles.button, {marginTop: AppSizes.paddingSml}]}
            onPress={this.onPressCancel}>
            <Text
              style={{
                color: AppColors.white,
                fontSize: AppSizes.paddingMedium,
              }}>
              Huy
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  texts: {
    color: AppColors.white,
    fontSize: AppSizes.fontXL,
    margin: AppSizes.fontLarge,
    marginBottom: AppSizes.fontXL,
  },
});
