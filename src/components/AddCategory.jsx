import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue( event.target.value )
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory( inputValue.trim() );
        //setCategories(cat => [  inputValue, ...cat ]);
        setInputValue('');
    }
    return (
        <form action="" onSubmit= { onSubmit }>
            <input type="text" 
            placeholder="Buscar GIF" 
            value= {inputValue}
            onChange= { onInputChange }/>
        </form>
        
    )
}
