import React from 'react'
import './Main.css'
import {assets} from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className='nav'>
            <p>ChatBot</p>
            <img src={assets.user_icon}/>
        </div>

        <div>
            <div className='main-container'>
                <div className='greet'>
                    <img src={assets.logo} alt=''/>
                    <p><span>Hello, User.</span></p>
                    <p>What can I asist you with?</p>
                    <p className='greet-bottom'>Choose a prompt below or write your own to start chatting</p>
                </div>

                <div className='cards'>
                    <div className='card'>
                        <p>Suggest a beautiful place to visit?</p>
                        <img src={assets.compass_icon} alt=''/>
                    </div>

                    <div className='card'>
                        <p>Brainstorm creative ideas.</p>
                        <img src={assets.bulb_icon} alt=''/>
                    </div>

                    <div className='card'>
                        <p>Team bonding activities for our work retreat?</p>
                        <img src={assets.message_icon} alt=''/>
                    </div>

                    <div className='card'>
                        <p>Improve the following code's readability</p>
                        <img src={assets.code_icon} alt=''/>
                    </div>

                </div>

                <div className='main-bottom'>
                    <div className='search-box'>
                        <input type='text' placeholder='Enter prompt'/>
                        <div>
                            <img src={assets.gallery_icon} alt=''/>
                            <img src={assets.mic_icon} alt=''/>
                            <img src={assets.send_icon} alt=''/>
                        </div>
                    </div>

                    <p className='bottom-info'>
                        Inacccurate information may be displayed. Please double check responses.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main