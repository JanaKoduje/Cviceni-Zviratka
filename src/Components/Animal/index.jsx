import React from 'react';
import './style.css';

const Animal = ({ id, nazev, nazevLatinsky, foto, handleClickAnimal }) => {

    return (
        <>
            <div className="zvire" key={id} onClick={() => handleClickAnimal(id)}>
                <div className="zvire__foto">
                    <img src={foto} alt={nazev} />
                </div>
                <div className="zvire__popis">
                    <div className="zvire__nazev">{nazev}</div>
                    <div className="zvire__latinsky">{nazevLatinsky}</div>
                </div>
            </div>
        </>
    );
}

export default Animal;