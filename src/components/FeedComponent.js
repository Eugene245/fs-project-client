import React from 'react'
import Notification from '../components/Notification'
import WithButtons from './hoc/WithButtons'

const data = {
    buttons: [
    <button onClick={() => console.log('dismiss')}>dismiss</button>,
    <button onClick={() => console.log('ok')}>ok</button>
]
}

const NotificationWithButtons = WithButtons (Notification, data);

function FeedComponent (props) {
  return (
    <div>
      <ul>
        {props.articleList.map(item =>
          <li>
            {item}
          </li>
        )}
      </ul>
      <Notification>
        <h1>123</h1>
      </Notification>
    </div>
  );
}

export default FeedComponent;