import rossImg from './assets/ross2.png'
import chandlerImg from './assets/chandler.jpg';
import joeyImg from './assets/joey4.png';
import monicaImg from './assets/monica2.png';
import rachelImg from  './assets/rachel2.png';
import phoebeImg from './assets/phoebe.jpg';
import janiceImg from './assets/janice3.webp';
import mikeImg from './assets/mike3.jpeg';
import richardImg from './assets/richard2.jpg';
import guntherImg from './assets/gunther2.jpg'
import estelleImg from './assets/estelle2.png';

/* eslint-disable react/prop-types */ 

export default function Card({name}){
    function getImage(name){
        switch (name) {
            case "Ross":
                return rossImg;
            case "Chandler":
                return chandlerImg;
            case "Joey":
                return joeyImg;
            case "Monica":
                return monicaImg;
            case "Rachel":
                return rachelImg;
            case "Phoebe":
                return phoebeImg;
            case "Janice":
                return janiceImg;
            case "Mike":
                return mikeImg;
            case "Richard":
                return richardImg;
            case "Gunther":
                return guntherImg;
            case "Estelle":
                return estelleImg;
            default:
                return janiceImg;
        }
    }

    return(
        <div className="card">
            <img src={getImage(name)} alt="" />
            <div className="name">{name}</div>
        </div>
    )
}