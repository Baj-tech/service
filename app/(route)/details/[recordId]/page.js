"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import ServiceDetail from '../_components/ServiceDetail';

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
    <div>


      <div>
        {/* service Detail  */}
        <div>
        {service&& <ServiceDetail service={service} />}
         
        </div>
      </div>
    </div>
  )
}

export default Details