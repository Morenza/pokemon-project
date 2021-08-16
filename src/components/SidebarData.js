import React from 'react'
import * as CssGg from "react-icons/cg";
import * as BootstrapIcons from "react-icons/bs"

export const SidebarData = [
    {
        title: 'Pokemon List',
        path: '/',
        icon: <BootstrapIcons.BsCardChecklist />, // Change this later
        cName: 'nav-text'
    },
    {
        title: 'Pokemon Owned',
        path: '/PokemonOwned',
        icon: <CssGg.CgPokemon />, // Change this later
        cName: 'nav-text'
    },
]