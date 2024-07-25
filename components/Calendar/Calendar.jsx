import getHeaderDate from './getHeaderDate'
import getMonthItem from './getMonthItem'
import PropTypes from 'prop-types'
import CalendarHeader from '../CalendarHeader/CalendarHeader'
import Table from '../Table/Table'

const Calendar = ({ date }) => {
  return (
    <div className='ui-datepicker'>
      <CalendarHeader date={getHeaderDate(date)} />
      <Table month={getMonthItem(date)} />
    </div>
  )
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
}

export default Calendar
