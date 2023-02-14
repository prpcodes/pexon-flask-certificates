import Card from './Card';

export default function Form() {
    return (
        <Card>
            <form action="/members" method="POST" className="flex flex-col">
                <input type="text" placeholder="AWS Cloud Practitioner" className="input input-bordered input-primary w-full" />
                <button type="submit" className="btn btn-primary mt-4 w-max">
                    Speichern
                </button>
            </form>
        </Card>
    );
}
