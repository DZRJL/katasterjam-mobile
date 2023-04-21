
import moment from 'moment'
export function formatDate (date) {
  if (date) {
    return moment(String(date)).format('DD. MM. YYYY')
  }

  return ''
}
export function getDateTime () {
  return moment(new Date()).format('DD. MM. YYYY HH:mm:ss')
}
