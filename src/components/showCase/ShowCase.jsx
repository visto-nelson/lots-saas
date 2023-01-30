import React, { useState } from 'react'
//import firebase from 'firebase'
import img5 from './image5.png'
import img6 from './image6.png'
import img7 from './image7.png'


const ShowCase = () => {

  // For storing the data from firestore
  const [allDocs, setAllDocs] = useState([]);

  //Making a database reference
//const db=firebase.firestore();
{/** 
//function for fetching all docs
function fetchAll(e){
  e.preventDefault();

  db.collection('projects')
  .get()
  .then((snapshot)=>{
    if(snapshot.docs.length>0){
      snapshot.docs.forEach((doc)=>{
        setAllDocs((prev)=>{
          return[...prev,doc.data()];
        });
      });
    }
  })
  console.log(allDocs);

}
*/}
  return (
    <div className='px-11 pt-16'>
      <h className='md:text-3xl	font-black tracking-widerd'>Latest Software</h>
      {/**Filter Buttons */}
      <div className='pt-5 flex'>
        <button className='bg-blue-400 border hover:bg-red-700 hover:text-white text-xs md:text-sm border-blue-800 py-1 px-3 mr-1 md:mr-8 rounded-2xl'>View All <button className='bg-blue-500 border text-sm rounded-xl px-2 text-white'>20K</button></button>
        <button className='bg-white border hover:bg-red-700 hover:text-white text-xs md:text-sm border-blue-800 py-2 px-3 mr-1 md:mr-8 rounded-xl'>Web App <button className='bg-blue-500 border text-sm rounded-xl px-2 text-white'>7 K</button></button>
        <button className='bg-white border hover:bg-red-700 hover:text-white text-xs md:text-sm border-blue-800 py-2 px-3 mr-1 md:mr-8 rounded-xl'>E-commerce <button className='bg-blue-500 border text-sm rounded-xl px-2 text-white'>200</button></button>
        <button className='bg-white border hover:bg-red-700 hover:text-white text-xs md:text-sm border-blue-800 py-2 px-3 mr-1 md:mr-8 rounded-xl'>ERP System <button className='bg-blue-500 border text-sm rounded-xl px-2 text-white'>4 K</button></button>
      </div>
      {/**Images divs */}
      <div className='lg:flex pt-8 item-center lg:justify-between'>
        <div className='flex justify-between'>
          <img src={img5} alt="Lots logo" className=" w-40 md:h-52 md:w-72 pb-4 pr-5 rounded-sm"/>
          <img src={img6} alt="Lots logo" className="w-40 md:h-52 md:w-72 rounded-sm"/>
        </div>
        <div className='flex justify-between pt-4'>
          <img src={img7} alt="Lots logo" className=" w-40 md:h-52 md:w-72 pb-4 pr-5 rounded-sm"/>
          <img src={img5} alt="Lots logo" className=" w-40 md:h-52 md:w-72 pb-4 rounded-sm"/>
        </div>
      </div>
      <div className='lg:flex pt-8 item-center lg:justify-between'>
        <div className='flex justify-between'>
          <img src={img5} alt="Lots logo" className=" w-40 md:h-52 md:w-72 pb-4 pr-5 rounded-sm"/>
          <img src={img6} alt="Lots logo" className="w-40 md:h-52 md:w-72 rounded-sm"/>
        </div>
        <div className='flex justify-between pt-4'>
          <img src={img7} alt="Lots logo" className=" w-40 md:h-52 md:w-72 pb-4 pr-5 rounded-sm"/>
          <img src={img5} alt="Lots logo" className=" w-40 md:h-52 md:w-72 pb-4 rounded-sm"/>
        </div>
      </div>
      <div className='lg:flex pt-8 item-center lg:justify-between'>
        <div className='flex justify-between'>
          <img src={img5} alt="Lots logo" className=" w-40 md:h-52 md:w-72 pb-4 pr-5 rounded-sm"/>
          <img src={img6} alt="Lots logo" className="w-40 md:h-52 md:w-72 rounded-sm"/>
        </div>
        <div className='flex justify-between pt-4'>
          <img src={img7} alt="Lots logo" className=" w-40 md:h-52 md:w-72 pb-4 pr-5 rounded-sm"/>
          <img src={img5} alt="Lots logo" className=" w-40 md:h-52 md:w-72 pb-4 rounded-sm"/>
        </div>
      </div>
      
    </div>
  )
}

export default ShowCase