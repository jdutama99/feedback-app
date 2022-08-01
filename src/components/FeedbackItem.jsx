import Card from './Shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import FeedbackData from '../Data/FeedbackData'
import FeedbackContext from '../Context/FeedbackContext'
function FeedbackItem({ item }) {
  // const handleClick = (id) => {
  //   console.log(id)
  // }
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button onClick={()=> editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>{' '}
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackData.propTypes = {
  item: PropTypes.object.isRequired,
}
export default FeedbackItem
