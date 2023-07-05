import React, { useState, createContext } from 'react';

const AppContext = createContext();

const AppProvider =(props)=>{
    const [ user, setUser] = useState([]);
    return(
        <AppContext.Provider value={{ user, setUser}}>
             {props.children}
        </AppContext.Provider>
       
    )
};

export {AppProvider, AppContext};