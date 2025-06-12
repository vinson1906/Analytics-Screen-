import React from 'react'
import { Card,CardHeader, CardTitle, CardContent } from '../ui/card'
import MultiLineChart from '../Chart'



const AnaliticsChart = () => {
    return (

        <div className=' flex flex-col  justify-center items-start'>
            <h1 className='text-2xl ml-5 mb-5 font-bold '>
                Mounth Revenue Analytics Report
            </h1>
            <Card className="w-full max-w-4xl ml-5 p-4">
                <CardHeader>
                    <CardTitle>Sales & Revenue Overview</CardTitle>
                </CardHeader>
                <CardContent>
                    <MultiLineChart />
                </CardContent>
            </Card>

        </div>
    )
}

export default AnaliticsChart