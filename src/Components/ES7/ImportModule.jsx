import React from 'react'
import {name,age} from './ExportModule'

export default function ImportModule() {
  return (
    <div>
      My name is {name},I am {age} years old
    </div>
  )
}
