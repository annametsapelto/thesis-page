import styles from '../Styles/Buttons.module.css';

const ArrowLeft = (props) => {
    return (
        <button onClick={props.switchLeft} className={`${styles.button}  ${styles.left}  !props.isLightMode ? ${styles.dark}: ${""}`}/>
    )
}

export default ArrowLeft;