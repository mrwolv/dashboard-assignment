import { BarChart, Plus, Pyramid, WalletMinimal } from 'lucide-react';
import React from 'react'
import SalesByCountryChart from './Chart';
import RevenueExpenseChart from './RevenueChart';
import ActiveUserChart from './ActiveUserChart';



export default function ChartData() {

    const statisticsData = [
        {
            title: 'Total Revenue',
            value: '$120,000',
            percentage: '+5.5%',
            color: 'text-green-500',
            icon: <WalletMinimal size={18} color='white' />
        },
        {
            title: 'Total Expenses',
            value: '$80,000',
            percentage: '-2.5%',
            color: 'text-red-500',
            icon: <Pyramid size={18} color='white' />
        },
        {
            title: 'Total Profit',
            value: '$40,000',
            percentage: '+7.5%',
            color: 'text-green-500',
            icon: <BarChart size={18} color='white' />
        },
        {
            title: 'Total Profit',
            value: '$40,000',
            percentage: '+7.5%',
            color: 'text-green-500',
            icon: <Plus size={18} color='white' />
        }
    ]


    const salesCountyrData = [
        {
            country: 'United States',
            sales: 2500,
            value: 230900,
            bounce_rate: 29.9
        },
        {
            country: 'Germany',
            sales: 3900,
            value: 440000,
            bounce_rate: 40.22
        },
        {
            country: 'Great Britain',
            sales: 1400,
            value: 190700,
            bounce_rate: 23.44
        },
        {
            country: 'Brazil',
            sales: 562,
            value: 143960,
            bounce_rate: 32.14
        },
        {
            country: 'France',
            sales: 800,
            value: 210500,
            bounce_rate: 27.8
        },
        {
            country: 'Canada',
            sales: 1200,
            value: 330000,
            bounce_rate: 22.6
        }
    ]



    return (
        <div className=" md:ml-72 lg:ml-[22%] pr-6 col-span-10 overflow-auto">

            <h1 className='text-3xl font-semibold'>General Statistics</h1>
            <div className='mt-7 flex flex-wrap md:flex items-center justify-between '>
                {
                    statisticsData.map((item, index) => (
                        <div className='bg-[#121648] w-full md:w-64  h-28 rounded-2xl p-3 relative flex items-center justify-between' key={index}>
                            <div >
                                <p className='text-[#A0AEC0] text-xs'>{item.title}</p>
                                <p className='text-lg mt-2 '>{item.value}</p>
                                <span className={`${item.color} text-xs absolute z-10 top-[56%] left-[39%]`}>+55% </span>
                            </div>
                            <div className='bg-[#0075FF] p-3.5 rounded-2xl'>
                                {item.icon}
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Sales by countries*/}
            <div className='mt-7 '>


                <h1 className='text-3xl' >Sales by Country</h1>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-5'>
                    <div className=' mt-7 bg-[#121648] w-full md:w-[50%] h-fit px-6 py-2.5 rounded-xl'>
                        {
                            salesCountyrData.map((item, index) => (
                                <div className='grid grid-cols-2  md:grid-cols-4 mt-4  border-b border-[#A0AEC0]/25 ' key={index}>
                                    <div className='space-y-2'>
                                        <p className='text-[#A0AEC0] text-xs'>Country:</p>
                                        <p className=''>{item.country}</p>
                                    </div>
                                    <div className='flex flex-col '>
                                        <p className='text-[#A0AEC0] text-xs'>Sales:</p>
                                        <p className=''>{item.sales}</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className='text-[#A0AEC0] text-xs'>Total Value:</p>
                                        <p className=' '>{item.value}</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className='text-[#A0AEC0] text-xs'>Bounce Rate</p>
                                        <p className=' '>{item.bounce_rate}%</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className=' mt-7 bg-[#121648] w-full md:w-[50%] h-[407px] px-6 py-2.5 rounded-xl'>
                        <SalesByCountryChart />
                    </div>


                </div>
            </div>

            {/* Active Users */}
            <div className='mt-7'>


                <h1 className='text-3xl' >Revenue Expense Data</h1>
                <div className='flex items-center justify-between gap-5'>

                    <div className=' mt-7 bg-[#121648] w-full md:w-[50%]  px-6 py-2.5 rounded-xl'>
                        <RevenueExpenseChart />
                    </div>
                    <div className='  bg-[#121648] w-full  md:w-[50%]  px-6 py-2.5 rounded-xl'>
                        <ActiveUserChart />
                    </div>


                </div>
            </div>

        </div>
    )
}
