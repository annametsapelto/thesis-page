import styles from '../Styles/Buttons.module.css';

const ArrowRight = (props) => {
    return (
        <button onClick={props.switchRight} className={`${styles.button} ${styles.right} !props.isLightMode ? ${styles.dark}: ${""}`}/>
    )
}

export default ArrowRight;