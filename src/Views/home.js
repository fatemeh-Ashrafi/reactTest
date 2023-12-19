import React from 'react'
import useUser from '../Hooks/useUser';

function Home() {
    const { state: { user }, update} = useUser();
    return (
        <div>
            <h1>id:{user.id}</h1>
            <h1>name:{user.name}</h1>
            <button onClick={update}>uPDATE STATE</button>
        </div>
    )
}

export default Home;