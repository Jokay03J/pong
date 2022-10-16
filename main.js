import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import { setupGame } from './Game'

document.querySelector('#app').innerHTML = `
  <div>

  </div>
`

setupGame()