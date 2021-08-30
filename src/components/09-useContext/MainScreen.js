import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainScreen = () => {

    const [user, setUser] = useState({

    })

    /**
     *  UserContext esta pendiente de los cambios de user y avisa a sus componentes hijos de los mismos
     *  y se redibuja cada una de las partes afectdas 
     */

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <AppRouter />
        </UserContext.Provider>
    )
}
