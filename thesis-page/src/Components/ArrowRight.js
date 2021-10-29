import '../Styles/Buttons.css';

const ArrowRight = (props) => {
    return (
        <button onClick={props.switchRight} className={"right " + "button"}/>
    )
}

export default ArrowRight;