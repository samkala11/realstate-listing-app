export const convertTime = timeStamp => {

    const today = new Date();
    const date =  new Date(timeStamp) ;
    // let interval = Math.floor(seconds / 31536000);

    const dateYear = date.getFullYear();
    if (dateYear - today.getFullYear > 1 ) {
        return `${dateYear - today.getFullYear} years`
    }

    // interval = Math.floor(seconds / 2592000);
    // if (interval > 1 ) {
    //     return `${interval} months`
    // }

    // interval = Math.floor(seconds / 86400 );
    // if (interval > 1 ) {
    //     return `${interval} days`
    // }

    // interval = Math.floor(seconds / 3600 );
    // if (interval > 1 ) {
    //     return `${interval} hours`
    // }

    // interval = Math.floor(seconds / 60  );
    // if (interval > 1 ) {
    //     return `${interval} minutes`
    // }

    // return `${Math.floor(seconds)} seconds`;
}