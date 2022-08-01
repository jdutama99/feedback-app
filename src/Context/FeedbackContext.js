import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'Item Feedback 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'Item Feedback 2',
      rating: 1,
    },
    {
      id: 3,
      text: 'Item Feedback 3',
      rating: 7,
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })
  // edit Feedback
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    )
  }

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }
  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to remove item?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  // Set item to be edited
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
