import React from 'react'
import { useState } from 'react';

const App = () => {
  const [name, setname] = useState('')
  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const oldAllUser = [...allUsers]
    oldAllUser.push(name)
    setAllUsers(oldAllUser)
    console.log(oldAllUser);

    setname('')



  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)


      }}

      ><input type="text" placeholder='Enter your name '
        required
        value={name}
        onChange={(e) => {
          setname(e.target.value);

        }}

        />
        <button >Submit</button>

      </form>
        {allUsers.map((e,idx)=>{
       return <h1 key={idx}>{e}</h1>
      })}
    </div>
  )
}

export default App
