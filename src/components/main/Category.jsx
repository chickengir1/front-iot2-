import React from "react";
import CategoryList from "./CategoryList";

function Category() {
    const images = [
        "/public/assets/shoes.webp",
        "/public/assets/shoes.webp",
        "/public/assets/shoes.webp",
        "/public/assets/shoes.webp",
        "/public/assets/shoes.webp",
        "/public/assets/shoes.webp",
        "/public/assets/shoes.webp",
    ];

    const categories = [
        "카테고리1",
        "카테고리2",
        "카테고리3",
        "카테고리4",
        "카테고리5",
        "카테고리6",
        "카테고리7",
    ];

    return (
        <div>
            <CategoryList images={images} categories={categories} />
        </div>
    );
}

export default Category;
