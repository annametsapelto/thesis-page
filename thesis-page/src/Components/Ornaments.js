import darkOrnament from '../Images/celticdividerdark.png';
import goldOrnament from '../Images/celticdividerlight.png';
import '../Styles/Ornament.css'

const Ornaments = (props) => {

    const ornaments = () => {
      if (props.isLightMode) {
          return <img src={darkOrnament} alt="Celtic divider" />
      } else {
          return <img src={goldOrnament} alt="Golden Celtic divider" />
      }
    }
    return (
        <div className="ornament">
            {ornaments()}
        </div>
        
    )
}
export default Ornaments;