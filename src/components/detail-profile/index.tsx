import Image from 'next/image';
import ModalUpdateProfile from '@/components/modal/update-profile';
import ModalUpdatePassword from '@/components/modal/update-password';
export default function DetailProfilPage({
  code,
  name,
  phone,
  image,
  role,
}: {
  code: string;
  name: string;
  phone: string;
  image: string;
  role: string;
}) {
  return (
    <div className='grid grid-cols-3 px-4 gap-10 pt-10'>
      <div className='border-1 border-gray-200 bg-base-100 shadow-lg rounded-xl h-[70vh]'>
        <h1 className='px-10 py-5 text-lg font-semibold'>My Profile</h1>
        <div className='border border-b-gray-400 w-[25vw] flex items-center justify-center m-auto'></div>
        <div className='flex justify-center pt-5'>
          <Image
            src={image || '/person-svgrepo-com.svg'}
            alt=''
            width={10000}
            height={10000}
            loading='lazy'
            className='object-cover w-[20vw] h-[50vh]'
          />
        </div>
      </div>
      <div className='col-span-2 border-1 border-gray-200 bg-base-100 shadow-lg rounded-xl h-[70vh] w-[35vw]'>
        <h1 className='px-10 py-5 text-lg font-semibold'>
          Information Account
        </h1>
        <div className='border border-b-gray-400 w-[32vw] flex items-center justify-center m-auto'></div>
        <div className='flex flex-col px-10 pt-5 space-y-4'>
          <div className='flex flex-col'>
            <label className='font-semibold text-gray-600' htmlFor='name'>
              Name
            </label>
            <input
              type='text'
              id='name'
              value={name}
              className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              disabled
            />
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold text-gray-600' htmlFor='email'>
              Role Code
            </label>
            <input
              type='text'
              id='role_code'
              value={code}
              className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              disabled
            />
          </div>

          <div className='flex flex-col'>
            <label className='font-semibold text-gray-600' htmlFor='phone'>
              Phone
            </label>
            <input
              type='tel'
              id='phone'
              value={phone}
              className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              disabled
            />
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold text-gray-600' htmlFor='address'>
              Role Name
            </label>
            <input
              type='text'
              id='role_name'
              value={role}
              className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              disabled
            />
          </div>
        </div>
        <div className='flex justify-center gap-2 pt-5'>
          <ModalUpdatePassword />
          <ModalUpdateProfile />
        </div>
      </div>
    </div>
  );
}
