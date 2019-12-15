import React from 'react'

export default function DateConverter(props) {
  const { date } = props
  let ISOdate = new Date(date)
  return (
    <date>{ISOdate.toUTCString()}</date>
  )
}