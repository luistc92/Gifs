import React from 'react';
import './Showroom.css'
import {useState,useEffect} from 'react';


function Showroom({index}) {
    const[gifs,setGifs]= useState([]);
    useEffect(()=>{
        

        fetch('https://api.giphy.com/v1/gifs/trending?api_key=Hq8zZdEe7uzJC1udquy7T1bjtDRXaCYo&limit=10&rating=g')
        .then(res=> res.json())
        .then(responseData => {
            const imagesOld = responseData.data
            const imagesNew= imagesOld.map(img=> {
                let myImg = new Image()
                
                myImg.src = img.images.original.url;
                myImg.height = '200px';
    
                return myImg
            });
    
            console.log(imagesNew);
            setGifs(imagesNew);
            
            
        });
        
    
        }, []);

  
    if (gifs.length <= 0){
        return <div>Loading gifs...</div>
    }
    
    
        
    return (
    <div className= 'Showroom'>
        <div className = 'imageContainer'>
            <img src={gifs[index].src} alt="" />
        </div> 
    </div>
    );


}

export default Showroom