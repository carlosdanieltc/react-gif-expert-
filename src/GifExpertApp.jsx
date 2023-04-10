import { useState } from "react"
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => { //snippet rafc

    const [categories, setCategories] = useState(['Hasbulla','Charizard']); // useStateSnippet

    const onAddCategory = (newCategory) => {
        if (categories.find(cat => cat.toLowerCase() === newCategory.toLowerCase())) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            {/* TITULO */}
            <h1>GifExpertApp</h1>

            {/* INPUT */}
            <AddCategory onNewCategory={onAddCategory} />

            {/* Listado de Gif */}
            {
                categories.map(category =>
                    (
                        <GifGrid key={category} category={category} />
                    )
                )
            }

        </>
    )
}

