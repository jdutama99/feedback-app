import Card from './Shared/Card'
import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import FeedbackData from '../Data/FeedbackData'
function FeedbackItem({ item, handleDelete }) {
  // const handleClick = (id) => {
  //   console.log(id)
  // }

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={()=>handleDelete(item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackData.propTypes = {
  item: PropTypes.object.isRequired,
}
export default FeedbackItem
