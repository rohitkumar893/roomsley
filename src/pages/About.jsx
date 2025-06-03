import './About.css'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <>
    <nav className="h-[68px] w-full flex justify-between items-center bg-gray-800 text-[22px] z-50">
        <div className='w-full flex justify-start items-center gap-[8px]'>
          <img src='door.png' className='homeicon h-[35px]'></img>
          <Link to='/'>
          <h1 className='text-white'>Roomsley</h1>
          </Link>
        </div>
        </nav>
    <div className='aboutpage w-full flex justify-center items-center'>
        

        <div className='aboutcontainer flex flex-col gap-[10px] rounded-3xl'>
            <h1 className='text-[25px] sm:text-[32px] font-semibold flex justify-center items-center text-gray-800'>ABOUT</h1>
        <p className='text-[18px] sm:text-[20px] font-small'> <span className='font-semibold'>Find, List, and Rent with Ease :</span><br />

            We offer a seamless experience with a wide range of verified listings tailored for students, professionals, and newcomers to any city. Every listing is pre-screened for safety, affordability, and comfort-eliminating the hassle of endless searching and unreliable posts.<br /><br />

            <span className='font-semibold'>List Property with Confidence :</span><br />

            Turn your spare room or property into steady income by listing it directly on our platform - no brokers, no hidden fees. Our user-friendly listing process lets you upload photos and set your price. We connect you with genuine tenants, helping you rent faster and more securely.<br /><br />

            <span className='font-semibold'>Simplified Rental Agreements :</span><br />

            Our Easy Deal service streamlines the rental process with fast and transparent. Whether you're a tenant or a property owner, we ensure clear terms, and a stress-free move-in experience-making renting straightforward, fair, and efficient.</p><br /><br />
        </div>
    </div>
    </>
  )
}

export default About