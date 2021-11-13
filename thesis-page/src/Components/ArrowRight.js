import styles from '../Styles/Buttons.module.css';

const ArrowRight = (props) => {
    const isDark = !props.isLightMode ? styles.dark: "";
    return (
        <button onClick={props.switchRight} className={`${styles.button} ${styles.right} ${isDark}`}/>
    )
}

export default ArrowRight;