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
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs' 
import GlobalApi from '@/app/_utils/GlobalApi'
import { toast } from 'sonner'

function BookAppointment({service}) {
    
    const [note,setNote]=useState();
    const {user}=useKindeBrowserClient();
    

    const saveBooking=()=>{
      const data={
        data:{
          UserName:user.given_name+" "+user.family_name,
          Email:user.email,
          
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
<Dialog>
  <DialogTrigger>
  <Button className="mt-3 rounded-full">Order Now</Button>

  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm Order</DialogTitle>
      <DialogDescription>
            <div>
                
              
                <Textarea className="mt-3" placeholder="Add additional contact info: Phone or Whatsapp Contact " onChange={(e)=>setNote(e.target.value)} />
            </div>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="sm:justify-end">
          <DialogClose asChild >
            <>
            <Button type="button" 
            className="text-red-500 border-red-500"
            variant="outline">
              Close
            </Button>
            <Button type="button" 
            onClick={()=>saveBooking()}
            >
              Submit
            </Button>
            </>
          </DialogClose>
        </DialogFooter>
  </DialogContent>
</Dialog>

  )
}

export default BookAppointment