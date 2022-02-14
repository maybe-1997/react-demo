import React, { useState, useEffect } from 'react'
import {getInfoApi} from '../api'

export default function Hello(props) {
  let [info, setInfo] = useState(null);
  useEffect(() => {
    getInfoApi().then(data => {
      setInfo(data.name);
    })
  })
  return (
    <div>
      {info}
    </div>
  )
}
