import { useState } from "react";
import loadingImage from "../img/loading.png";
import "../css/getImages.css"

export function GetImage({name, png, secondImage = loadingImage}){
    const [image, setimage] = useState(png || secondImage );

    const handlError = ()=>{
        if(image == png ){
            setimage(png)
        }else{
            setimage(loadingImage)
        }
    }
    return(
        <div className="container-image">
            <img className="clothe-image" src={image} alt={name} onError={handlError}/>
        </div>
    );
}