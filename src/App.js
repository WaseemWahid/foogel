import React, { useState } from 'react'

import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { RoutesofRoutes } from './components/Routes'

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    return (
        <div className={darkTheme ? 'dark': ''}>
            <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-100 black min-h-screen">
                <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
                <RoutesofRoutes />
                <Footer />
            </div>
        </div>
    )
}

export default App