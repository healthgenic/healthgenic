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
    </div>
  
  )
}

export default OnlineConsultation;