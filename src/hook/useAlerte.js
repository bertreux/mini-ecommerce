import { useState } from "react";

export const useAlerte = ( shemaValidation) => {
    const [message, setMessage] = useState({});

    const getError = (data) => {
        const {error} = shemaValidation.validate(data, {abortEarly: false});
        if(error) {
            const messages = error.details.map(m => m.message);

            setMessage({type: 'danger', liste: messages});
            return true;
        }
        return false;
    }

    return [message,setMessage,getError];
}