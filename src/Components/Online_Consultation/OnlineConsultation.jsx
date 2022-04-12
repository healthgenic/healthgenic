import React from 'react'
import Notification from './Notification'
import Options from './Options'
import VideoPlayer from './VideoPlayer'
import { ContextProvider } from '../../SocketContext'

const OnlineConsultation = () => {
  return (
    <div>
    
  <h1 className='text-center'>Online Video Consultation </h1>
    <ContextProvider>
      <VideoPlayer/>   
          <Options>
              <Notification/>
          </Options>
      </ContextProvider>
      <button className='btn-success btn-sm' ><a href="http://localhost:3000/home" className='text-light'>Back To Home</a></button>
    </div>
  
  )
}

export default OnlineConsultation;