import {useState} from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {

    const [lightMode, setLightMode] = useState(true);

    const setLightMode = () => {
        if(lightMode) {
            lightMode = false;
        } else {
            lightMode = true;
        }
    }
    return (
        <>
           <Header changeMode = {setLightMode} isLightMode = {lightMode}/>
           <Footer isLightMode = {lightMode}/>
        </>
    )
    export default Layout;
}