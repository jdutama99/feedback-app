import Card from './Shared/Card'
import PropTypes from 'prop-types'
import FeedbackData from '../Data/FeedbackData'
function FeedbackItem({ item }) {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackData.propTypes = {
  item: PropTypes.object.isRequired,
}
export default FeedbackItem
