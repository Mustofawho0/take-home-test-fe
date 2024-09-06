'use client';
import BarChart from '@/components/chart/bar';
import TopBuyer from '@/components/top-buyer';
import TopCard from '@/components/top-card';
import TopProduct from '@/components/top-product';
import TopStore from '@/components/top-store';
import * as React from 'react';
import Link from 'next/link';
import { useGetTopBuyer } from '@/features/summary/hooks/useGetTopBuyer';
import { useGetTopProduct } from '@/features/summary/hooks/useGetTopProduct';
import { useGetTopStore } from '@/features/summary/hooks/useGetTopStore';
import { useGetYears } from '@/features/summary/hooks/useGetYears';

export default function SummaryPage() {
  const { dataTopProduct } = useGetTopProduct();
  const { dataTopStore } = useGetTopStore();
  const { dataTopBuyer, isLoading } = useGetTopBuyer();
  const { dataYears } = useGetYears();

  if (isLoading)
    return (
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <span className='loading loading-bars loading-lg h-[50px]'></span>
        <div>Finding Summary</div>
      </div>
    );

  return (
    <div className='min-h-screen pt-5'>
      <div className='flex flex-col'>
        <h1 className='font-bold text-2xl text-gray-800 px-4'>SUMMARY</h1>
        <TopCard years={dataYears} />
        <div className='p-4 md:grid-cols-3 grid grid-cols-1 gap-4'>
          <div className='col-span-2'>
            <BarChart />
          </div>
          <TopBuyer topBuyer={dataTopBuyer} />
          <TopProduct topProduct={dataTopProduct} />
          <TopStore topStore={dataTopStore} />
        </div>
      </div>
    </div>
  );
}
