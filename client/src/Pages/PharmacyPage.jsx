import React from 'react'
import Navbar from '../Components/ui/Navbar';
import PharmacyCard from '../Components/cards/PharmacyCard';
import ResultBar from '../Components/ui/ResultBar';
import SideBarCard from '../Components/cards/SideBarCard';
import FooterBottom from '../Components/ui/FooterBottom';
import SubscribeBar from '../Components/ui/SubscribeBar';

function PharmacyPage() {
  return (
    <>
    <Navbar />
    <div className='mx-8 my-4'> 
    <ResultBar/>
    <div className='  my-4 gap-4 grid   grid-cols-12'>
    <div className='lg:col-start-1 lg:col-span-3 col-span-12 '>
      <SideBarCard/>
      <h2>zouhfze</h2>
    </div>
    <div className='  col-span-12  lg:col-span-9 flex flex-col gap-4 '>
    <SubscribeBar></SubscribeBar>
    <PharmacyCard imgUrl={null}/>
    <PharmacyCard imgUrl={null}/>
    <PharmacyCard imgUrl={null}/>
    <PharmacyCard imgUrl={null}/>
    <PharmacyCard imgUrl={null}/>
    {/*"Paginaton design"*/}
  <nav aria-label="Page navigation" className='mx-auto	my-20'>
    <ul className="inline-flex ">
    <li><button name="prev" className="h-10 px-5  rounded-l-lg ">
      <svg className="w-4 h-4 hover:fill-main-400 fill-secondary" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg></button>
    </li>
    <li><button className="h-10 px-5 text-secondary  hover:text-main-400 ">1</button></li>
    <li><button className="h-10 px-5 text-secondary  hover:text-main-400 ">2</button></li>
    <li><button className="h-10 px-5  rounded-l-lg">
      <svg className="w-4 h-4 hover:fill-main-400 fill-secondary" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg></button>
    </li>
  </ul>
</nav>
   
    </div>
    </div>
    </div>
    
    <FooterBottom></FooterBottom>
    </>
    
  )
}

export default PharmacyPage