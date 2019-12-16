import React from 'react';
import { Link } from 'react-router-dom'
import DateConverter from '../DateConverter'

class CommentListItem extends React.Component {
  constructor(props) {
    super(props)
    this.deleteCommentHandler = this.deleteCommentHandler.bind(this);
  }

   deleteCommentHandler() {
    const { postId, deleteComment } = this.props
    const { _id } = this.props.comment
    const token = localStorage.getItem('token')
    deleteComment({ id: postId, commentId: _id, token: token })
  }

  render() {
  const { userName } = this.props
  const { author, commentText, creation_date } = this.props.comment
    return (
      <li class="comment-list-item">
        {
          (() => {
            if(userName === author)
              return (
                <div className="comment-actions">
                  <svg id="Layer_1" enable-background="new 0 0 56.69 56.69" height="30" viewBox="0 0 56.69 56.69" width="30"><g><path d="m28.345 41.676c-1.202 0-2.332-.469-3.182-1.318l-17.66-17.662c-1.754-1.754-1.754-4.609 0-6.363.85-.85 1.98-1.318 3.183-1.318s2.333.468 3.182 1.318l14.477 14.479 14.478-14.479c.85-.85 1.979-1.318 3.182-1.318s2.332.468 3.182 1.318c.851.85 1.318 1.98 1.318 3.182s-.468 2.332-1.318 3.182l-17.659 17.658c-.851.853-1.982 1.321-3.183 1.321zm-17.659-24.661c-.668 0-1.296.26-1.769.732-.975.975-.975 2.561 0 3.535l17.66 17.661c.936.936 2.557.948 3.504.029l17.69-17.69c.473-.473.732-1.1.732-1.768s-.26-1.295-.732-1.768c-.945-.944-2.59-.944-3.535 0l-15.891 15.894-15.891-15.893c-.473-.472-1.1-.732-1.768-.732z"/></g></svg>
                  <div className="comment-actions-content">
                    <div onClick={this.deleteCommentHandler}>Delete</div>
                  </div>
                </div>
              )
          })()
        }
        <div class="comment-list-item__author">
          <Link to={`/users/${author}`}>
            <span>{author}</span>
          </Link>
        </div>
        <div class="comment-list-item__text">
          <p>{commentText}</p>
        </div>
        <div class="comment-list-item__date">
          <DateConverter date={creation_date} type={'date-time'}/>
        </div>
      </li>
    );
}
}

export default CommentListItem;