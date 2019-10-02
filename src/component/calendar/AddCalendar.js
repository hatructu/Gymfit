import React, { Component } from 'react'
import {
    View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,
} from 'react-native'
import { Input, Button, } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { Data, CALENDAR } from '@datas'
import { Messages } from '@constant'
import Icon from 'react-native-vector-icons/FontAwesome'
import { AppColors, AppSizes } from '@theme'
import moment from 'moment'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { Table, Row, Rows } from 'react-native-table-component'

export default class AddCalendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectName: '',
            selectDate: '',
            selectExercise: [],
            isDateTimePickerVisible: false,
            tableHead:[Messages.calendarScreen.colNameExercise, Messages.calendarScreen.colRound, Messages.calendarScreen.options],
            tableData:[],
        }
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    }

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    }

    handleDatePicked = date => {
        this.setState({ selectDate: moment(date).format('DD/MM/YYYY') })
        this.hideDateTimePicker()
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.tittle}>{Messages.calendarScreen.addCalendarTitle}</Text>
                    </View>

                    <View style={styles.inputView}>

                        <Input
                            placeholder={Messages.loginScreen.addname}
                            containerStyle={styles.input}
                            onChangeText={(text) => this.setState({ selectName: text })}
                            rightIcon={<Icon name='plus' size={24} onPress={()=>
                                Actions.members()}/>}
                        />

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
                            buttonStyle={{backgroundColor:AppColors.background, width: AppSizes.widthInput }}
                        />
                    </View>

                    <Table style={styles.table}
                        borderStyle={{ borderWidth: 1, borderColor: 'black' }}
                        >
                        <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
                        <Rows data={this.state.tableData} textStyle={styles.text} />
                    </Table>

                    <Button
                        title={Messages.loginScreen.save}
                        containerStyle={styles.input}
                        buttonStyle={{ backgroundColor: AppColors.background, width: AppSizes.widthInput }}
                        onPress={() => {
                            if (this.state.selectDate.length == 0 ||
                                this.state.selectName.length == 0 ||
                                this.state.selectExercise.length == 0
                            ) {
                                alert(Messages.loginScreen.notifi, Messages.loginScreen.msgInfo)
                            }
                            else{

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
    table:{
        width:'100%' ,
        marginTop: 24,
        backgroundColor: AppColors.background,
    },


})