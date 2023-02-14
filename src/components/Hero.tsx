import Card from './Card';
import ChatBubbleStart from './ChatBubbleStart';
import List from './List';

export default function Hero({ data = ['AWS Cloud Practitioner'] }: { data: string[] }) {
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
                <Card>
                    <form action="/members" method="POST" className="flex flex-col">
                        <input type="text" placeholder="AWS Cloud Practitioner" className="input input-bordered input-primary w-full" />
                        <button type="submit" className="btn btn-primary mt-4 w-max">
                            Speichern
                        </button>
                    </form>
                </Card>
                {Object.keys(data).length > 0 && (
                    <Card>
                        <List>
                            {data.map((item: string, index: number) => {
                                // display json data
                                return (
                                    <li key={index} className="flex flex-row items-center justify-between w-full p-2">
                                        <span className="text-md">{item}</span>
                                        <button className="btn btn-sm btn-error">X</button>
                                    </li>
                                );
                            })}
                        </List>
                    </Card>
                )}
            </div>
        </div>
    );
}
