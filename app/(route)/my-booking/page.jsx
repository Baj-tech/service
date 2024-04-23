"use client"
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingList from './_components/BookingList'
import GlobalApi from '@/app/_utils/GlobalApi'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'

function MyBooking() {

    const {user}=useKindeBrowserClient();
    const [bookingList,setBookingList]=useState([]);
    useEffect(()=>{
        user&&getUserBookingList();
    },[user])
    const getUserBookingList=()=>{
        GlobalApi.getUserBookingList(user?.email).then(resp=>{
            console.log(resp.data.data)
            setBookingList(resp.data.data);
        })
    }

    /**
     * Used to Filter User Booking
     * @param {} type 
     * @returns 
     */
    const filterUserBooking=(type)=>{
        const result=bookingList.filter(item=>
           type=='upcoming'? new Date(item.attributes.Date)>=new Date()
           :new Date(item.attributes.Date)<=new Date()
            )
            console.log(result)
        return result;
    }
  return (
    <div className='px-4 sm:px-10 mt-10'>
        <h2 className='font-bold text-1xl'>My Order</h2>
        <Tabs defaultValue="expired" className="w-full mt-5">
            <TabsList className="w-full justify-start">
            <TabsTrigger value="expired">List</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                
            </TabsList>
            
            <TabsContent value="expired">
                <BookingList bookingList={filterUserBooking('expired')}
                updateRecord={()=>getUserBookingList()}
                expired={true}
                />
            </TabsContent>
            <TabsContent value="upcoming">
                <BookingList 
                bookingList={filterUserBooking('upcoming')}
                updateRecord={()=>getUserBookingList()}
                expired={false}
                />
            </TabsContent>
            </Tabs>

    </div>
  )
}

export default MyBooking