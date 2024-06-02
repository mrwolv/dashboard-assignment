import React, { useEffect, useState } from 'react'
import { CircleX, LayoutDashboard, Menu, Settings, ShoppingBag, ShoppingCart, User } from 'lucide-react'

export default function Navbar() {

    const [size, setSize] = useState(window.innerWidth)
    const [show, setShow] = useState(false)




    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 890 ) {

                setSize(window.innerWidth)

                // Code to handle small screen size
                // For example, toggle a state variable to indicate whether to show the hamburger icon or not
            } else {
                setSize(window.innerWidth)
                // Code to handle larger screen size
                // For example, reset the state variable to indicate that the navbar should be shown normally
            }
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navLinks = [
        {
            title: 'Dashboard',
            icon: <LayoutDashboard size={18} color='white' />,
            path: '/dashboard'
        },
        {
            title: 'Users',
            icon: <User size={18} color='white' />,
            path: '/users'
        },
        {
            title: 'Products',
            icon: <ShoppingBag size={18} color='white' />,
            path: '/products'
        },
        {
            title: 'Orders',
            icon: <ShoppingCart size={18} color='white' />,
            path: '/orders'
        },
        {
            title: 'Settings',
            icon: <Settings size={18} color='white' />,
            path: '/settings'
        }
    ]

    console.log(show)


    return (
        <>
            {
                size < 768 ?
                    <div className=' bg-[#101138] pl-7 py-2.5 hover:cursor-pointer relative w-full'>
                        <div className='flex items-center justify-between gap-x-[11rem] p-4'>
                            <Menu size={25} onClick={() => setShow(!show)} />
                            <h1 className='text-xl font-bold '>Dashboard</h1>
                        </div>
                        {
                            show && <div className='absolute z-10 top-[80%] left-[1%] bg-[#101138] w-[300px] h-[350px] rounded-md shadow-xl  text-white/85 transition-all'>
                                <CircleX size={25} className='absolute top-3 left-3 hover:cursor-pointer' onClick={() => setShow(!show)} />
                                <nav className='p-6 mt-6'>
                                    {
                                        navLinks.map((item, index) => (
                                            <ul className='flex flex-col justify-between gap-8 '

                                                key={index}>


                                                <li className='hover:cursor-pointer px-4 py-3 rounded-md hover:bg-gray-500/25 flex items-center gap-x-3'>
                                                    <span className='bg-[#0075FF] p-1.5 rounded-md  '>{item.icon}</span>
                                                    <span className='text-md'>{item.title}</span>
                                                </li>


                                            </ul>
                                        ))
                                    }

                                </nav>

                            </div>
                        }
                    </div>

                    :
                    <>
                        <div className="shadow-xl  backdrop-blur-xl bg-[#101138] rounded-xl p-6 w-[330px] text-white/85 fixed  ">
                            <div className='flex items-center gap-x-5   '>
                                <img src="/assets/images.png" alt="" className='h-14 w-14 rounded-full' />
                                <h1 className='text-xl font-bold '>Dashboard</h1>

                            </div>
                            <nav className='p-6 mt-6'>
                                {
                                    navLinks.map((item, index) => (
                                        <ul className='flex flex-col justify-between gap-8 '

                                            key={index}>


                                            <li className='hover:cursor-pointer px-4 py-3 rounded-md hover:bg-gray-500/25 flex items-center gap-x-3'>
                                                <span className='bg-[#0075FF] p-1.5 rounded-md  '>{item.icon}</span>
                                                <span className='text-md'>{item.title}</span>
                                            </li>


                                        </ul>
                                    ))
                                }

                            </nav>

                            <div className='mt-5 relative'>
                                <img src="/assets/wwwww.png" alt="" className='rounded-xl drop-shadow-lg ' />
                                <h4 className='absolute z-1 top-[20%] left-[10%] text-xl font-extrabold'>Need Help ?</h4>
                                <p className='absolute z-1 top-[43%] left-[10%] text-sm'>Please check our docs</p>
                                <p className='absolute z-1 top-[65%] left-[24%] px-7 py-2.5 bg-[#06092B]/40 rounded-md font-bold text-xs hover:scale-105 hover:cursor-pointer transition-all    '>Documentations</p>
                            </div>
                        </div></>
            }

        </>
    )
}
