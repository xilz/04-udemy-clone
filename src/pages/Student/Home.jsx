import React from 'react'
import Hero from '../../components/Student/Hero'
import Companies from '../../components/Student/Companies'
import CourseSection from '../../components/Student/CourseSection'
import Testimonials from '../../components/Student/Testimonials'
import CallToAction from '../../components/Student/CallToAction'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero />
      <Companies />
      <CourseSection />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

export default Home