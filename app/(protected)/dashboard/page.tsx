'use client';

import Link from 'next/link'
import { Bar, Doughnut, Line } from 'react-chartjs-2'
import useSWR from 'swr'
import { formatNumber } from '@/lib/utils'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  BarElement,
  ArcElement,
} from 'chart.js'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  BarElement,
  ArcElement
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
}

const Dashboard = () => {
  const { data: summary, error } = useSWR(`/api/admin/orders/summary`)

  if (error) return error.message
//   if (!summary) return 'Loading...'

  const salesData = {
    // labels: summary.salesData.map((x: { _id: string }) => x._id),
    labels: ['2023/02','2023/04'],
    datasets: [
      {
        fill: true,
        label: 'Sales',
        data:["12","13"],
        // data: summary.salesData.map(
        //   (x: { totalSales: number }) => x.totalSales
        // ),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(227, 61, 148)',
      },
    ],
  }
  const ordersData = {
    // labels: summary.salesData.map((x: { _id: string }) => x._id),
    labels: ['2023/02','2023/04'],
    datasets: [
      {
        fill: true,
        label: 'Orders',
        data:["12","13"],
        // data: summary.salesData.map(
        //   (x: { totalOrders: number }) => x.totalOrders
        // ),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }
  const productsData = {
    // labels: summary.productsData.map((x: { _id: string }) => x._id), // 2022/01 2022/03
    labels: ['2023/02','2023/04'],
    datasets: [
      {
        label: 'Category',
        data:["12","13"],
        // data: summary.productsData.map(
        //   (x: { totalProducts: number }) => x.totalProducts
        // ),
        backgroundColor: [
            'rgba(255, 206, 86, 1)',
        ],
        borderColor: [
            'rgba(255, 206, 86, 1)',
        ],
      },
    ],
  }
  const usersData = {
    // labels: summary.usersData.map((x: { _id: string }) => x._id), // 2022/01 2022/03
    labels: ['2023/02','2023/04'],
    datasets: [
      {
        label: 'Users',
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        data:["12","13"],
        // data: summary.usersData.map(
        //   (x: { totalUsers: number }) => x.totalUsers
        // ),
      },
    ],
  }

  return (
    <div>
      <div className="flex flex-row gap-6 mb-10 items-center justify-center">
      <Card className="w-[300px]">
        <CardHeader>
            <CardTitle>Sales</CardTitle>
            <CardDescription>${formatNumber(123)}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
        <Link href="/admin/orders">View sales</Link>
        </CardFooter>
        </Card>
            {/* ${formatNumber(summary.ordersPrice)} */}
        {/* <div className="stat">
          <div className="stat-title">Sales</div>
          <div className="stat-value text-primary">
            ${formatNumber(123)}
          </div>
          <div className="stat-desc">
            <Link href="/admin/orders">View sales</Link>
          </div>
        </div> */}
        <Card className="w-[300px]">
        <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>${formatNumber(123)}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
        <Link href="/admin/orders">View sales</Link>
        </CardFooter>
        </Card>
            {/* {summary.ordersCount} */}
        {/* <div className="stat">
          <div className="stat-title"> Orders</div>
          <div className="stat-value text-primary">
            {1234}
            </div>
          <div className="stat-desc">
            <Link href="/admin/orders">View orders</Link>
          </div>
        </div> */}
        <Card className="w-[300px]">
        <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardDescription>${formatNumber(123)}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
        <Link href="/admin/products">View products</Link>
        </CardFooter>
        </Card>
            {/* {summary.productsCount} */}
        {/* <div className="stat">
          <div className="stat-title">Products</div>
          <div className="stat-value text-primary">
            {125}
            </div>
          <div className="stat-desc">
            <Link href="/admin/products">View products</Link>
          </div>
        </div> */}
        <Card className="w-[300px]">
        <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>${formatNumber(123)}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
        <Link href="/admin/users">View users</Link>
        </CardFooter>
        </Card>
            {/* {summary.usersCount} */}
        {/* <div className="stat">
          <div className="stat-title">Users</div>
          <div className="stat-value text-primary">
            {25}
            </div>
          <div className="stat-desc">
            <Link href="/admin/users">View users</Link>
          </div>
        </div> */}
      </div>
      <div className="grid md:grid-cols-2 mx-10 gap-4">
        <Card className='p-4'>
        <div>
          <h2 className="text-xl py-2">Sales Report</h2>
          <Line data={salesData} />
        </div>
        </Card>
        <Card className='p-4'>
        <div>
          <h2 className="text-xl py-2">Orders Report</h2>
          <Line data={ordersData} />
        </div>
        </Card>
      </div>
      <div className="grid md:grid-cols-2 mx-10 my-10 gap-4">
        <Card className='p-4'>
        <div>
          <h2 className="text-xl py-2">Products Report</h2>
          <div className="flex items-center justify-center h-80 w-96 ">
            <Doughnut data={productsData} />
          </div>
        </div>
        </Card>
        <div>
            <Card className='p-4'>
          <h2 className="text-xl py-2">Users Report</h2>
          <Bar data={usersData} />
            </Card>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
