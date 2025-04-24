import myphoto from'../assets/Myphoto.jpg'
import image_1 from '../assets/img1.jpg'
import Card from "./Card";    
import imgreact from "../assets/react.svg"

const  Food = () =>
    {

        return(
           <>
           <Card name = "Hommes" /> 
           <Card name = "Fath " photo={image_1} />
           <Card name = "Sponjbob" photo={imgreact} />
           <Card name = "Ahmed Redouane"/>
           </>
        )
    } 

    export default Food