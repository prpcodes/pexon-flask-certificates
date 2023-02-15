export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="mt-4 card bg-neutral text-neutral-content shadow-xl w-full">
            <div className="card-body w-full">{children}</div>
        </div>
    );
}
