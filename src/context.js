import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const ContextAPI = ({ children }) => {
const url = "https://api.chucknorris.io/jokes/categories";
const [random, setRandom] = useState("random");
const [category, setCategory] = useState([]);

const fetchNorris = async (url) => {
    try {
    const response = await fetch(url);
    const data = await response.json();
    setCategory(data)
    } catch (error) {}
};
useEffect(() => {
    fetchNorris(url)
}, [])

return (
    <AppContext.Provider value={{ random, setRandom, category }}>
    {children}
    </AppContext.Provider>
);
};

export const useGlobalContext = () => {
return useContext(AppContext);
};

export { AppContext, ContextAPI };  