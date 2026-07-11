import toast from 'react-hot-toast';


export const notifySuccess = (text: any) => {
    toast.success(`${text}`, {
        duration: 4000,
        position: 'top-center',

        // Styling
        style: {},
        className: 'lg:w-[20vw] w-[90vw] border-2 mt-5',

        // Change colors of success/error/loading icon
        iconTheme: {
            primary: '#008000',
            secondary: '#fff',
        },

        // Aria
        ariaProps: {
            role: 'status',
            'aria-live': 'polite',
        },

        // Additional Configuration
        removeDelay: 2000,

        // Toaster instance
        toasterId: 'default',
    });
};





export const notifyError = () => {

}

export const notifyPending = ({promise}:any) => {
    toast.promise(promise, {
        loading: 'Loading',
        success: 'Got the data',
        error: 'Error when fetching',
    });
}

