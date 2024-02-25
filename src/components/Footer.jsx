import style from "./footer.module.css"

export default function Footer({completedItems, totalItems}){
    return <div className={style.footer}>
        <span className={style.item}>Completed Tasks: {completedItems}</span>
        <span className={style.item}>Total Tasks: {totalItems}</span>
    </div>
}