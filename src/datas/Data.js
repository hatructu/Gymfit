import Realm from 'realm'
import Messages from '@constant'

const TABLE_USER = 'user'
const GYMER = 'gymer'
const EXERCISE = 'exercise'
const CALENDAR = 'calerdar'
const CALENDAR_DETAIL = 'calendar_detail'

export const TableUser = {
    name: TABLE_USER,
    properties: {
        id: 'int?',
        username: 'string?',
        password: 'string?',
        email: 'string?'
    }
}
export const Gymer = {
    name: GYMER,
    properties: {
        id: 'int?',
        name: 'string?',
        sex: 'bool?',
        weight: 'int?',
        height: 'int?',
        bodymath: 'int?',
        avatar: 'string?'
    }
}

export const Exercise = {
    name: EXERCISE,
    properties: {
        id: 'int?',
        name: 'string?',
        round:'int?',
        point:'int?',
        image:'string?'
    }
}

export const Calendar = {
    name: CALENDAR,
    properties: {
        id: 'int?',
        date: 'int?',
        id_gymer:'int?',
        status:'bool?'
    }
}

export const Calendar_detail = {
    name: CALENDAR_DETAIL,
    properties: {
        id: 'int?',
        date:'int?',
        id_calendar:'int?',
        id_exercise:'int?',
        status:'bool?'
    }
}
export {TABLE_USER, GYMER, EXERCISE, CALENDAR, CALENDAR_DETAIL }
export default new Realm({schema:[TableUser, Gymer, Exercise, Calendar, Calendar_detail ]}) 