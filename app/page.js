"use client"

import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import ServiceList from "./_components/ServiceList";
import GlobalApi from "./_utils/GlobalApi";
import { useEffect, useState } from "react";

export default function Home() {

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
    <div>
        {/* Hero Section  */}
        <Hero/>

        {/* Search bar + Categories  */}
        

        {/* Popular Doctor List  */}
        <ServiceList serviceList={serviceList}/>
    </div>
  );
}
