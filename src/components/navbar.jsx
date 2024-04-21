import React from 'react'
import Navcomp from './navcomp'

const navbar = () => {
    return (

        <div className="main rounded-b-3xl  w-screen h-20 flex items-start justify-center sticky top-0 bg-gradient-to-t from-50% from-black to-slate-800">
            <div className="navcontent w-3/4 h-3/4 flex justify-between items-start">
                <Navcomp compname="Home" />
                <Navcomp compname="Blog" />
                <Navcomp compname="Project" />
                <Navcomp compname="Guidance" />
                <Navcomp compname="Contact Us" />
                <Navcomp compname="About Us" />

            </div>


        </div>
    )
}

export default navbar
