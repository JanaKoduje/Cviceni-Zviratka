import React from 'react';
import Animal from '../Animal';

const AnimalList = ({ animalData, onChangeDetail }) => {

    return (
        <>
            <div className="zvirata">
                {animalData.map((animal) =>
                    <Animal
                        key={animal.id}
                        id={animal.id}
                        nazev={animal.nazev}
                        nazevLatinsky={animal.nazevLatinsky}
                        foto={animal.foto}
                        handleClickAnimal={onChangeDetail} />)}
            </div>
        </>
    );
}

export default AnimalList;