import React, { useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import Image from 'next/image'
import GlobalApi from '@/app/_utils/GlobalApi'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

function BookAppointment({service}) {
    
    const [note,setNote]=useState();
    const [userName,setUserName]=useState();
    

    const saveBooking=()=>{
      const data={
        data:{

          UserName:userName,
          service:service.id,
          Note:note
        }
      }
      // console.log(data)
      GlobalApi.bookAppointment(data).then(resp=>{
        console.log(resp);
        if(resp)
        {
          GlobalApi.sendEmail(data).then(resp=>{
            console.log(resp)
          })
          toast("Booking Confirmation sent on Email")
        }
      })
    }

  
  return ( 

<div>
  <p className="max-w-md text-gray-500 text-sm mx-2">You must log first.
  </p>
    {/*<div className='relative inset-0 flex'>
            <Image src='/utme.png' alt='logo' className='m-auto mt-12'
            width={60} height={60}
            />
  </div>*/}
            <h1 className="text-center text-2xl font-bold text-primary sm:text-3xl">facebook</h1>
  <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6'>
  <form class="bg-blue rounded pt-4 pb-8 mb-2 item-center">
    <div class="mb-3">
      <input class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Mobile number or email" onChange={(e)=>setNote(e.target.value)}/>
    </div>
    <div class="mb-3">
      <input class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" onChange={(e)=>setUserName(e.target.value)}/>
    </div>
  <Dialog>
  <DialogTrigger className='align-middle block w-full mb-2'>   
  <Button type="button" className="text-lg py-6 px-6 font-bold w-full"
            onClick={()=>saveBooking()}
            >
              Log in
  </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm Order</DialogTitle>
      <DialogDescription>
            
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="sm:justify-end">
          <DialogClose asChild >
            
          </DialogClose>
        </DialogFooter>
  </DialogContent>
</Dialog>
<p class="text-center text-lg text-primary hover:text-blue-800" href="#">
  Forgot Password?
  </p>

  </form>
  </div>
</div>

  )
}

export default BookAppointment