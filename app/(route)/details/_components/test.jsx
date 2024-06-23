<div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
  <div className='sm:mx-auto sm:w-full sm:max-w-md'>
      <Image src='/utme.png' alt='logo' className='mx-auto h-10 w-auto'
        width={60} height={60}
        />
      <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">facebook</h2>
      <p class="mt-2 text-center text-sm leading-5 text-blue-500 max-w">
          create a new acccount    
      </p>
  </div>
  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form>
        <div>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" id="username" type="email" placeholder="Mobile number or email" onChange={(e)=>setNote(e.target.value)}/>
          </div>
        </div>
        <div class="mt-6">
          <div class="mt-1 rounded-md shadow-sm">
            <input class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" id="password" type="password" placeholder="Password" onChange={(e)=>setUserName(e.target.value)}/>
          </div>
        </div>
        <div class="mt-6">
        <span class="block w-full rounded-md shadow-sm">
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
        </div>
      </form>
    </div>
  </div>
</div>