import React from 'react'

export default function UserInfo(props) {
console.log(props.user)
  return (
    <div className="wrapper">
      <div className="user-info-page__name">
        <img src={props.user.avatar_url}></img>
        <span>{props.user.name}</span>
      </div>
      <div className="user-info-page__description">
        <p>
          {props.user.description}
        </p>
      </div>
    </div>
  )  
}
