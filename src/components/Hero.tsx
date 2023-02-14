import { useEffect, useState } from 'react';
import Card from './Card';
import CertificationsList from './CertificationsList';
import ChatBubbleStart from './ChatBubbleStart';
import Form from './Form';
import List from './List';

export default function Hero() {
    // useEffect(() => {
    //     fetch('/members')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setData(data);
    //             console.log(data);
    //         });
    // }, []);

    const [data, setData] = useState<Certification[]>(Object());

    useEffect(() => {
        setData([
            { id: '1', name: 'AWS Cloud Practitioner' },
            { id: '1', name: 'AWS Developer Associate' },
            { id: '1', name: 'AWS Solutions Architect Associate' },
            { id: '1', name: 'AWS SysOps Administrator Associate' },
        ]);
    }, []);

    return (
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
                <CertificationsList {...data} />
            </div>
        </div>
    );
}
