
import styles from "../css/confirmDelete.module.css"

export function ConfirmDelete({message, onConfirm, onCancel}){
    return(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <p>{message}</p>
                <div className={styles.actions}>
                    <button onClick={onConfirm} >si, Eliminar</button>
                    <button onClick={onCancel} >Cancelar</button>
                </div>
            </div>
        </div>
    );
}