import { Menu } from 'lucide-react';
import React from 'react';


const Sidebar = () => {
    return (
        <div>
            {/* TOP SIDEBAR */}
      <div className='flex gap-3 justify-between md:justify-normal items-center pt-8 '>
        <div>logo</div>
        <h1 className='font-extrabold text-2xl'>PETVOT</h1>
      <button className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' >
      <Menu className='w-4 h-4'/>
      </button>
      </div>
             
             {/* Links */}
             <div className='flex-grow mt-8'>
                {/* links here */}

             </div>
             {/* FOOTER */}
             <div>
                <p className='text-center text-xs text-gray-500'>&copy; 2024 PETVOT</p>
             </div>
      </div>
    )
}



export default Sidebar;