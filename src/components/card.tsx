import React from 'react'
import reactLogo from '../assets/react.svg'
import type { CardType } from '../../App'

function Card({ card }: { card: CardType }) {
  return (
    <div className='bg-white shadow-md rounded-lg'>
      <div className='bg-secondary rounded-t-lg p-8'>
        <img src={reactLogo} className='w-20' alt="React Logo" />
      </div>
      <div className='p-6'>
        <h2 className='font-bold text-xl'>{card.title}</h2>
        <p className='text-gray-600'>{card.description}</p>
      </div>
    </div>
  )
}

export default Card