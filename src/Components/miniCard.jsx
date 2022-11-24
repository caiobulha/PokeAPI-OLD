import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../Styles/MiniCard.css'
import Sparkles from "../assets/sparkles.png" 

function MiniCard({nome, peso, img, tipo, shiny, desc, num, altura}) {
    return (
        <div className='pokemon'>
            <div className="up">
                <img src={Sparkles} alt="Sparkles" className='Sparkles'/>
                <img src={img} alt="Pokemon Image" />
                <p>#{num}</p>
            </div>
            <div className="info">
                <h2>Info:</h2>
                <h3>Peso: {peso}</h3>
                <h3>Altura: {altura}</h3>
                <p>{desc}</p>
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
    altura: PropTypes.number,
    desc: PropTypes.string
}

export default MiniCard;