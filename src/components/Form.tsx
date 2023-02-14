import Card from './Card';
import { errorToast, successToast } from './Toast';

export default function Form({ setData }: { setData: React.Dispatch<React.SetStateAction<Certification[]>> }) {
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // get the form data out of event
        const target = e.target as typeof e.target & {
            0: { value: string };
        };
        const data = {
            name: target[0].value,
        };
        fetch('http://localhost:5000/api/certifications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(({ certification: { id, name, created_at } }) => {
                setData((prev) => [{ id, name, createdAt: created_at }, ...prev]);
                successToast('Zertifizierung erfolgreich gespeichert');
            })
            .catch((err) => {
                console.error(err);
                errorToast('Es ist ein Fehler aufgetreten...');
            });
    }
    return (
        <Card>
            <form action="/members" method="POST" className="flex flex-col" onSubmit={(e) => onSubmit(e)}>
                <input type="text" placeholder="AWS Cloud Practitioner" className="input input-bordered input-primary w-full" />
                <button type="submit" className="btn btn-primary mt-4 w-max">
                    Speichern
                </button>
            </form>
        </Card>
    );
}
