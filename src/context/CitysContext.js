// import React, { useContext, useState, useEffect, createContext } from "react";
// import cityData from "../data/CityData"

// const CitysContext = createContext();


// export function CitysContextProvider({ children }) {
//     const [activeCity, setActiveCity] = useState('Adana')

//     return (
//         <CitysContext.Provider
//             value={{
//                 wheather,
//                 loading
//             }}
//         >
//             {children}  
//         </CitysContext.Provider>
//     );
// }

// export function useAPI() {
//     const context = useContext(CitysContext);
//     if (context === undefined) {
//         throw new Error("Context must be used within a Provider");
//     }
//     return context;
// }
