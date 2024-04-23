"use client"
import ServiceList from '@/app/_components/ServiceList';
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'

function Search({params}) {

  const [serviceList,setserviceList]=useState([]);
  useEffect(()=>{
    console.log(params.cname);
    getServices();
  },[])

  const getServices=()=>{
    GlobalApi.getServiceByCategory(params.cname).then(resp=>{
      setserviceList(resp.data.data);
    })
  }
  return (
    <div className='mt-5'>
        <ServiceList heading={params.cname}
        serviceList={serviceList}
        />
    </div>
  )
}

export default Search