import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const wishes = [
    {text : 'Travel to the moon', done:false},
    {text : 'Pay the gym', done:true},
    {text : 'Go to the gym', done:false},
  ];

const App = () => (
    <div>
        <h1>My Wishlist</h1>
        <fieldset>
            <legend>New wish</legend>
            <input placeholder="Enter your wish here"/>
        </fieldset>
        <ul>
          {wishes.map(wish => (
            <li>{wish.text}</li>
          ))}
        </ul>
    </div>
)

export default App
