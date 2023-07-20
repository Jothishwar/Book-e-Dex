import React,{ useContext, useState } from 'react';


const InputContext=React.createContext()
const UpdateInpContext=React.createContext()

export function useInp(){
    return useContext(InputContext);
}

export function useUpdateInp(){
    return useContext(UpdateInpContext);
}

export function UserInputProvider({children}){
    const [search,setSearch]=useState('')

    function handleChange(e){
        setSearch(e.target.value)
    }
    return (
        <InputContext.Provider value={search}>
            <UpdateInpContext.Provider value={handleChange}>
                {children}
            </UpdateInpContext.Provider>
        </InputContext.Provider>
    )
}