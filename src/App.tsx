import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Card from './components/Card';
import CertificationsList from './components/CertificationsList';
import ChatBubbleStart from './components/ChatBubbleStart';
import Form from './components/Form';

function App() {
    // daisyUI theme changer
    useEffect(() => {
        themeChange(false);
    }, []);

    const [data, setData] = useState<Certification[]>(Array());

    useEffect(() => {
        setData([
            { id: '1', name: 'AWS Cloud Practitioner' },
            { id: '2', name: 'AWS Developer Associate' },
            { id: '3', name: 'AWS Solutions Architect Associate' },
            { id: '4', name: 'AWS SysOps Administrator Associate' },
        ]);
    }, []);

    return (
        <div className="App h-screen flex flex-col justify-between ali">
            <Navbar />
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-start justify-center w-full md:max-w-md	 p-4">
                    <ChatBubbleStart>
                        <h1 className="text-3xl font-bold">
                            Hello Pexonian <span className="wave">👋</span>
                        </h1>
                    </ChatBubbleStart>
                    <ChatBubbleStart>
                        <p className="text-xl ">Hier kannst du deine Zertifizierungen eintragen und speichern.</p>
                    </ChatBubbleStart>
                    <Form />
                    <CertificationsList data={data} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
