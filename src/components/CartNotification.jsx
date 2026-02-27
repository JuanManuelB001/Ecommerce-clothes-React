
import { useEffect } from "react";
import { useCartStore } from "./useCartStore";
import "../css/CartNotification.css"


export function CartNotification(){
    const notification = useCartStore((state)=> state.notification);
    const clearNotification = useCartStore((state) => state.clearNotification);

    useEffect(()=>{
        if(notification){
            const timer = setTimeout(()=>{
                clearNotification()
            }, 2000)
            return () => clearNotification(timer)
        }
    }, [notification, clearNotification]);

    if(!notification) return null;

    return(
        <div className="cart-notification" >
            {notification}
        </div>
    );
}