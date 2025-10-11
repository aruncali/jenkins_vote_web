import React from 'react'
import img from './assets/Group 20.png'
/*import {HashRouter, Routes} from 'react'*/
import img1 from './assets/3.png'
import img2 from './assets/4.png'
import img3 from './assets/5.png'
import img4 from './assets/1.png'
import repe from './assets/tnevm.png'
import log from './assets/2.png'
import icon1 from './assets/log1.png'

const App = () => {
  return (
    <div>

      <div className='mx-12'>
        <div className=' flex flex-row rounded-b-4xl mb-8 bg-black h-16'>
          <div>
            <img src={log} className=' left'></img>

          </div>
          <div>
            <ul className=' flex justify-center text-white gap-40 p-4'>
              <li>
                home
              </li>
              <li>
                register
              </li>
              <li>
                voter login
              </li>
              <li>
                contact us
              </li>
            </ul>

          </div>
          <div></div>
        </div>
        <div className='flex flex-row'>
          <div className='my-12 basis-1/3'>
            <h1 className='text-4xl font-bold w-1/2'>
              Welcome to the Digital Voting Platform



            </h1>
            <p className='w-160 py-20 text-black'>
              Our system ensures fair, transparent, and secure elections with the power of blockchain.
              Electronic Voting Machine (EVM) Style Interface Interact with a user-friendly, familiar design combined with next-level blockchain security.

            </p>
            <div className=' flex flex-row px-3 py-2 bg-black text-white w-40'>
              <button className='w-1/3' >
                voting

              </button><div>
                <img className='float-right w-2/3' src={img3}></img>
              </div>
            </div>


          </div>
          <div className='basis-2/3 w-1/2'>
            <img src={img}>
            </img>
          </div>


        </div>
        <div className='bg-[url(./assets/tnevm.png)]  bg-repeat-space'>
          <img src={repe}></img>
        </div>
        <div className='bg-blue-20 '>
          <h1 className='text-4xl text-wrap text-black p-20 text-center '>About online voting</h1>
        </div>
        <div className='flex flex-row'>
          <div className='basis-1/3' bg-blue>

            <img src={img1}>
            </img>
          </div>
          <div className='bg-sky-200 p-16 relative rounded-xl border-2 mx-20 border-blue basis-2/3'>
            <h1>learning how to vote online can save a lot of time and effort. After all,
              voting is a fundamental right of every Indian citizen. To make the process hassle-free
              for every Indian, as much convenience as possible should be provided.
              In the quest to modernise the democratic process,
              the Election Commission of India (ECI) has advanced with baby steps towards online voting.
            </h1>
            <img className='absolute bottom-[-60] right-[-80px] size-60' src={img4}></img>


          </div>

        </div>
        <div className='bg-blue-400 p-2 rounded-4xl  mt-12 mb-6'>
          <h2 className='text-center font-bold '>voting guidelines</h2>
        </div>
        <div className='flex-full italic bg-sky-200 mx-40 border-2 rounded-xl p-8 text-justify'>
          <div>
            <ol className='text-justify md:text-center '>
              <li>1.Ensure you are registered before attempting to vote</li>
              <li>2.Keep your voter ID and password secure</li>
              <li> 3.Verify your candidate selection before submitting</li>
              <li> 4.Voting is anonymous - your identity is not linked to your vote</li>
              <li>  5.Each voter can only vote once</li>
              <li>6.Report any suspicious activity to election officials</li>
              <li>7.voting is not only our rights it is our power</li></ol>

            <div className='justify-self-center '>
              <button className='bg-black text-white rounded-4xl m-4 p-2'>
                rigister
              </button></div>


          </div>

        </div><div className='bg-blue-400 my-6 p-2 border-2 rounded-4xl'>

        </div>

        <div className='grid grid-flow-col grid-rows border-2 bg-sky-200 rounded-4xl'>
          <div>
            <div>
              <h4 className='font-semibold text-center mb-5'>Contact Us</h4>
              <h1 className='text-center'>Get in touch with the right people at evm. Were here to help.</h1>

            </div>
            <div className='flex justify-between m-20'>
              <div className='justify-center'>
                <div className='mb-4'>+91 9894717881</div>


                <div className='bg-white size-fit'>director
                  <h1>name:arun</h1>
                  <h1> email:arun@tnevm.in</h1></div>

              </div>
              <div>
                <div className='mb-4'>contact@tnevm.in</div>
                <div className='bg-white size-fit'>
                  <h4>website info manager</h4>
                  <h4>name:arun</h4>
                  <h4>email:arun@tnevm.in</h4>


                </div>

              </div>

            </div>




          </div>

        </div>
        <div className='bg-white w-fill h-200'>
          <img className=' w-200 h-200 object-fill' src={img2}></img>
          <div className='bg-white p-4 my-10'>
            <h1 className='text-black'> result</h1>
          </div>
          <div >Election Results

          </div>
          <div>


          </div>

        </div>

        <div className='bg-black text-white rounded-4xl border-white border-2  '>
          <div className='flex flex-col  '>
            <div >

              <img className='ml-300 p-6' src={log}></img>

            </div>

            <div className=' flex flex-row ml-20 gap-20'>
              <h1>about us</h1>
              <h1>services</h1>
              <h1>others</h1>

              <img className=' ml-180 rounded-4xl' src={icon1}></img>
            </div>
            <p className='text-right pt-4 mb-4 mr-4'>©Copyright 2025 tnevm. All Rights Reserved
              <h1>Version: 1.1.1.</h1>
              <h1>Last Updated On: 26-10-2025</h1></p>
          </div>
        </div>
       <div className='bg-gray-100 flex flex-col  mx-60 mt-6 p-4 rounded-2xl shadow-md text-justify iteam-center w-180'>


          <textarea placeholder='message here..' className='w-60 h-16 p-4
           border-blue-300 rounded-lg focus:ring-none focus:ring-blue-300 focus:border-blue-500 resize-none m-20' ></textarea>
        </div>
        <div className='bg-white flex flex-col w-80'>
          <div> <lable for='email' class='block text-sm text-gray-300 mb-1'> email address</lable>
            <input type="email" id='email' placeholder='name@example.com'
              className='w-60 p-2 text-black border
             border-gray-100 resize-none focus:outline-indigo-100 focus:ring-indigo-100 focus:border-indigo-400' />
          </div>



          <div className='w-100 h-auto flex flex-col border-black border-2 gap-6 p-8 rounded-4xl bg-blue-200'>
            <h2 className='text-center underline '> Voter Registration</h2>
            <div className=' flex flex-row gap-10'> <h2> Voter ID:</h2>
              <input type=" text-black " placeholder=' id name...'
                className='  m-1 border-gray-200  p-2 w-20 rounded-4xl focus-outline-none focus:ring-2 focus:ring-blue-300 ' />
            </div>
            <div className='text-white '>
              <div className='gap-10'>
                <label for='pin' className=' text-gray-100 mt-2'> password</label>
                <input id='pin' type='text' maxlength='8' className='border-2 w-auto border-black rounded-4xl focus-outline-none focus:ring-2 focus:ring-white focus:border-black'></input>


              </div>
              <div className='my-4'>
                <h1>Full Name</h1>
                <input type="text" maxlength='20'className='w-auto border-2 rounded-4xl  ' />
                

              </div>

             
                <h1 className='mt-4 mb-4'>I agree to the terms and conditions of voting Register</h1>
                <h1>Already registered?
                  <button className='bg-black  text-gray-100 p-2 rounded-4xl'>Login here</button>

                </h1>
            

            </div>



          </div>

        </div>
        <div className='bg-sky-200 p-8 border-2 justify-center rounded-4xl w-100 h-auto'>
          <h2 className='text-center text-black underline'>
            Voter Login </h2>
          <h2>    Voter ID</h2>

          <input type=" text-black " placeholder=' id name...'
            className='  my-8 border border-gray-200  p-2 w-auto rounded-4xl focus-outline-none focus:ring-2 focus:ring-blue-300 ' />



          <div>
            <label for='pin' className='ml-10 text-black '> pin: </label>
            <input id='pin' type='text' maxlength='8' className='border-2 w-auto rounded-4xl border-black focus-outline-none focus:ring-2 focus:ring-white focus:border-black'></input>


          </div>
          <div className='flex flex-row mt-4' >
            <h1 className=' mt-4'>Not registered?</h1>
            <button className='bg-black text-white ml-4 p-1 underline rounded-2xl'> Register here</button>
          </div>



        </div>
        <div className='bg-sky-300 h-auto rounded-t-2xl'>


        <div className='bg-blue-400 rounded-4xl border-black p-4 underline'>
          <h2 className='text-center font-bold'>Voting Booth</h2></div>
          <h2 className='ml-6'>Voter ID: 

          </h2>
              <input type=" text-black " placeholder=' id name...'
            className='  my-4 border ml-4 border-gray-200  p-2 w-auto rounded-4xl focus-outline-none focus:ring-2 focus:ring-blue-300 ' />
            <img className='absolute bottom-[-60] right-[-10px] blur-none' src={img4}></img>
          <h2 className='text-center'>     Voting has ended! </h2>
            <h2 className='text-center'> Thank you for participating in the democratic process.</h2>
            <div className='justify-self-center mt-4 mb-2'><h1>Voting has ended!</h1>
            <button className='bg-black p-2 rounded-4xl text-center text-white'>view result</button>

            </div>
            
                </div>
      </div>

    </div>

  )
}

export default App