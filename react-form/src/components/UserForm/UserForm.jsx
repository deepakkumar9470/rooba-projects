import React,{useState} from 'react'
import { validation } from '../../utils/valdation';

const UserForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    country: '',
  });

  const [errors,setErrors] = useState({})

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]:  e.target.value });
  };


  const handleSubmit = (e) => {
    // Handle form submission here, e.g., send data to a server
    e.preventDefault();
     setErrors(validation(values))
  };

    
  return (
    <div className="min-h-[50vh] py-10 flex items-center justify-center bg-gray-100">
      <div className="w-[600px] bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl text-center underline font-semibold mb-4">User Form</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleInputChange}
            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.name && <p className='text-sm text-red-400 font-semibold'>{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
          />
         {errors.email && <p className='text-sm text-red-400 font-semibold'>{errors.email}</p>}

        </div>
  
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
          />
          {errors.password && <p className='text-sm text-red-400 font-semibold'>{errors.password}</p>}

        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            value={values.age}
            onChange={handleInputChange}
            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
          />
        {errors.age && <p className='text-sm text-red-400 font-semibold'>{errors.age}</p>}

        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">Country:</label>
          <input
            type="text"
            name="country"
            value={values.country}
            onChange={handleInputChange}
            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
          />
          {errors.country && <p className='text-sm text-red-400 font-semibold'>{errors.country}</p>}

        </div>
    
        <button 
        type="submit"
        disabled={errors}
        className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none cursor-pointer focus:shadow-outline"
        >Submit</button>
      </form>
      </div>
    </div>
  )
}

export default UserForm