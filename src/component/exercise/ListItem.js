import React, {Component} from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';



import {AppColors, AppFonts, AppStyles, AppSizes} from '@theme';
import {
  Data,
  TABLE_USER,
  GYMER,
  EXERCISE,
  CALENDAR,
  CALENDAR_DETAIL,
} from '@datas';
import Swipeout from 'react-native-swipeout';

export default class ListItem extends Component {
    render() {
      item = this.props.item
      return (
        <Swipeout
          style={{margin: 5, borderRadius: 5}}
          right={[
            {
              text: 'Delete',
              backgroundColor: '#FF6C6C',
              onPress: () => {
                Data.write(() => {
                  Data.delete(item);
                });
              },
            },
          ]}>
          <TouchableOpacity>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                width:350,
              }}>
              <Image
                style={{width: 100, height: 80, margin: 10}}
                // source={require('@icons/event.png')}
                source={{uri: this.props.item.image}}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  margin: 10,
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: AppSizes.fontMedium}}>
                  Tên bài tập : {this.props.item.name}
                </Text>
                <Text>Số hiệp : {this.props.item.round}</Text>
                <Text>Số điểm : {this.props.item.point}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Swipeout>
      );
    }
  }