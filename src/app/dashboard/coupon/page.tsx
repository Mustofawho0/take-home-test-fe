'use client';
import * as React from 'react';
import TableCoupon from '@/components/table/coupon';
import ModalCreateCoupon from '@/components/modal/create-coupon';
import { useGetCoupon } from '@/features/coupon/hooks/useGetCoupon';
import { Pagination } from 'antd';

export default function CouponPage() {
  const [page, setPage]: any = React.useState(1);
  const [perPage, setPerPage]: any = React.useState(10);
  const { dataCoupon, isLoading } = useGetCoupon(page, perPage);

  if (isLoading)
    return (
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <span className='loading loading-bars loading-lg h-[50px]'></span>
        <div>Finding Coupon</div>
      </div>
    );

  return (
    <div className='min-h-screen pt-5'>
      <div className='flex flex-col'>
        <h1 className='font-bold text-2xl text-gray-800 px-4'>COUPON</h1>
        <div className='flex items-center justify-end px-10 gap-5'>
          <ModalCreateCoupon />
        </div>
        <TableCoupon coupon={dataCoupon} />
        <div className='flex justify-center px-10 mt-4'>
          <Pagination
            current={page}
            pageSize={perPage}
            total={dataCoupon?.total || 0}
            onChange={(page) => setPage(page)}
          />
        </div>
      </div>
    </div>
  );
}
