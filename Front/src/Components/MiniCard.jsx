import React, { PureComponent, useState } from 'react'
import PropTypes from 'prop-types'
import '../Styles/MiniCard.css'
import Sparkles from "../assets/sparkles.png" 
import heart from '../assets/heart.png'

function MiniCard({nome, peso, img, tipo, shiny, num, altura}) {
    const[brilhante, setBrilhante] = useState(false)
    return (
        <div className='pokemon'>
            <div className="up">
                <img src={Sparkles} alt="Sparkles" className='Sparkles' onClick={() => setBrilhante(!brilhante)}/>
                <img src={!brilhante ? img : shiny} alt="Pokemon Image" />
                <p>#{num}</p>
            </div>
            <div className="info">
                <h2>Info:</h2>
                <h3>Peso: {peso}Lbs</h3>
                <h3>Altura: {altura * 10}cm</h3>
            </div>
            <div className="bottom">
                <h1>{nome}</h1>
                <h2>{tipo}</h2>
            </div>
        </div>
    );
}

MiniCard.propTypes = {
    nome: PropTypes.string,
    peso: PropTypes.number,
    num: PropTypes.number,
    altura: PropTypes.number
}

export default MiniCard;