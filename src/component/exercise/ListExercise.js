import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import ActionButton from 'react-native-circular-action-menu';
import {AppColors, AppFonts, AppStyles, AppSizes} from '@theme'
import {Data, TABLE_USER, GYMER, EXERCISE, CALENDAR, CALENDAR_DETAIL} from '@datas'
import Swipeout from 'react-native-swipeout';
let swipeoutBtns = [
  {
    text: 'Button'
  }
]
class ListItem extends Component {
  
  render() {
    return (
      <Swipeout right={swipeoutBtns}>
      <View style={{flex: 1, flexDirection: 'row', borderWidth: 1, borderRadius: 5, backgroundColor:'#ffffff', margin:5}}>
        <Image  style={{width:100, height:80, margin:10}} 
                // source={require('@icons/event.png')} 
                source={{uri: this.props.item.image}}
                />
        <View style={{flex: 1, flexDirection: 'column', margin:10, justifyContent:'center'}}>
          <Text style={{fontSize:AppSizes.fontMedium}}>Tên bài tập : {this.props.item.name}</Text>
          <Text style={{}}>Số hiệp       : {this.props.item.round}</Text>
          <Text style={{}}>Số điểm      : {this.props.item.point}</Text>
        </View>
      </View>
      </Swipeout>
    );
  }
}

export default class ListExercise extends Component {
    constructor(props){
        super(props)
        this.state={
            image:null,
            name:'',
            round:0,
            point:0,
            listData:[]
        }
        var data = Data.objects(EXERCISE)
        this.state={listData : data};
    }
  render() {
    return (
      <View style={{flex:1,}}>
        <SafeAreaView style={{flex:1, justifyContent:'center',}}>
            <Text style={{}}>Danh sách các bài tập</Text>
          <FlatList 
            data={this.state.listData}
            renderItem={({item, index}) =>{
                return <ListItem item={item} index={index}></ListItem>
            }}
          />
          <ActionButton
            buttonColor={AppColors.background}
            position="right"
            style={styles.actionBtn}
            onPress={() => Actions.addexercise()}></ActionButton>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  actionBtn: {
    justifyContent: 'flex-end',
  },
});
