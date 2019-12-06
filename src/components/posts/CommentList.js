import React from 'react';

export default function CommentList(props) {

    return (
      <ul>
        {props.comments.map(comment => (
          <li class="comment-list-item">
            <span class="comment-list-item_author">
              <strong>{comment.author}</strong>
            </span>
            <div class="comment-list-item_text">
              <p>{comment.commentText}</p>
            </div>
            <date class="comment-list-item_date">{comment.creation_date}</date>
          </li>
        ))}
      </ul>
    )
  }
