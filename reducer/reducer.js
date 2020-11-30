import React, { useReducer } from 'react'
import data from '../data.json'

export default function reducer() {
  
  const initialState = data

  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "LIKE_POST": {
        return state.map(post => {
          if (post.id !== action.id) return post
          return {...post, like : post.like + 1}
        })
      }
      case "ADD_NEW_POST": {
        return [ action.newPost, ...state ]
      }
    }
    return initialState
  }
  
  const [postData, dispatch] = useReducer(reducerFunc, initialState)
  console.log(postData);
  return [ postData, dispatch ]
}
