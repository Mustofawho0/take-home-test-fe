import Link from 'next/link';
export default function TableOrder({ order }: any) {
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
              <th className='p-3'>Invoince</th>
              <th className='p-3'>Name</th>
              <th className='p-3'>Grand Total</th>
              <th className='p-3'>Phone</th>
              <th className='p-3'>Store</th>
              <th className='p-3'>Coupon</th>
              <th className='p-3 text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {order?.items.map((o: any, i: number) => (
              <tr
                key={i}
                className='border-b border-opacity-20 border-gray-300 bg-gray-50'
              >
                <td className='p-3'>
                  <p>{o.invoice_no}</p>
                </td>
                <td className='p-3'>
                  <p>{o.buyer.name}</p>
                </td>
                <td className='p-3'>
                  <p>
                    {o.grandtotal.toLocaleString('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                    })}
                  </p>
                </td>
                <td className='p-3'>
                  <p>{o.buyer.phone}</p>
                </td>
                <td className='p-3'>
                  <p>{o.store.name}</p>
                </td>
                <td className='p-3'>
                  <p>{o.coupon.name || '-'}</p>
                </td>
                <td className='flex justify-center items-center'>
                  <Link href={`/dashboard/order/${o.invoice_no}`}>
                    <button className='btn btn-info btn-sm text-xs w-14 text-white'>
                      View
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
