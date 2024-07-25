import PropTypes from 'prop-types'

const Week = ({ week }) => {
  return (
    <tr>
      {week.map((day) => (
        <td
          key={day.day}
          className={day.className}
        >
          {day.day}
        </td>
      ))}
    </tr>
  )
}

Week.propTypes = {
  week: PropTypes.array.isRequired,
}

export default Week
