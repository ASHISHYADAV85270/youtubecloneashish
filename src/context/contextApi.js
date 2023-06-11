import React, { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from '../utils/api';


export const Context = createContext();// Y BAHAR USE HOYA HAI RETURN KAI
export const AppContext = (props) => {








    const [loading, setLoading] = useState(false);
    const [searchResults, setsearchResults] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);


    // jese hi selectedCategories mai change hoga bese hi useeffect call hojaiga 
    useEffect(() => {
        fetchSelectedCategoryData(selectedCategories);
    }, [selectedCategories]);



    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`)
            .then((res) => {
                console.log(res.data.contents);
                setsearchResults(res.data.contents);
                setLoading(false);
            });
    }

    return (
        // it send initial values to the page .... if selectedCategory is changed then fetchSelectedCategoryData is envoked
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                setsearchResults,
                selectedCategories,
                setSelectedCategories,
                mobileMenu,
                setMobileMenu,
            }}
        >
            {props.children}
        </Context.Provider>
    );
}