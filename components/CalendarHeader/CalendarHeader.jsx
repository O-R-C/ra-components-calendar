import PropTypes from 'prop-types'

const CalendarHeader = ({ date }) => {
  const { day, number, month, monthCase, year } = date

  return (
    <div className='ui-datepicker-material-header'>
      <div className='ui-datepicker-material-day'>{day}</div>
      <div className='ui-datepicker-material-date'>
        <div className='ui-datepicker-material-day-num'>{number}</div>
        <div className='ui-datepicker-material-month'>{monthCase}</div>
        <div className='ui-datepicker-material-year'>{year}</div>
      </div>
      <div className='ui-datepicker-header'>
        <div className='ui-datepicker-title'>
          <span className='ui-datepicker-material-month'>{month}</span>
          &nbsp;
          <span className='ui-datepicker-material-year'>{year}</span>
        </div>
      </div>
    </div>
  )
}

export default CalendarHeader

CalendarHeader.propTypes = {
  date: PropTypes.shape({
    day: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    monthCase: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }),
}
