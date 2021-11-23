import styled from 'styled-components';
import arrowLeft from '../Images/arrow-left.png';

const LeftButton = styled.button`
    height: 90px;
    width: 60px;
    background-color: ${props => props.isLightMode ? "#EEB414" : "#F6F3E6"}; 
    cursor: pointer;
    min-width: 70px;
    background-image: url(${arrowLeft});
    background-repeat: no-repeat;
    background-size: 90%;
    margin-right: 2px;
    &:hover {
        background-color: ${props => props.isLightMode ? "#F6F3E6" : "#EEB414"}
    }
@media only screen and (max-width: 1200px) {
        width: 40px;
        height: 60px;
        min-width: 40px;
    }
`

const ArrowLeft = (props) => {
    return (
        <LeftButton onClick={props.switchLeft} isLightMode = {props.isLightMode}>        
        </LeftButton>
    )
}

export default ArrowLeft;