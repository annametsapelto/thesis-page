import darkOrnament from '../Images/celticdividerdark.png';
import goldOrnament from '../Images/celticdividerlight.png';
import styled from 'styled-components';

const Ornament = styled.div`
    width: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    padding-bottom: 20px;
`
const OrnamentImg = styled.img`
    width: 200px;
`

const Ornaments = (props) => {

    const ornaments = () => {
      if (props.isLightMode) {
          return <OrnamentImg src={darkOrnament} alt="Celtic divider" />
      } else {
          return <OrnamentImg src={goldOrnament} alt="Golden Celtic divider" />
      }
    }
    return (
        <Ornament>
            {ornaments()}
        </Ornament>
    )
}
export default Ornaments;