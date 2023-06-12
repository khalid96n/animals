import './app.css';
import { useState } from "react";
import AnimalShow from "./AnimalShow";


function getrandomAnimal(){
    const animals = ['bird','cat','cow','dog','gator','horse'];

    return animals[Math.floor(Math.random() * animals.length)]
}


function App(){
    
    const[animals,setAnimals] = useState([]);

    const handleClick = ()=>{
    
        setAnimals([...animals,getrandomAnimal()]);
    };

    const renderAnimals = animals.map((animal,index)=>{
        return <AnimalShow type={animal} key={index}/>
    });
    
    return(
        <div className='app'>
            <button onClick={handleClick}>Add Animal</button>
            <div className='animal-list'>{renderAnimals}</div>
        </div>
    );
}

export default App;