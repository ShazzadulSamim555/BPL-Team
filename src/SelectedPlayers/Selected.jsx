import React from 'react';
import SelectedCard from './SelectedCard';

const Selected = ({purchasePl, removePlayer}) => {
    // console.log(purchasePl);
    return (
        <div className='max-w-[1200px] mx-auto'>
            {
                purchasePl.map(player=> <SelectedCard player={player} removePlayer={removePlayer}></SelectedCard>)
            }
        </div>
    );
};

export default Selected;