import React from 'react';

const SelectedCard = ({player, removePlayer}) => {

    const handleRemove=()=>{
        removePlayer(player);
    }
    return (
        <div className='border-2 border-gray-300 p-3 rounded-xl flex justify-between items-center mt-3'>
            <div className='flex justify-between items-center space-x-2'>
                <img className='h-20 w-20 object-cover rounded-xl' src={player.image} alt="" />
                <div className='space-y-2'>
                    <h3 className='text-xl font-bold'>{player.name}</h3>
                    <p className='text-xs text-gray-400 font-semibold'>{player.role}</p>
                </div>
            </div>

            <div onClick={handleRemove}>
                <img className='h-7 w-7' src="https://img.icons8.com/?size=100&id=102550&format=png&color=000000" alt="" />
            </div>
            
        </div>
    );
};

export default SelectedCard;