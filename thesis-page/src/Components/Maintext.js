/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import Ornaments from "./Ornaments";

const Maintext = ({isLightMode}) => {
    const mainTitle = css`
        text-align: center;
    `
    const mainCss = ({isLightMode}) => css`
        width: 50%;
        margin-left: 20px;
        margin-right: 20%;
        padding: 10px;
        ${isLightMode === false && `
            color: #F6F3E6;
        `}
        @media only screen and (max-width: 900px) {
            width: 95%;
            margin-left: 10px;
            margin-right: 20px;
        }
    `        

  return (
      <div css={mainCss({isLightMode})}>
          <h1 css={mainTitle}>Historical Reenactment</h1>
          <p>The goal of historical reenactment is to feel like living in some past era. Quite often we bypass some of the more gruesome 
              details like pestilence and poor hygiene even though many of us study also those less tractable facts. Historical 
              reenactment can be seen combining scientific research to a live role playing game.</p>
          <p>My journey with historical reenactment started in September 2007 when I visited the local reenactment group’s 
              Renaissance dance practice. The dances were fun and people very welcoming so I was totally hooked. Very soon I 
              started making my first garb with their help and participated my first reenactment event in January on my 21st birthday.</p>
          <p>During my years in reenactment I have tried many different aspects of the hobby. I make nearly all my clothes because very few 
              sell good quality historical clothes. So I’ve tried several hand crafting techniques. I love the dances. 
              I enjoy singing even though I have slight dislike to religion in some songs. Unfortunately leaving Christianity out of the Middle 
              Ages totally is not easy. I’ve tried calligraphy and illumination a bit and would like to make more or them. I’ve tried archery. 
              I’ve done SCA heavy combat and own a suit of armor for it. I’ve arranged a couple of events and cooked medieval feasts for participants. 
              I’ve been dressed in fancy garb in fairs and castles. I’ve also worked on the association side as the guide to new members and 
              currently as the web master.</p>
            <Ornaments isLightMode={isLightMode} />
      </div>
  )
}

export default Maintext;