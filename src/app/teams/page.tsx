import React from 'react'
import Intro from '@/components/Teams/Intro'
import TeamsHero from '@/components/Teams/TeamsHero'
import Teams from '@/components/Teams/Teams'
import Coordinators from '@/components/Teams/Coordinators'

const page = () => {
    return (
        <div>
            <TeamsHero />
            <Intro />
            <Teams />
            <Coordinators />
        </div>
    )
}

export default page