import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ServiceList({serviceList,heading='All'}) {
  return (
    <div className='mb-10 px-8'>
        <h2 className='font-bold text-xl'>
            {heading}</h2>

        <div className='grid grid-cols-2 
        sm:grid-cols-2 md:grid-cols-3
        gap-7 mt-4
         lg:grid-cols-4'>
            {serviceList.length>0?serviceList.map((service,index)=>(
                <div className='border-[1px] rounded-lg p-3
                cursor-pointer hover:border-primary
                hover:shadow-sm transition-all ease-in-out'
                key={index}>
                    <Image src={service.attributes?.image?.data?.attributes?.url}
                    alt='service'
                    width={500}
                    height={200}
                    className='h-[200px] w-full object-cover rounded-lg'
                    />
                    <div className='mt-3 items-baseline flex flex-col gap-1'>
                        <h2 className='text-[10px] bg-blue-100 p-1 rounded-full
                        px-2 text-primary'>{service.attributes?.categories.data[0].attributes?.Name}</h2>
                        <h2 className='font-bold'>{service.attributes.Name}</h2>
                        <h2 className='text-primary text-sm'>{service.attributes?.Year_of_Experience}</h2>
                        <Link href={'/details/'+service?.id} className='w-full'>
                        <h2 className='p-2 px-3 border-[1px] border-primary
                        text-primary rounded-full w-full text-center
                        text-[12px] mt-2
                        cursor-pointer 
                        font-bold
                        hover:bg-primary hover:text-white'>Click Order</h2>
                        </Link>
                    </div>
                </div>
            ))
        :
        // Skelton Effect 
        [1,2,3,4,5,6].map((item,index)=>(
            <div key={index} className='h-[220px] bg-slate-200 
            w-full rounded-lg animate-pulse'>

            </div>
        ))
       
        }
        </div>
    </div>
  )
}

export default ServiceList