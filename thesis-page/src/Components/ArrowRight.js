import styled from 'styled-components';
import arrowRight from '../Images/arrow-right.png';

const RightButton = styled.button`
    height: 90px;
    width: 60px;
    background-color: ${props => props.isLightMode ? "#EEB414" : "#F6F3E6"}; 
    cursor: pointer;
    min-width: 70px;
    background-image: url(${arrowRight});
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

const ArrowRight = (props) => {
    return (
        <RightButton onClick={props.switchRight}/>
    )
}

export default ArrowRight;