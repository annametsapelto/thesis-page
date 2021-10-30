import '../Styles/Buttons.css';

const ArrowRight = (props) => {
    return (
        <button onClick={props.switchRight} className={"button " + "right " + (!props.isLightMode ? "dark": "")}/>
    )
}

export default ArrowRight;