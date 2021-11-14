import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return ( 
        <div className='storyReel'>
            <Story 
                image='https://upload.wikimedia.org/wikipedia/commons/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg'
                profileImg='https://robohash.org/QWM.png?set=set2'
                title='koko'
                />
            <Story 
                image='https://upload.wikimedia.org/wikipedia/commons/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg'
                profileImg='https://robohash.org/QWM.png?set=set2'
                title='koko'
                />
            <Story 
                image='https://upload.wikimedia.org/wikipedia/commons/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg'
                profileImg='https://robohash.org/QWM.png?set=set2'
                title='koko'
                />
            <Story 
                image='https://upload.wikimedia.org/wikipedia/commons/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg'
                profileImg='https://robohash.org/QWM.png?set=set2'
                title='koko'
                />
            <Story 
                image='https://upload.wikimedia.org/wikipedia/commons/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg'
                profileImg='https://robohash.org/QWM.png?set=set2'
                title='koko'
                />
        </div>
    );
}

export default StoryReel;