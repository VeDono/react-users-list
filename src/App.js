import React, { useEffect, useState } from 'react'
import './index.scss'
import { Success } from './components/Success'
import { Users } from './components/Users'

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([])
  const [invites, setInvites] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [success, setSuccess] = useState(false)
  const [data, setData] = useState('')

  function handleInputChange(event) {
    setData(event.target.value)
  }

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

  const handleInviteChange = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id))
    } else {
      setInvites((prev) => [...prev, id])
    }
  }

  const handleSendInvites = () => {
    setSuccess(true)
  }

  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          handleInput={handleInputChange}
          searchValue={data}
          items={users}
          isLoading={isLoading}
          invites={invites}
          handleInviteChange={handleInviteChange}
          handleSendInvites={handleSendInvites}
        />
      )}
    </div>
  )
}

export default App
