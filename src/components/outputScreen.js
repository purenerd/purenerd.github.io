import React from 'react';

import OutputScreenRow from './outputScreenRow';


export default function OutputScreen(props)
{
    return(
        <div className='screen'>
            <OutputScreenRow value={props.question}/>
            <OutputScreenRow value={props.answer}/>
        </div>


    );
}