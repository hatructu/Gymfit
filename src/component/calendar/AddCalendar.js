import React, { Component } from 'react'
import {
    View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Alert,
} from 'react-native'
import { Input, Button, ListItem } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { Data, CALENDAR } from '@datas'
import { Messages } from '@constant'
import Icon from 'react-native-vector-icons/FontAwesome'
import { AppColors, AppSizes } from '@theme'
import moment from 'moment'
import DateTimePicker from 'react-native-modal-datetime-picker'
import _ from 'lodash'

export default class AddCalendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectNameMember: '',
            selectID: 0,
            selectDate: 0,
            listName: [],
            selectExercise: [],
            isDateTimePickerVisible: false,
            tableData: [],
        }
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    }

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    }

    handleDatePicked = date => {
        let dateTime = moment(date).format('DD/MM/YYYY')
        this.setState({ selectDate: dateTime})
        this.hideDateTimePicker()
    }

    // hien thi danh sach cac hoc vien
    customItem = (item) => {
        return (
            <TouchableOpacity
            >
                <View>
                    <ListItem
                        leftAvatar={{ source: { uri: item.avatar } }}
                        title={item.name}
                        subtitle={item.bodymath}
                        bottomDivider
                    />

                </View>
            </TouchableOpacity>
        )
    }

    // hien thij danh sach cac bai tap
    customExercise = (item) => {
        return (
            <View>
                <ListItem
                    title={item.name}
                    rightIcon={<Icon name='times-circle' size={24} onPress={() => {
                        let selectExerciseClone = this.state.tableData
                        _.remove(selectExerciseClone, itemEx => itemEx.id == item.id)
                        return this.setState({ tableData: selectExerciseClone })
                    }} />}
                    bottomDivider
                />
            </View>
        )
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    {/* // tieu de man hinh */}
                    <View>
                        <Text style={styles.tittle}>{Messages.calendarScreen.addCalendarTitle}</Text>
                    </View>

                    <View style={styles.inputView}>
                        <Input
                            placeholder={Messages.loginScreen.addname}
                            containerStyle={styles.input}
                            onChange={() => this.setState({ selectNameMember: this.props.getName })}
                            rightIcon={<Icon name='plus' size={24} onPress={() =>
                                Actions.members({ action: (text) => {
                                    this.setState({ selectNameMember: text.name }),
                                    this.setState({selectID : text.id})
                            }})} />}
                            value={this.state.selectNameMember}                     
                        />

                        {/* nhap ngay */}
                        <Input
                            placeholder={Messages.calendarScreen.addDateCalendar}
                            value={this.state.selectDate}
                            keyboardType='default'
                            containerStyle={styles.input}
                            rightIcon={<Icon name='plus' size={24} onPress={this.showDateTimePicker} />}
                            onChange={() => this.state.selectDate}
                        />
                        {/* hiển thị calendar */}
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this.handleDatePicked}
                            onCancel={this.hideDateTimePicker}
                        />
                        <Button
                            title={Messages.calendarScreen.selectExercise}
                            containerStyle={styles.input}
                            buttonStyle={{ backgroundColor: AppColors.background, width: AppSizes.widthInput }}
                            onPress={() => {
                                Actions.listExerciseSelect({
                                    getDataTable: (listExercise) => {
                                        this.setState({ tableData: listExercise })
                                    }
                                })
                            }}
                        />
                    </View>

                    <View style={styles.table}>
                        <FlatList
                            data={this.state.tableData}
                            renderItem={({ item }) => {
                                return this.customExercise(item)
                            }}
                        />
                    </View>
                    <Button
                        title={Messages.loginScreen.save}
                        containerStyle={styles.input}
                        buttonStyle={{ backgroundColor: AppColors.background, width: AppSizes.widthInput }}
                        onPress={() => {
                            if (this.state.selectDate.length == 0 ||
                                this.state.selectNameMember.length == 0 ||
                                this.state.tableData.length == 0
                            ) {
                                Alert.alert(Messages.loginScreen.notifi, Messages.loginScreen.msgInfo)
                            }
                            else {
                                Data.write(() => {
                                    Data.create(CALENDAR, {
                                        id: Math.floor(Date.now() / 1000),
                                        date: this.state.selectDate,
                                        status: false,
                                        id_gymer: this.state.selectID,
                                        name_gymer: this.state.selectNameMember,
                                    })
                                })
                                Actions.pop()
                            }
                        }}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    tittle: {
        color: AppColors.background,
        fontSize: AppSizes.fontTittle,
        marginTop: 24,
    },
    inputView: {
        alignItems: 'center',
        marginTop: 16,
        width: AppSizes.widthInput
    },
    input: {
        marginTop: 24,
        borderEndColor: AppColors.background,

    },
    head: {
        height: 40,
        backgroundColor: '#f1f8ff'
    },
    table: {
        width: '80%',
        marginTop: 24,
        backgroundColor: 'red',
    },


})