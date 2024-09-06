import { FaStore } from 'react-icons/fa';

export default function TopStore({ topStore }: any) {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll shadow-lg'>
      <h1 className='font-semibold'>Top Store</h1>
      <ul>
        {topStore?.map((t: any, i: number) => (
          <li
            key={i}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
          >
            <div className='bg-blue-100 rounded-lg p-3'>
              <FaStore className='text-blue-800' />
            </div>
            <div className='pl-4'>
              <p className='text-gray-800 font-bold'>{t.name}</p>
              <p className='text-gray-500 text-sm'>{t.city}</p>
              <p className='text-gray-400 text-sm'>{t.amount}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
