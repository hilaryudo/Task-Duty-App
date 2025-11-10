import { useState } from 'react'
import React from 'react'
import Form from '../components/Form'

const NewTask = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: ''
  })
   
  const handleChange = (e) => {
    const{ name, value } = e.target;
    setFormData((prev) => ({...prev, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
        <main className='wrapper'>
            <Form formTitle="New Task" formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
        </main>
    </div>
  )
}

export default NewTask