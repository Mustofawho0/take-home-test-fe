'use client';
import * as React from 'react';
import TableOrder from '@/components/table/order';
import { useGetOrder } from '@/features/order/hooks/useGetOrder';
import { Pagination } from 'antd';

export default function OrderPage() {
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);

  const { dataOrder, isLoading } = useGetOrder(page, perPage);

  if (isLoading)
    return (
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <span className='loading loading-bars loading-lg h-[50px]'></span>
        <div>Finding Order</div>
      </div>
    );
  return (
    <div className='min-h-screen pt-5'>
      <h1 className='font-bold text-2xl text-gray-800 px-4'>ORDER</h1>
      <TableOrder order={dataOrder} />
      <div className='flex justify-center px-10 mt-4'>
        <Pagination
          current={page}
          pageSize={perPage}
          total={dataOrder?.total || 0}
          onChange={(page) => setPage(page)}
        />
      </div>
    </div>
  );
}
