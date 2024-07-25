import PropTypes from 'prop-types'

import Week from '../Week/Week'

const Tbody = ({ month }) => {
  const days = [...month]
  const weeks = []

  while (days.length) {
    weeks.push(days.splice(0, 7))
  }

  return (
    <tbody>
      {weeks.map((week, index) => (
        <Week
          key={index}
          week={week}
        />
      ))}
    </tbody>
  )
}

Tbody.propTypes = {
  month: PropTypes.array.isRequired,
}

export default Tbody
