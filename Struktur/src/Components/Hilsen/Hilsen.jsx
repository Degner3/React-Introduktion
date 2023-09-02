import style from "./Hilsen.module.scss"



export const ShowName = (props) => {

    return (
        <div className={style.showNameStyle}>
            <h2>{props.name}</h2>
        </div>
        
    )}