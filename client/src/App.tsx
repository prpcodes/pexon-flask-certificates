import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Card from './components/Card';
import CertificationsList from './components/CertificationsList';
import ChatBubbleStart from './components/ChatBubbleStart';
import Form from './components/Form';
import useEffectOnce from './hooks/useEffectOnce';
import toast, { Toaster } from 'react-hot-toast';
import { errorToast, successToast } from './components/Toast';

function App() {
    // daisyUI theme changer
    useEffect(() => {
        themeChange(false);
    }, []);

    const [data, setData] = useState<Certification[]>(Array());

    useEffectOnce(() => {
        fetch('http://localhost:5000/api/certifications')
            .then((res) => res.json())
            .then((data) => {
                setData(data.certifications);
            })
            .catch((err) => {
                console.error(err);
                errorToast('Es ist ein Fehler aufgetreten.');
            });
    });

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
                    <Form setData={setData} />
                    <CertificationsList data={data} setData={setData} />
                </div>
            </div>
            <Toaster position="bottom-right" reverseOrder={false} />
            <Footer />
        </div>
    );
}

export default App;
