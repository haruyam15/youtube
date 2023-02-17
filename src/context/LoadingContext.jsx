import { createContext, useState, useContext } from "react";

const LoadingContext = createContext();

export default function LoadingProvider({children}){
    const [isLoading, setIsLoading] = useState(false);
    const data = {
        isLoading,
        setIsLoading
    }
    return(
        <LoadingContext.Provider value={data}>{children}</LoadingContext.Provider>
    )

}
export const useLoading = () => useContext(LoadingContext);
