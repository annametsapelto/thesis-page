import Ornaments from './Ornaments';
import styled from 'styled-components';

const Second = styled.div`
    margin-top: 30px;
    width: 30%;
    margin-right: 30px;
    color: #F6F3E6;
    padding: 20px;
    background-color: ${props => props.isLightMode ? "#C21616" : "#072B25"};
    @media only screen and (max-width: 900px){
        width: 100%;
        margin-bottom: 50px;
        padding-right: 30px;
    }
`
const SecondH3 = styled.h3`
    text-align: center;
`
const SecondH4 = styled.h4`
     text-align: center;
`

const P = styled.p`
    padding-bottom: 30px;
`

const SecondText = (props) => {
    return (
        <Second isLightMode = {props.isLightMode}>
            <SecondH3>My Reenactment Eras</SecondH3>
            <Ornaments isLightMode={props.isLightMode}/>
            <SecondH4>The Viking Age (years 700-1100)</SecondH4>
            <p>My latest period is the Viking age. Lots of misconceptions about Viking clothing and life are moving around because of entertainment industry and shows like The Vikings which are rather far from real history. So I’ve been reading about grave finds and interpretations of the clothes they wore. The Viking age was so long ago that most clothes are just fragments and definite truths are hard to find but I try to stick to the best evidence.</p>
            <SecondH4>The Middle Ages (years 1100-1400)</SecondH4>
            <p>This is the period I started reenacting and for which I made my first garb. There is more archeological, visual and written evidence of the garb and other areas of life than from the Viking age which is one of the reasons I didn’t make any Viking garb earlier. The Middle Ages is also the era that is used as a model for lots of fantasy fiction that I’ve loved since childhood and what drew me to do reenactment. I’ve had several different garbs from this period and even got married in one.</p>
            <SecondH4>The Renaissance (years 1400-1600)</SecondH4>
            <p>The dances in our association date from the Renaissance period Italy, France and England and I love the dances, especially the Italian ones. That is why I chose to have an Italian late 15th century name Dianora del Bianco as my alias in most of my reenacting. The garb is also fabulous though somewhat harder to make than garb from earlier periods. The art and architecture also inspire me in this period.</p>
            <SecondH4>Rococo (18th Century)</SecondH4>
            <p>I’ve participated in a couple of balls in this period but still don’t have a full set of garb. Even though clothes in this period are exquisite, they basically require the use of stays made to fit and I haven’t had the courage to start such a time-consuming project in my childbearing years when my waist doesn’t have a set size. However, I do have pieces of clothing and some fabric ready waiting for the time when I’ll make that garb.</p>
        </Second>
    )
}

export default SecondText;