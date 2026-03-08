import { useState } from 'react'

import './App.css'
import Button from './src/components/button'
import Card from './src/components/card'

export interface CardType {
  id: number,
  title: string,
  description: string,
}

const cards: CardType[] = [
  {
    id: 1,
    title: 'Course Management',
    description: 'Create, organize, and manage courses in one centralized platform. Teachers can easily upload materials, structure lessons, and keep learning organized.'
  },
  {
    id: 2,
    title: 'Student Progress Tracking',
    description: 'Monitor student performance with clear insights and progress indicators. Track assignments, grades, and learning activity in real time.'
  },
  {
    id: 3,
    title: 'Interactive Learning',
    description: 'Engage students with digital learning tools such as assignments, quizzes, and discussion features designed to support active participation.'
  },
  {
    id: 4,
    title: 'Institution Insights',
    description: 'Provide administrators and foundations with performance statistics across schools and classes to support better academic decision-making.'
  }
]

function App() {

  return (
    <>
    <div className='bg-background h-full'>
      <nav className='bg-primary text-white p-4'>
        <h1 className='text-xl font-bold'>EduSmart</h1>
      </nav>
      <section className='justify-center flex flex-col mt-48 mx-4 items-center text-center justify-items-center gap-6'>
        <h1 className='font-bold text-6xl w-fit'>Welcome to <span className='text-primary'>EduSmart</span></h1>
        <p className='max-w-140 font-semibold text-center'>Empower schools, teachers, and students with a modern learning platform designed to simplify education. Manage courses, track performance, and deliver engaging digital learning experiencesall in one centralized system built for smarter education.</p>
        <Button variant={'primary'}>
          Mulai Belajar
        </Button>
      </section>
      <section className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-12 justify-center gap-12 mt-20 pb-12'>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </section>
    </div>
    </>
  )
}

export default App
