import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'

const reactionEmoji = { 
  a: '😃',
  thumbsUp: '👍', 
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
}

export const ReactionButtons = React.memo(({ post }) => {
  const dispatch = useDispatch()
  console.log("ReactionButtons rendered")
  console.log(Object.entries(reactionEmoji))

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {post.reactions[name]} {emoji} 
      </button>
    )
  })

  return <div>{reactionButtons}</div>

}
)