import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const notes =[
  {
    id: 1,
    name: "Niki",
    place:"cbe"
  },
  {
    id: 2,
    name: "viki",
    place:"tup"
  },
  {
    id: 2,
    name: "mahi",
    place:"avninashi"
  },
  {
    id: 4,
    name: "sandy",
    place:"tenkasi"
  }
]


ReactDOM.createRoot(document.getElementById('root')).render(

 <App
 notes ={notes} />
)