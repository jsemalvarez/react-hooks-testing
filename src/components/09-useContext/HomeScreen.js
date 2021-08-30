import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    const { user } = useContext( UserContext )

    return (
        <div>
            <h1> HomeScreen </h1>
            <hr />
            <h2> { user.name } </h2>
        </div>
    )
}
