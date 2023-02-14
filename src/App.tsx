import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';
import Footer from './components/Footer';
import Hero from './components/Hero';
import List from './components/List';
import Navbar from './components/Navbar';

function App() {
    // daisyUI theme changer
    useEffect(() => {
        themeChange(false);
    }, []);

    return (
        <div className="App h-screen flex flex-col justify-between ali">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
}

export default App;
