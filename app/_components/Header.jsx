"use client"
import { Button } from '@/components/ui/button'
import { LoginLink, LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  

function Header() {
    const Menu=[
        {
            id:1,
            name:'Home',
            path:'/'
        },
        {
            id:2,
            name:'Search',
            path:'/search'
        },
        {
            id:3,
            name:'Contact Us',
            path:'/'
        },
    ]

    const {user} = useKindeBrowserClient();

    useEffect(()=>{
        console.log(user);
    },[user])
  return (
    <div className='flex items-center 
    justify-between p-4 shadow-sm'>
        <div className='flex items-center items-center'>
            {/*<Image src='/logo.svg' alt='logo'
            width={180} height={80}
            />*/}
            <Link href={'/'}>
            <h2 className='text-primary font-bold text-2xl '>Maximum<span className='text-secondary font-none md:mr-10'>Communication</span></h2>
            </Link>
            <ul className='md:flex gap-8 hidden'>
                {Menu.map((item,index)=>(
                    <Link href={item.path} key={index}>
                    <li className='hover:text-primary
                    cursor-pointer hover:scale-105
                    transition-all ease-in-out'>{item.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
   
       {user?
      
       <Popover>
        <PopoverTrigger>
        {user?.picture? 
        <Image src={user?.picture} alt='profile-image'
        width={30}
        height={30}
        className='rounded-full' />:
        <Image src={'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'} alt='profile-image'
        width={30}
        height={30}
        className='rounded-full' />}
        </PopoverTrigger>
        <PopoverContent className="w-44">
            <ul className='flex  flex-col gap-2'>
           
            <Link href={'/my-booking'} className='cursor-pointer
             hover:bg-slate-100 p-2 rounded-md'>Order</Link>
                <li className='cursor-pointer
             hover:bg-slate-100 p-2 rounded-md'>
                <LogoutLink> Logout </LogoutLink></li>
            </ul>
        </PopoverContent>
        </Popover>

   
       :
        <LoginLink> <Button>Login</Button></LoginLink>
       } 
        
    </div>
  )
}

export default Header