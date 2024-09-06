export default function DetailOrder({ detail }: any) {
  return (
    <div className='min-h-screen p-4'>
      <div className='flex flex-col'>
        <h1 className='text-lg font-semibold tracking-wide'>
          Name : {detail?.buyer.name}
        </h1>
        <h1 className='text-lg font-semibold tracking-wide py-2'>
          Phone : {detail?.buyer.phone}
        </h1>
        <h1 className='text-lg font-semibold tracking-wide pb-2'>
          Invoince : {detail?.invoice_no}
        </h1>
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
                  <th className='p-3'>Store</th>
                  <th className='p-3'>City</th>
                  <th className='p-3'>Province</th>
                  <th className='p-3'>Coupon</th>
                  <th className='p-3'>Product</th>
                  <th className='p-3'>Quantity</th>
                  <th className='p-3'>Total Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-opacity-20 border-gray-300 bg-gray-50 overflow-scroll'>
                  <td className='p-3'>
                    <p>{detail?.store.name}</p>
                  </td>
                  <td className='p-3'>
                    <p>{detail?.store.city}</p>
                  </td>
                  <td className='p-3'>
                    <p>{detail?.store.province}</p>
                  </td>
                  <td className='p-3'>
                    <p>{detail?.coupon.name || '-'}</p>
                  </td>
                  {detail?.items.map((items: any, i: string) => (
                    <>
                      <div key={i}>
                        <td className='p-3 flex flex-col'>
                          <p>{items.product.name}</p>
                        </td>
                      </div>
                    </>
                  ))}
                  <td>
                    {detail?.items.map((items: any, i: string) => (
                      <>
                        <div key={i}>
                          <td className='p-3 flex flex-col'>
                            <p>{items.qty}</p>
                          </td>
                        </div>
                      </>
                    ))}
                  </td>
                  <td>
                    {detail?.items.map((items: any, i: string) => (
                      <>
                        <div key={i}>
                          <td className='p-3 flex flex-col'>
                            <p>
                              {items.total_price.toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'IDR',
                              })}
                            </p>
                          </td>
                        </div>
                      </>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
