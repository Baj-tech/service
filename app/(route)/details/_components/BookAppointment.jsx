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
import GlobalApi from '@/app/_utils/GlobalApi'
import { toast } from 'sonner'

function BookAppointment({service}) {
    
    const [note,setNote]=useState();
    

    const saveBooking=()=>{
      const data={
        data:{

          
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
                
              
                <Textarea className="mt-3" placeholder="Add additional contact info: Phone or Whatsapp Contact " onChange={(e)=>setNote(e.target.value)} />
              
            <Button type="button" 
            className="text-red-500 border-red-500"
            variant="outline">
              Close
            </Button>
          

<Dialog>
  <DialogTrigger>
  <Button type="button" 
            onClick={()=>saveBooking()}
            >
              Submit
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
    </div>


  )
}

export default BookAppointment