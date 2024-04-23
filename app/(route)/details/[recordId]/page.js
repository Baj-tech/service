"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import ServiceDetail from '../_components/ServiceDetail';
import ServiceSuggestionList from '../_components/ServiceSuggestionList';

function Details({params}) {

  const [service,setService]=useState();
  useEffect(()=>{
    getServiceById();
  },[])
  const getServiceById=()=>{
    GlobalApi.getServiceById(params.recordId).then(resp=>{
      setService(resp.data.data);
    })
  }
  return (
    <div className='p-4 md:px-10'>
      <h2 className='font-bold text-[18px]'>Description</h2>

      <div className='grid grid-cols-1 lg:grid-cols-4 '>
        {/* service Detail  */}
        <div className=' col-span-3'>
        {service&& <ServiceDetail service={service} />}
         
        </div>
        {/* service Suggestion  */}
        <div>
          <ServiceSuggestionList/>
        </div>
      </div>
    </div>
  )
}

export default Details