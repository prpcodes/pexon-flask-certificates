import Card from './Card';

export default function CertificationsList(data: Certification[]) {
    return (
        <>
            {Object.keys(data).length > 0 && (
                <Card>
                    <ul className="list list-inside w-full">
                        {data.map(({ id, name }) => {
                            // display json data
                            return (
                                <li key={id} className="flex flex-row items-center justify-between w-full p-2">
                                    <span className="text-md">{name}</span>
                                    <button className="btn btn-sm btn-error">X</button>
                                </li>
                            );
                        })}
                    </ul>
                    ;
                </Card>
            )}
        </>
    );
}
