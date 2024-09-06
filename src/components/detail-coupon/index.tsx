export default function DetailCouponPage({
  code,
  name,
  start_date,
  end_date,
}: {
  code: string;
  name: string;
  start_date: string;
  end_date: string;
}) {
  return (
    <div className='grid grid-cols-3 px-4 gap-10 pt-10'>
      <div className='col-span-2 border-1 border-gray-200 bg-base-100 shadow-lg rounded-xl h-[70vh] w-[35vw]'>
        <h1 className='px-10 py-5 text-lg font-semibold'>Information Coupon</h1>
        <div className='border border-b-gray-400 w-[32vw] flex items-center justify-center m-auto'></div>
        <div className='flex flex-col px-10 pt-5 space-y-4'>
          <div className='flex flex-col'>
            <label className='font-semibold text-gray-600' htmlFor='code'>
              Code
            </label>
            <input
              type='text'
              id='code'
              value={code}
              className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              disabled
            />
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold text-gray-600' htmlFor='name'>
              Name Coupon
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
            <label className='font-semibold text-gray-600' htmlFor='start_date'>
              Start Date
            </label>
            <input
              type='date'
              id='start_date'
              value={start_date}
              className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              disabled
            />
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold text-gray-600' htmlFor='end_date'>
              End Date
            </label>
            <input
              type='date'
              id='end_date'
              value={end_date}
              className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
}
