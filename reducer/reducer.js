import React, { useReducer, createContext } from 'react'
import postsData from '../postsData.json'
import userData from '../userData.json'
  
  const initialState = {
    posts: [...postsData],
    users: [...userData],
    currentUser: {currentUserId : "1606823012368"}
  }

const reducerFunc = (state, action) => {
  const { users, posts } = state
  switch (action.type) {
    case "LIKE_POST": {
      posts.map(post => {
        return {
          ...state, 
          post: {
            ...post, 
            like: [
              ...post.likes,
              action.like
            ]
          }
          }
      })
      return state
    }
    case "ADD_NEW_POST": {
      return { ...state, posts : action.posts }
    }
    case "ADD_COMMENT": {
      const commentedPost = posts.map(post => {
        if (post.postId === action.id) {
          return {
            ...post,
            comments : [...post.comments, action.newComment]
          }
        }
        return post
      })
      return {
        ...state,
        posts: commentedPost
      }
    }
  }
}

const PostContext = createContext()

function PostContainerProvider ({ children }) {
  const [state, dispatch] = useReducer(reducerFunc, initialState)
  return (
    <PostContext.Provider value={{ dispatch, state }}>
      {children}
    </PostContext.Provider>
  )
}
export { PostContainerProvider, PostContext }
