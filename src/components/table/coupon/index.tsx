import Link from 'next/link';
export default function TableCoupon({ coupon }: any) {
  return (
    <div className='container p-2 mx-auto sm:p-4 text-gray-800'>
      <div className='overflow-x-auto rounded-lg'>
        <table className='min-w-full text-xs'>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className='' />
          </colgroup>
          <thead className='bg-blue-200'>
            <tr className='text-left'>
              <th className='p-3'>Code</th>
              <th className='p-3'>Name</th>
              <th className='p-3'>Start Date</th>
              <th className='p-3'>End Date</th>

              <th className='p-3 text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {coupon?.items?.map((c: any, i: number) => (
              <tr
                key={i}
                className='border-b border-opacity-20 border-gray-300 bg-gray-50'
              >
                <td className='p-3'>
                  <p>{c.code}</p>
                </td>
                <td className='p-3'>
                  <p>{c.name}</p>
                </td>
                <td className='p-3'>
                  <p>{c.start_date}</p>
                </td>
                <td className='p-3'>
                  <p>{c.end_date}</p>
                </td>

                <td className='p-3 text-center flex items-center justify-center gap-2'>
                  <Link href={`/dashboard/coupon/${c.code}`}>
                    <button className='btn btn-info btn-sm text-xs w-14 text-white'>
                      View
                    </button>
                  </Link>
                  <Link href={`/dashboard/coupon/update/${c.code}`}>
                    <button className='btn btn-success btn-sm text-xs w-14 text-white'>
                      Edit
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
