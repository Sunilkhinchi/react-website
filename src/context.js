// create a context (warehouse)
// provider 
// consumer

import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import homeImage from './assets/images/hero.svg';
import aboutImage from "./assets/images/about1.svg";




const AppContext =  React.createContext();
//const API = "https://thapareactapi.up.railway.app";
const API = "https://jsonplaceholder.typicode.com/photos";

// const AppProvider = ({children}) => {
//     return <AppContext.Provider value={{fname:"sunil khinchi",age : 26}}>
//         {children}
//     </AppContext.Provider>;
// };

const intialState = { 
                     name: "",
                     image : "",
                    services: [],
                    };


const AppProvider = ({children}) => {

    const [ state, dispatch] = useReducer(reducer , intialState);
    const updateHomePage = () => {

        return dispatch({
             type : 'HOME_UPDATE',
             payload: {
                name: 'home page',
                image: homeImage,
             }   
            });
    }
    
    const updateAboutPage = () => {
    
        return dispatch({
            type : 'ABOUT_UPDATE',
             payload: {
                name: 'About page',
                image: aboutImage,
             }   
            });
    }
   //  to get the api data

   const getServices = async (url) => {
        try{
        const res = await fetch(url);
        const data = await res.json();
        dispatch({type: "GET_SERVICES", payload: data});

        }catch(error){
            console.log(error);
        }
   };

   // to call the api
    useEffect(()=> {
        getServices(API);
    },[]);
     
    return <AppContext.Provider value={{...state , updateHomePage, updateAboutPage}}>{children}</AppContext.Provider>;
};

// create global use 
 
const useGlobalContext = () => {
    return  useContext(AppContext);
};

export {AppContext , AppProvider , useGlobalContext};