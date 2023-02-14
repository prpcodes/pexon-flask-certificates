import Card from './Card';

export default function List({ children }: { children: React.ReactNode }) {
    return <ul className="list list-inside w-full">{children}</ul>;
}
