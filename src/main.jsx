import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const notes =[
  {
    id: 1,
    name: "Niki",
    place:"cbe",
    result: true
  },
  {
    id: 2,
    name: "viki",
    place:"tup",
    result: true
  },
  {
    id: 3,
    name: "mahi",
    place:"avinashi",
    result: false

  },
  {
    id: 4,
    name: "sandy",
    place:"tenkasi",
    result: true
  }
]


ReactDOM.createRoot(document.getElementById('root')).render(

 <App
 notes ={notes} />
)