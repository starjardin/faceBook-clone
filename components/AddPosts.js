import React from 'react'
import reducer from '../reducer/reducer'

export default function AddPosts() {
  const [postData, dispatch] = reducer()

  const handleSubmitPost = (e) => {
    e.preventDefault()
    dispatch({
      type: "ADD_NEW_POST",
      newPost: {
        userName : "Romeo",
        imgUrl : "https://picsum.photos/seed/picsum/200/300",
        like : 0,
        description : e.target.description.value,
        date : Date.now(),
        id : Date.now()
      }
    })
  }

  return (
    <>
      <form onSubmit={handleSubmitPost}>
        <textarea
          name="description"
        />
        <input type="url"
          name="imgUrl"
        />
        <button>Post</button>
      </form>
    </>
  )
}
