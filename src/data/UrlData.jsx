import { useEffect } from "react";

export function UrlData({path}){
    useEffect(()=>{
         const fetchData = async()=>{
            try{
            const response = fetch(`https://devsapihub.com/api-ecommerce/`)
            .then((data)=>{
                data.json()
                console.log(data)
            }).catch((error)=> console.log(error))
            
        }catch(error){
            console.log(`Error: ${error}`)
        }
         }
        // LLAMAR A LA FUNCION
        fetchData();
    }, [])
    return(
        <>
        consultando API...
    </>
    );
}