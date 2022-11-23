import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../Styles/MiniCard.css'
import Sparkles from "../assets/sparkles.png" 

function MiniCard({nome, peso, img, tipo, shiny, weigth, desc, num, altura}) {
    return (
        <div className='pokemon'>
            <div className="up">
                <img src={Sparkles} alt="Sparkles" className='Sparkles'/>
                <img src={img} alt="Pokemon Image" />
                <p>#{num}</p>
            </div>
            <div className="info">a</div>
            <div className="bottom">
                <h1>{nome}</h1>
                <h2>{tipo}Fire</h2>
            </div>
        </div>
    );
}

export default MiniCard;