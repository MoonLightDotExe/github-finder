import React from 'react'
import UsersList from './../components/users/UsersList'
import UserSearch from './../components/users/UserSearch'

function Home() {
  return (
    <div>
      <UserSearch />
      <UsersList />
    </div>
  )
}

export default Home
