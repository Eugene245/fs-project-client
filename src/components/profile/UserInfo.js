import React from 'react'
import FollowButtonContainer from '../../containers/FollowButtonContainer'

export default function UserInfo(props) {
  const { receivedUser, user } = props
  console.log(receivedUser.name !== user.name)
  return (
    <div className="wrapper">
      <div className="user-info-page__name">
        <img src={receivedUser.avatar_url}></img>
        <span>{receivedUser.name}</span>
      </div>
      <div className="user-info-page__description">
        <p>
          {receivedUser.description}
        </p>
      </div>
      {(() => {
        if(receivedUser.name !== user.name) {
          return (
            <FollowButtonContainer userName={receivedUser.name}/>
          )
        }
      })()}
    </div>
  )  
}
