import styles from '../Styles/Buttons.module.css';

const ArrowLeft = (props) => {
    const isDark = !props.isLightMode ? styles.dark: "";
    return (
        <button onClick={props.switchLeft} className={`${styles.button}  ${styles.left}  ${isDark}`}/>
    )
}

export default ArrowLeft;