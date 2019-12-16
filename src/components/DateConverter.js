import React from 'react'

export default function DateConverter(props) {
  const { date, type } = props
  let ISOdate = new Date(date)
  switch (type) {
    case 'date-time':
      return (
        <date>{ISOdate.toUTCString()}</date>
      )
    case 'date':
      return (
        <date>{ISOdate.toDateString()}</date>
      )
  }
  
}