import moment from 'moment'

export const getMonthItem = (date) => {
  const prev = getPrevDays(date)
  const current = getCurrentDays(date)
  const next = getNextDays(date)

  return [...prev, ...current, ...next]
}

const getDaysInMonth = (date) => {
  return moment(date).daysInMonth()
}

const getFirstDay = (date) => {
  return moment(date).startOf('month').format('d')
}

const getPrevDays = (date) => {
  const firstDay = getFirstDay(date)
  const diff = firstDay - 1

  if (diff < 0) return []

  const lastPrevDay = moment(`${moment(date).format('YYYY-MM')}-01`)
    .subtract(1, 'days')
    .format('D')

  return addClassName(Array.from({ length: diff }, (item, i) => ({ ...item, day: lastPrevDay - (i + 1) })).reverse())
}

const getCurrentDays = (date) => {
  const daysInMonth = getDaysInMonth(date)
  return Array.from({ length: daysInMonth }, (item, i) => {
    const currentDay = moment(date).format('D')

    if (i + 1 === +currentDay) {
      return { ...item, day: i + 1, className: 'ui-datepicker-today' }
    }

    return { ...item, day: i + 1 }
  })
}

const getNextDays = (date) => {
  const lastDay = +moment(date).endOf('month').format('d')

  if (!lastDay) return []

  const diff = 7 - lastDay

  return addClassName(Array.from({ length: diff }, (item, i) => ({ ...item, day: i + 1 })))
}

const addClassName = (days) => {
  return days.map((item) => ({ ...item, className: 'ui-datepicker-other-month' }))
}

export default getMonthItem
