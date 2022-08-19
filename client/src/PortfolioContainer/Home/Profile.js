import React from 'react';
import Typical from 'react-typical'

export default function Profile (){
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <a href='https://www.facebook.com/lexosaur'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.instagram.com/luv.galore_/'>
                            <i className='fa fa-instagram-square'></i>
                        </a>
                        <a href='https://www.youtube.com/channel/UC7wp_koZBlBB1CBvjA-PgDw'>
                            <i className='fa fa-youtube-square'></i>
                        </a>
                        <a href='https://twitter.com/lexosaur_c'>
                            <i className='fa fa-twitter-square'></i>
                        </a>
                    </div>
                 <div className='profile-details-name'>
                    <span className='primary-text'>
                        {""}
                        Hello, I'm <span className='nighlighted text'>Alexis</span>
                    </span>
                 </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {""}
                        <h1>
                        {""}
                        <Typical
                        loop={Infinity}
                        steps={[
                            "Enthusiastic Dev 👩🏻‍💻 ",
                            1000,
                            "Front End Developer 🖌",
                            1000,
                            "Learning React 📍",
                            1000,
                        ]}
                        />
                        </h1>
                        <span className='profile-role-tagline'>
                            Current student/Dev in progress
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {''}
                        Hire me {''}
                    </button>
                    <a href='https://www.linkedin.com/in/alexis-garc%C3%ADa-delgado-b86a79216/'>
                        <button className='btn highlighted-btn'>Go to LinkedIn</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}