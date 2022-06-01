import {useState} from 'react';
import Navigation from './Navigation';
import Showroom from './Showroom';



function Gifs(){
    
    const [index,setIndex] = useState(0);
    


    return (
    <div>
        <Showroom index= {index}></Showroom>
        <Navigation index = {index} setIndex = {setIndex}></Navigation>
    </div>
    )
}

export default Gifs