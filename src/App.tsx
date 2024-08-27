import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const MyButtonOdd = () => {
  return (
    <button>I'm a odd button </button>
  )
}

const MyButtonEven = () => {
  return (
    <button>I'm a even button</button>
  )
}

const items = [
  { id: 1, name: 'Cabbage' },
  { id: 2, name: 'Carrot' },
  { id: 3, name: 'Potato' },
  { id: 4, name: 'Onion' },
]

const listItems = () => items.map((item) => {
  return <li key={item.id}>
    {item.name}
  </li>
})

const MyButton = (
  { count, onClick }: { count: number, onClick: () => void }) => {
  return (
    <button onClick={onClick}>
      count is {count}
    </button>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [content, setContent] = useState(<MyButtonEven></MyButtonEven>)

  const setCountAndContent = () => {
    setCount(count + 1)
    if (count % 2 === 0) {
      setContent(<MyButtonEven></MyButtonEven>)
    } else {
      setContent(<MyButtonOdd></MyButtonOdd>)
    }
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <MyButton count={count} onClick={setCountAndContent}></MyButton>
        <MyButton count={count} onClick={setCountAndContent}></MyButton>
        {content}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <ul>
        {listItems()}
      </ul>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
