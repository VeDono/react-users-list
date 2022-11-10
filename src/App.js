import React, { useEffect, useState } from 'react'
import './index.scss'
import { Success } from './components/Success'
import { Users } from './components/Users'

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((response) => response.json())
      .then((json) => setUsers(json.data))
      .catch((error) => {
        console.error(error)
        alert('Ошибка при получении пользователей')
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className="App">
      <Users items={users} />
      {/* <Success /> */}
    </div>
  )
}

export default App
