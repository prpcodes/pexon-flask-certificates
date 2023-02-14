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

    const [count, setCount] = useState(0);
    const [data, setData] = useState(Object());

    // useEffect(() => {
    //     fetch('/members')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setData(data);
    //             console.log(data);
    //         });
    // }, []);

    useEffect(() => {
        setData(['AWS Cloud Practitioner', 'AWS Developer Associate', 'AWS Solutions Architect Associate', 'AWS SysOps Administrator Associate']);
    }, []);

    return (
        <div className="App h-screen flex flex-col justify-between ali">
            <Navbar />
            <Hero data={data} />
            <Footer />
        </div>
    );
}

export default App;
