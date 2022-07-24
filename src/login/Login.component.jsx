import React from 'react';

const Login = () => {
  return (
    <div className='bg-gray-100 flex flex-col items-center justify-center content-center text-center h-screen w-full p-20 mb-10 m-auto'>
      <div className='bg-white mt-16 justify-center border-gray-300 border pt-8 h-screen w-fit'>
        <div className='flex justify-center text-center '>
          <img alt='Instagram' src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png' />
        </div>
        
        <div className='flex'>
          <form className='max-w-[400px] w-full mx-auto p-8'>
            <div className='flex flex-col text-gray-light py-2'>
              <input className='bg-gray-200 border-gray-400 border rounded-md mt-2 p-2 focus:outline-none focus:border-gray-dark' type='text' placeholder='USERNAME'/>
            </div>
  
            <div className='flex flex-col  text-gray-light py-2'>
              <input className='bg-gray-200 border-gray-400 border rounded-md mt-2 p-2 focus:outline-none focus:border-gray-dark' type='password' placeholder='PASSWORD'/>
            </div>

            <div className='hidden sm:flex justify-between py-2'>
              <p><input type='checkbox' />Remember Me</p>
              <p className='ml-4'>Forgot Password?</p>
            </div>
  
            <button className='w-full my-5 py-2 bg-IgBlue rounded-lg shadow-lg hover:bg-xblue'>Log In</button>

            <div className='text-gray-500'>
              <p>_____ OR ______</p>
            </div>
          </form>
        </div>
      </div> 
      <div className='flex bg-white mt-2 mb-8 justify-between border-gray-300 border py-4 px-2 h-screen w-fit'>
        <div className=''>
          <p>Don't have an account?</p>
        </div>

        <div className='ml-2 hover:text-red-500'>
          <p>Sign Up</p>
        </div>
      </div> 
      </div>
      
  )
}

export default Login;