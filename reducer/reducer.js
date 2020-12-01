import React, { useEffect, useReducer, useState } from 'react'
import postsData from '../postsData.json'
import userData from '../userData.json'

export default function reducer() {
  
  const initialState = {
    posts: [...postsData],
    users: [...userData],
    currentUser: {}
  }

  const reducerFunc = (state, action) => {
    const { users, posts } = state
    switch (action.type) {
      case "LIKE_POST": {
        posts.map(post => {
          if (post.likes.some(like => like.likeId !== action.id)) {
            return {
              ...state,
              likes : {...post.likes}
            }
          }
        })
        return state
      }
        break;
      case "ADD_NEW_POST": {
        return [action.newPost, ...state]
      }
        break;
      case "ADD_COMMENT": {
        return state.map(post => {
          if (post.id !== action.id) return post
          return { ...post, comments : [...action.comments, action.newComment]}
        }
      )}
    }
    return state
  }
  const [state, dispatch] = useReducer(reducerFunc, initialState)
  console.log(state);
  return [ state, dispatch ]
}
