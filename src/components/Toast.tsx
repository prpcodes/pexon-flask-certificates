import toast from 'react-hot-toast';

export function successToast(message: string) {
    return toast.custom((t) => (
        <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-xs w-full flex  alert alert-success`}>
            <div className="flex-1 w-0 m-auto">{message}</div>
        </div>
    ));
}

export function errorToast(message: string) {
    return toast.custom((t) => (
        <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-xs w-full flex alert alert-error`}>
            <div className="flex-1 w-0 m-auto">{message}</div>
        </div>
    ));
}

export function infoToast(message: string) {
    return toast.custom((t) => (
        <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-xs w-full flex alert alert-info`}>
            <div className="flex-1 w-0 m-auto">{message}</div>
        </div>
    ));
}
