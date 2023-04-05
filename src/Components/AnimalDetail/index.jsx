import React from 'react';
import './style.css';

const AnimalDetail = ({ details }) => {
    const { nazev, nazevLatinsky, foto, popis, domovina, biotop, potrava, velikost } = details;

    return (
        <>
            <div className="detail">
                <div className="detail__obsah">

                    <div className="detail__hlavicka">
                        <img className="detail__foto" src={foto} alt={nazevLatinsky} />
                        <div className="detail__titulek">
                            <h2 className="detail__nazev"><span>{nazev}</span></h2>
                            <div className="detail__latinsky"><span>{nazevLatinsky}</span></div>
                        </div>
                    </div>

                    <div className="detail__info">
                        <p className="detail__popis">
                            {popis}
                        </p>

                        <div className="detail__udaje">
                            <div className="detail__udaj">
                                <h3>Domovina</h3>
                                <p>{domovina}</p>
                            </div>
                            <div className="detail__udaj">
                                <h3>Biotop</h3>
                                <p>{biotop}</p>
                            </div>
                            <div className="detail__udaj">
                                <h3>Potrava</h3>
                                <p>{potrava}</p>
                            </div>
                            <div className="detail__udaj">
                                <h3>Velikost</h3>
                                <p>{velikost}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default AnimalDetail;