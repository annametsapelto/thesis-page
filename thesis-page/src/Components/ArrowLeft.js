import '../Styles/Buttons.css';

const ArrowLeft = (props) => {
    return (
        <button onClick={props.switchLeft} className={"left " + "button"}/>
    )
}

export default ArrowLeft;