'use client';
import { useGetProfile } from '@/features/auth/hooks/useGetProfile';
import DetailProfilPage from '@/components/detail-profile';

export default function ProfilePage() {
  const { dataProfile, isLoading } = useGetProfile();

  if (isLoading)
    return (
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <span className='loading loading-bars loading-lg h-[50px]'></span>
        <div>Finding Profile</div>
      </div>
    );
  return (
    <div className='min-h-screen'>
      <div className='flex flex-col'>
        <h1 className='font-bold text-2xl text-gray-800 pb-4 px-4'>Profile</h1>
        <div className='border border-b-gray-400 w-[85vw] flex items-center justify-center m-auto'></div>
        <DetailProfilPage
          code={dataProfile?.role_code}
          name={dataProfile?.name}
          phone={dataProfile?.phone}
          image={dataProfile?.profile_image}
          role={dataProfile?.role_name}
        />
      </div>
    </div>
  );
}
