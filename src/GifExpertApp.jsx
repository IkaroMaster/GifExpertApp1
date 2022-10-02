import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
// import { AddCategory } from './components/AddCategory'
// import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {
        //console.log( newCategory )
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory
                onNewCategory={onAddCategory}
            />
            {/* Listado de GIF */}
            {
                categories.map(category => (
                    // GifGrid(category)
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>
    )
}