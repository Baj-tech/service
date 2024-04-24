import React, { useEffect, useState } from 'react';
import {Button} from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  const [categoryList,setCategoryList]=useState([]);
  useEffect(()=>{
    getCategoryList()
  },[])

  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    })
  }     

  return (
    <section>
  <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-16 mb-10 items-center px-5">
      <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
        <h2 className="text-2xl font-bold sm:text-3xl">Search
           <span className='text-primary p-2'>Product</span>
          and Place your
          <span className='text-primary p-2'>Order</span></h2>

        <Input className="mt-6" type="text" placeholder="Search..." />
      <Button className='mt-10' type="submit">
        <Search className='h-4 w-4 mr-2'/>
        Search</Button>
      </div>

      {/* Display List of Category  */}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {categoryList.length>0?categoryList.map((item,index)=>index<6&&(
        <Link
          className="flex 
          flex-col text-center items-center rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href={'/search/'+item.attributes.Name} key={index}
        >
          <span className="rounded-lg bg-gray-50 p-3">
          <Image src={item.attributes?.Icon?.data.attributes?.url}
            stroke="currentColor"
            viewBox="0 0 24 24"
            alt='icon'
            width={30}
            height={30}/>
            <label className='text-blue-600 mt-2 font-bold'>{item?.attributes?.Name}</label>
          </span>
        </Link>
        ))
        :
        [1,2,3,4,5,6].map((item,index)=>(
          <div key={index} className=' bg-slate-200 m-2
          w-[130px] h-[120px] rounded-lg animate-pulse'>
              
          </div>
      ))
       
        }

      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
