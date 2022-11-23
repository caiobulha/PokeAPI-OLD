import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react';

function PokemonList({list}) {
    console.log(list[0])
    return (
        <div>
            {list.length > 0 && list.map(el => (el))}
        </div>
    );
}

PokemonList.propTypes = {
    list: PropTypes.array
}

export default PokemonList;