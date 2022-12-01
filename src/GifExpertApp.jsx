import { useState } from "react"
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => { //snippet rafc

    const [categories, setCategories] = useState(['Hasbulla']); // useStateSnippet

    const onAddCategory = (newCategory) => {
        if (categories.find(cat => cat.toLowerCase() === newCategory.toLowerCase())) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={onAddCategory} />


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

