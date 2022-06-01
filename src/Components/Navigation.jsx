import './Navigation.css'

//import axios from 'axios';
//import {encode} from 'base-64';

function Navigation({index,setIndex}) {


    function handle(e){
        let newIndex = index
        if (e.target.innerHTML==='&lt;'& index>0 & index<=9){
           newIndex = index-1
           if(newIndex===0){
            e.target.disabled=true;
            };
           console.log(newIndex);
           document.getElementById('more').disabled = false
           setIndex(newIndex);
        } else if(e.target.innerHTML==='&gt;'& index>=0 & index<9) {
            newIndex = index+1
            if(newIndex===9){
                e.target.disabled=true;
            };
            document.getElementById('less').disabled = false
            console.log(newIndex);
            setIndex(newIndex);
        }
            
            
    }

    
    
        
    return (
    <div className= 'Navigation'>
        <button id = 'less' onClick={handle}>{'<'}</button>
        <button id = 'more' onClick={handle}>{'>'}</button>
    </div>
    );


    


}

export default Navigation