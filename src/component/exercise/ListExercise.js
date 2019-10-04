import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import ActionButton from 'react-native-circular-action-menu';
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

// import ListItem from './ListItem' 

class ListItem extends Component {
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
            style={{ flex: 1, flexDirection: 'row', width:350 }}>
            <Image
              style={{width: 100, height: 80, margin: 10}}
              // source={require('@icons/event.png')}
              source={{uri: this.props.item.image}}
            />
            <View
              style={{flex: 1, flexDirection: 'column', margin: 10, justifyContent: 'center',}}>
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

export default class ListExercise extends Component {
  constructor(props) {
    super(props);
    let listData = []
    listData = this.getData()
    listData.addListener(() => {
      listData = this.getData()
      this.setState({ listData })
    })
    this.state = {
      ...this.state,
      listData
    }
    var data = Data.objects(EXERCISE);
    this.state = {listData: data};
  }

  getData = () => {
    const listData = Data.objects(EXERCISE)
    return listData
}
  render() {
    return (
      <View style={{flex: 1, backgroundColor: AppColors.gray, alignItems:'center', justifyContent:'flex-start'}}>
        <SafeAreaView style={{flex: 1,alignItems:'center',  justifyContent:'flex-end'}}>
          <Text
            style={{
              fontSize:AppSizes.fontXL,
              color: '#fff',
            }}>
            Danh sách các bài tập
          </Text>
          <FlatList
            data={this.state.listData}
            renderItem={({item, index}) => {
              return <ListItem item={item} index={index}></ListItem>;
            }}
          />
          <ActionButton
            buttonColor={AppColors.background}
            position="center"
            style={styles.actionBtn}
            onPress={() => Actions.addexercise()}></ActionButton>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
  actionBtn: {
    justifyContent: 'flex-end',
  },
});
