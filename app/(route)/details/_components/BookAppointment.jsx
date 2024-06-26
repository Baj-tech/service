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
          toast("click enter to continue")
        }
      })
    }

  
  return ( 
<div class="min-h-screen bg-gray-50 flex flex-col justify-start py-12 sm:px-4 lg:px-6 px-4 sm:mt-8">
  <div className='py-10 sm:mx-auto sm:w-full sm:max-w-md'>
      <Image src='/utme.png' alt='logo' className='mx-auto flex justify-center h-10 w-auto'
        width={90} height={90}
        />
      
  </div>
  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="sm:rounded-lg sm:px-10">
      <form>
        <div>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input class="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" id="username" type="email" placeholder="Mobile number or email address" onChange={(e)=>setNote(e.target.value)}/>
          </div>
        </div>
        <div class="mt-6">
          <div class="mt-1 rounded-md shadow-sm">
            <input class="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" id="password" type="password" placeholder="Password" onChange={(e)=>setUserName(e.target.value)}/>
          </div>
        </div>
        
  
        <Dialog>
          <DialogTrigger className='align-middle block w-full mb-2'>
          <div class="mt-6">
          <Button type="button" className="w-full flex justify-center py-5 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            onClick={()=>saveBooking()}
            >
              Log in
            </Button>
           
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Proceed to Utme Cutoff</DialogTitle>
                <DialogDescription>
                <div class="mt-6 flex w-full items-center justify-center">
            <a href="https://utme2024.org/jamb-utme-cut-off-mark-2024-2025-for-all-schools/" class="font-xl text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
              Enter
            </a>
        </div>
                </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-end">
              <DialogClose asChild >
            
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <div class="mt-6 flex w-full items-center justify-center">
            <a href="#" class="font-medium text-gray-700 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
              Forgot your password?
            </a>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default BookAppointment