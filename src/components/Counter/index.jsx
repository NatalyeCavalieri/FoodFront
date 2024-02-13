import { useState } from "react"
import { Container } from "./styles"

import { FiMinus } from "react-icons/fi"
import { LuPlus } from "react-icons/lu"

export function Counter() {
  const [count, setCount] = useState(1)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    if(count > 1){
      setCount(count - 1)
    }
  }
  return (
    <Container>
      <div>
        <button onClick={decrement}>
          <FiMinus />
        </button>
        <span> {String(count).padStart(2, "0")} </span>
        <button type="button" onClick={increment}>
          <LuPlus />
        </button>
      </div>
    </Container>
  )
}
