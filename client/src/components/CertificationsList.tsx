import Card from './Card';
import { errorToast, successToast } from './Toast';

export default function CertificationsList({ data, setData }: { data: Certification[]; setData: React.Dispatch<React.SetStateAction<Certification[]>> }) {
    function deleteCertification(id: string) {
        fetch(`http://localhost:5000/api/certification/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())

            .then(({ certification: { id, name, created_at } }) => {
                setData((prev) => prev.filter((cert) => cert.id !== id));
                successToast('Zertifizierung erfolgreich gelöscht');
            })
            .catch((err) => {
                console.error(err);
                errorToast('Es ist ein Fehler aufgetreten...');
            });
    }

    return (
        <>
            {Object.keys(data).length > 0 ? (
                <Card>
                    <ul className="list list-inside w-full max-h-96 overflow-auto scrollbar-hide">
                        {data.map(({ id, name }) => {
                            return (
                                <li key={id} className="flex flex-row items-center justify-between w-full p-2">
                                    <span className="text-md">{name}</span>
                                    <button
                                        className="btn btn-sm btn-error"
                                        onClick={() => {
                                            deleteCertification(id);
                                        }}
                                    >
                                        X
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </Card>
            ) : (
                <Card>
                    <p className="text-md text-center">Keine Zertifizierungen vorhanden.</p>
                </Card>
            )}
        </>
    );
}
