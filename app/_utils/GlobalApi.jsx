const { default: axios } = require("axios");


const API_KEY=process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api',
    headers:{
        'Authorization':`Bearer ${API_KEY}`
    }
})

 const getCategory=()=>axiosClient.get('/categories?populate=*');

 const getServiceList=()=>axiosClient.get('/services?populate=*')
 
 const getServiceByCategory=(category)=>axiosClient.get('/services?filters[categories][Name][$in]='+category+"&populate=*")
 
 const getServiceById=(id)=>axiosClient.get('/services/'+id+"?populate=*")

 const bookAppointment=(data)=>axiosClient.post('/appointments',data);
 
    const getUserBookingList=(userEmail)=>axiosClient.get("/appointments?[filters][Email][$eq]="+userEmail+"&populate[service][populate][image][populate][0]=url&populate=*")

    const deleteBooking=(id)=>axiosClient.delete('/appointments/'+id)
 
    const sendEmail=(data)=>axios.post('/api/sendEmail',data);
    export default{
    getCategory,
    getServiceList,
    getServiceByCategory,
    getServiceById,
    bookAppointment,
    getUserBookingList,
    deleteBooking,
    sendEmail
}