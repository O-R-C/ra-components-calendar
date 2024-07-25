import PropTypes from 'prop-types'
import Thead from '../Thead/Thead'
import Tbody from '../Tbody/Tbody'
import Colgroup from '../Colgroup/Colgroup'

const Table = ({ month }) => {
  return (
    <table className='ui-datepicker-calendar'>
      <Colgroup />
      <Thead />
      <Tbody month={month} />
    </table>
  )
}

Table.propTypes = {
  month: PropTypes.array.isRequired,
}

export default Table
