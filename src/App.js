import './App.css'
import React, { useEffect, useState } from 'react'
import BigCookie from './assets/BigCookie.png'

function App() {
  const [cookies, setCookies] = useState(0)
  const [productionRate, setProductionRate] = useState(0.1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCookies(cookies + productionRate)
    }, 1000)

    return () => clearInterval(interval)
  })

  const handleCookieClick = () => {
    setCookies(cookies + 1)
  }

  const upgrades = [
    { name: 'Cursor', cost: 10, increaseRate: 0.1 }
  ]

  const buyUpgrade = upgrade => {
    if (cookies >= upgrade.cost) {
      setCookies(cookies - upgrade.cost)
      setProductionRate(productionRate + upgrade.increaseRate)
    }
  }

  return (
    <div className="App">
      <h1>Cookie Clicker</h1>
      <div>
        <p>Cookies: { Math.floor(cookies) }</p>
        <p>Production Rate: { productionRate.toFixed(2) } cookies/s</p>
        <button
          className="cookie"
          onClick={ handleCookieClick }
        >
          <img src={ BigCookie } alt="Big Cookie" />
        </button>
      </div>
      <div className="Upgrades">
        <h2>Upgrades</h2>
        {upgrades.map((upgrade, index) => (
          <div key={ index }>
            <p>{ upgrade.name } - Cost: { upgrade.cost } cookies</p>
            <button onClick={() => buyUpgrade(upgrade)} disabled={cookies < upgrade.cost}>Purchase</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
