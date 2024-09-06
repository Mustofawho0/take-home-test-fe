'use client';
import { useUpdateCoupon } from '@/features/coupon/hooks/useUpdateCoupon';
import { useGetDetailCoupon } from '@/features/coupon/hooks/useGetDetailCoupon';
import { Formik, Field, Form } from 'formik';
export default function UpdateCodePage(params: any) {
  const { updateCoupon } = useUpdateCoupon();
  const { detailCoupon } = useGetDetailCoupon(params.params.code);
  return (
    <div className='flex items-center justify-center min-h-screen'>
      {detailCoupon ? (
        <Formik
          initialValues={{
            start_date: detailCoupon?.data.start_date,
            end_date: detailCoupon?.data.end_date,
          }}
          onSubmit={(values, { resetForm }) => {
            try {
              updateCoupon({
                code: params.params.code,
                start_date: values.start_date,
                end_date: values.end_date,
              });
            } catch (error) {
              console.log(error);
            }
            resetForm();
          }}
        >
          <div className='modal-box'>
            <h3 className='font-bold text-lg text-center'>UPDATE COUPON</h3>
            <Form>
              <div className='flex flex-col pb-2'>
                <label className='font-semibold text-gray-600' htmlFor='code'>
                  Code
                </label>
                <input
                  type='test'
                  name='code'
                  value={detailCoupon?.data.code}
                  className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  disabled
                />
              </div>
              <div className='flex flex-col pb-2'>
                <label className='font-semibold text-gray-600' htmlFor='name'>
                  Name
                </label>
                <input
                  type='test'
                  name='name'
                  value={detailCoupon?.data.name}
                  className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  disabled
                />
              </div>
              <div className='flex flex-col pb-2'>
                <label
                  className='font-semibold text-gray-600'
                  htmlFor='start_date'
                >
                  Start Date
                </label>
                <Field
                  type='date'
                  name='start_date'
                  className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div className='flex flex-col pb-2'>
                <label
                  className='font-semibold text-gray-600'
                  htmlFor='end_date'
                >
                  End Date
                </label>
                <Field
                  type='date'
                  name='end_date'
                  className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div className='flex flex-col justify-center'>
                <button
                  type='submit'
                  className='border-2 border-blue-600 text-blue-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-600 hover:text-white'
                >
                  Save Changes
                </button>
                <div className='text-xs text-red-500 flex justify-center pt-5'>
                  *Click esc to close
                </div>
              </div>
            </Form>
          </div>
        </Formik>
      ) : (
        <div>Loadingg....</div>
      )}
    </div>
  );
}
