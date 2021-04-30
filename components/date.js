import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  let date = parseISO(dateString)
  return <time datetime={dateString}>{format(date, 'MMMM d, yyyy')}</time>
}
