export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-24 ">
            <p className="text-sm">
                Created in 2023 by
                <a href="https://github.com/prpcodes" target="_blank" rel="noreferrer" className="text-blue-500">
                    {' '}
                    PRP
                </a>{' '}
                for
                <a href="https://pexon-consulting.de" target="_blank" rel="noreferrer" className="text-blue-500">
                    {' '}
                    Pexon Consulting
                </a>
            </p>
        </div>
    );
}
