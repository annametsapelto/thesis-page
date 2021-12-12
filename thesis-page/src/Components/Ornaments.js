/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import darkOrnament from '../Images/celticdividerdark.png';
import goldOrnament from '../Images/celticdividerlight.png';

const Ornaments = ({isLightMode}) => {
    const orn = css`
        width: 200px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding-top: 20px;
        padding-bottom: 20px;

    ` 

    const ornaments = () => {
        const ornImg = css`
        width: 200px;
    `
      if (isLightMode) {
          return <img src={darkOrnament} alt="Celtic divider" css={ornImg}/>
      } else {
          return <img src={goldOrnament} alt="Golden Celtic divider" css={ornImg}/>
      }
    }
    return (
        <div css={orn}>
            {ornaments() }
        </div>
    )
}
export default Ornaments;