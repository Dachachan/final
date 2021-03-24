import React from 'react'
import Profile from './Profile';
const info = (props) => {
    return (
        <>
            <Profile id={props.match.params.id} />
        </>
    )
}

export default info
