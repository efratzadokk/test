export const user = () => {
    return(
        {
            userName:window.location.pathname.split('/')[2],
            userId:''
        }
    );
}