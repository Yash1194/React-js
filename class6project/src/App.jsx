import React, { useState } from 'react'

const App = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [allUsers, setAllUsers] = useState([]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setAllUsers([...allUsers, formData])
    setFormData({ name: '', email: '', phone: '' })
  }


  return (
    <div>
    <div className=' h-screen flex flex-col  bg-black p-10 '>
      <form className='flex flex-col gap-7 bg-white p-14 rounded-lg w-fit bg-gray-800' onSubmit={submitHandler} >
        <input
        className='border p-3 rounded-lg bg-transparent text-white'
         type="text"
          placeholder='Enter your name ' 
          value={formData.name}
          onChange={handleChange}
          name='name'
          
          />
        <input
        className='border p-3 rounded-lg bg-transparent text-white'
         type="text"
          placeholder='Enter your email ' 
          value={formData.email}
          onChange={handleChange}
          name='email'
         
          />

        <input
        className='border p-3 rounded-lg bg-transparent text-white'
        type="text"
        placeholder='Enter your phone number ' 
        value={formData.phone}
        onChange={handleChange}
        name='phone'
        />
        <button  className='bg-blue-500 text-white p-3 rounded-lg'>Submit</button>

      </form>
      <div className='mt-10 text-white'>
        {allUsers.map((user, idx) => {
          return (
            <div key={idx} className='border p-3 rounded-lg mb-3 bg-gray-700 w-fit cursor-pointer'
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
              <h1>Name: {user.name}</h1>
                {openIndex === idx && (
                  <div>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
                </div>
                )}
            </div>
          )
        })}

      </div>
    </div>
    </div>
  )
}

export default App
