import React from 'react'
import DateConverter from '../DateConverter'
import FollowButtonContainer from '../../containers/FollowButtonContainer'

export default function UserInfo(props) {
  const { receivedUser, user } = props
  return (
    <div className="user-info-page-wrapper">
      <div className="user-info-page__name">
        <img src={receivedUser.avatar_url}></img>
        <span>{receivedUser.name}</span>
      </div>
      <div className="user-info-page__description">
        <p>
          {receivedUser.description}
        </p>
      </div>
      <div className="user-info-page__register-date">
        <span>Register date: </span>
        <DateConverter date={receivedUser.register_date} type={'date'} />
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
