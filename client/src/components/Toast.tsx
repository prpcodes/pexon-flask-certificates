import toast from 'react-hot-toast';

export function successToast(message: string) {
    return toast.custom((t) => (
        <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-sm w-fit flex alert alert-success`}>
            <div className="flex-1 w-full m-auto">✅ {message}</div>
        </div>
    ));
}

export function errorToast(message: string) {
    return toast.custom((t) => (
        <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-sm w-fit flex alert alert-error`}>
            <div className="flex-1 w-full m-auto">⛔ {message}</div>
        </div>
    ));
}

export function infoToast(message: string) {
    return toast.custom((t) => (
        <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-sm w-fit flex alert alert-info`}>
            <div className="flex-1 w-0 m-auto">ℹ️ {message}</div>
        </div>
    ));
}
