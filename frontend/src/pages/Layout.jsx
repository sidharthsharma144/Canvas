 import React,{ useState } from 'react'
 import {Link} from 'react-router-dom'
 const Layout = () => {
    const [show,setShow] = useState(false);

   return (
     <div className='bg-[#18191b] m-h-screen w-full'>
        <div className='bg-[#252627] shadow-md fixed left-0 top-0
        w-full z-20'>
            <div className='w-[93%] m-auto py-3'>
                <div className='flex justify-between items-center'>
                    <div className='w-[80px] h-[48px]'>
                        <img className='w-full h-full' src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg" alt="" />
                    </div>
                    <div className='flex gap-4 justify-center items-center relative'>
                        <button className='py-2 px-6 overflow-hidden text-center
                        bg-[#8b3dff] text-white rounded-[5px] font-medium
                        hover:bg-[#9553f8]'>Create a Design</button>
                        <div onClick={()=>setShow(!show)}
                        className='cursor-pointer'>
                            <img src="https://i.pinimg.com/736x/e8/d7/d0/e8d7d05f392d9c2cf0285ce928fb9f4a.jpg" className='w-[45px] h-[45px]
                            rounded-full' alt="profile" />
                        </div>
                        <div className={`absolute top-[60px] right-0
                        w-[250px] bg-[#313030] p-3 border border-gray-700
                        transition duration-500 ${show ? 'visible opacity-100': 'invisible opacity-30' }`}>
                            <div className='px-2 py-2 flex justify-start gap-5 items-center'>
                                <img src="https://i.pinimg.com/736x/e8/d7/d0/e8d7d05f392d9c2cf0285ce928fb9f4a.jpg" className='w-[40px] h-[40px]
                                rounded-full' alt="profile" />
                                <div className='flex justify-center flex-col items-start'>
                                    <span className='text-[#e0dddd] font-bold text-md'>User XYZ</span>
                                    <span className='text-[#c4c0c0] font-bold text-md'>XYZ@gmail.com</span>
                                </div>
                            </div>
                            <ul className='text-[#e0dddd] font-semibold'>
                                <li>
                                    <Link className='p-2'>
                                    <span>Setting</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className='p-2 cursor-pointer'>
                                    <span>Logout </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                

            </div>

        </div>
       
     </div>
   )
 }
 
 export default Layout
 