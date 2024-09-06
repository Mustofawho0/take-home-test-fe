'use client';
import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';
import { useUserContext } from '@/supports/context/user-context';
import { removeCookie } from '@/utils/cookie-helper';
import { useRouter } from 'next/navigation';
import { MdLogout, MdPayment, MdInsertChart } from 'react-icons/md';
import { RiCoupon3Fill } from 'react-icons/ri';
import Swal from 'sweetalert2';

export const SidebarDashboard = () => {
  const { dataUser, setUser }: any = useUserContext();
  const [isLogin, setIsLogin] = React.useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await removeCookie();
    setUser(null);
    setIsLogin(false);
    Swal.fire({
      title: 'Logout Success!',
      icon: 'success',
    });
    router.push('/');
  };

  return (
    <div className='flex'>
      <div className='fixed h-screen mobile:w-20 p-4 w-auto bg-white border-r-[1px] rounded-r-lg flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <div className='flex items-center py-2 space-x-3'>
            <Image
              src={dataUser?.image || '/person-svgrepo-com.svg'}
              alt='profil'
              width={10000}
              height={10000}
              loading='lazy'
              className='w-10 h-10 rounded-full bg-gray-500'
            />
            <div>
              <h2 className='font-semibold'>{dataUser?.name || 'Guest'}</h2>
              <span className='flex items-center space-x-1'>
                <Link
                  rel='noopener noreferrer'
                  href={`/dashboard/profile`}
                  className='text-xs hover:underline'
                >
                  View profile
                </Link>
              </span>
            </div>
          </div>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link
            rel='noopener noreferrer'
            href={'/dashboard/summary'}
            className='flex items-center space-x-2 pt-5 w-full'
          >
            <MdInsertChart className='w-5 h-5 fill-current' />
            <span className='font-sans font-semibold tracking-wide hover:text-red-600'>
              SUMMARY
            </span>
          </Link>
          <Link
            rel='noopener noreferrer'
            href={'/dashboard/coupon'}
            className='flex items-center space-x-2 pt-5 w-full'
          >
            <RiCoupon3Fill className='w-5 h-5 fill-current' />
            <span className='font-sans font-semibold tracking-wide hover:text-red-600'>
              COUPON
            </span>
          </Link>
          <Link
            rel='noopener noreferrer'
            href={'/dashboard/order'}
            className='flex items-center space-x-2 pt-5 w-full'
          >
            <MdPayment className='w-5 h-5 fill-current' />
            <span className='font-sans font-semibold tracking-wide hover:text-red-600'>
              ORDER
            </span>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <button
            rel='noopener noreferrer'
            onClick={handleLogout}
            className='flex items-center space-x-2 pt-5 w-full'
          >
            <MdLogout className='w-5 h-5 fill-current' />
            <span className='font-sans font-semibold tracking-wide hover:text-red-600'>
              LOGOUT
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
