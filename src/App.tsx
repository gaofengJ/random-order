import { useState } from 'react'
import './App.less'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      随机点餐系统
    </div>
  )
}

export default App
