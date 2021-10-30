import '../Styles/Buttons.css';

const ArrowLeft = (props) => {
    return (
        <button onClick={props.switchLeft} className={"button " + "left " + (!props.isLightMode ? "dark": "")}/>
    )
}

export default ArrowLeft;