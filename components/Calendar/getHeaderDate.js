import moment from 'moment'
import 'moment/dist/locale/ru'

export const getHeaderDate = (date) => {
  moment.locale('ru')

  const day = moment(date).format('dddd')
  const number = moment(date).format('D')
  const month = moment(date).format('MMMM')
  const monthCase = moment(date).format('Do MMMM').split(' ')[1]
  const year = moment(date).format('YYYY')

  return { day, number, month, monthCase, year }
}

export default getHeaderDate
