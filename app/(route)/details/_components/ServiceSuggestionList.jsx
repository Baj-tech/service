"use client"
import GlobalApi from '@/app/_utils/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function ServiceSuggestionList() {
    const [serviceList,setServiceList]=useState([]);
    useEffect(()=>{
      getServiceList();
    },[])
    const getServiceList=()=>{
      GlobalApi.getServiceList().then(resp=>{
        console.log(resp.data.data);
        setServiceList(resp.data.data);
      })
    }
  return (
    <div className=' p-4 border-[1px] mt-5 md:ml-5 rounded-lg '>
        <h2 className='mb-3 font-bold'>Suggestions</h2>

        {serviceList.map((service,index)=>(
            <Link key={index} href={'/details/'+service.id} className=' mb-4 p-3 shadow-sm w-full 
            cursor-pointer hover:bg-slate-100
            rounded-lg flex items-center gap-3'>
                <Image src={service.attributes?.image?.data?.attributes?.url}
                width={70}
                height={70}
                className='w-[70px] h-[70px] rounded-full object-cover'
                alt='service-image'
                />
                <div className='mt-3 flex-col flex gap-1 items-baseline'>
                    <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2
                     text-primary'>{service.attributes.categories?.data[0]?.attributes?.Name}</h2>
                <h2 className='font-medium text-sm'>{service.attributes.Name}</h2>
                <h2 className='text-primary text-xs flex gap-2'>
                    {/* <GraduationCap/> */}
                    {service.attributes.Year_of_Experience}</h2>
                    </div>
            </Link>
        ))}
    </div>
  )
}

export default ServiceSuggestionList