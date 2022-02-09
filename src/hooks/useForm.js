import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset= () => {
        setValues(initialState);
    };

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    };
    

    return [values, handleInputChange, reset ];
}

// este custom hook de use form, recibe un objeto, de cada uno de los campos del formulario.