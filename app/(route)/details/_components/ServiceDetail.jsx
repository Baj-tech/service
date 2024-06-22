
import React from 'react'
import BookAppointment from './BookAppointment'

function ServiceDetail({service}) {
    
  return (
    <>
    <div>
    <BookAppointment service={service} />
          
         
        </div>
       </>
  )
}

export default ServiceDetail