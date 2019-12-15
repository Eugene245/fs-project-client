import React from 'react';
import CommentListItemContainer from '../../containers/CommentListItemContainer'
import '../../styles/post/comments.css'

export default function CommentList(props) {
    return (
      <ul className="post-page__comment-list">
        {props.comments.map(comment => (
          <CommentListItemContainer postId={props.postId} comment={comment}/>
        ))}
      </ul>
    )
  }
