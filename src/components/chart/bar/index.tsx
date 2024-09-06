'use client';
import * as React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useGetSummaryMonthly } from '@/features/summary/hooks/useGetMonthly';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface DatasetsProps {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
}

interface ChartDataProps {
  labels: string[];
  datasets: DatasetsProps[];
}

export default function BarChart() {
  const [chartData, setChartData] = React.useState<ChartDataProps>({
    labels: [],
    datasets: [],
  });
  const [chartOptions, setChartOptions] = React.useState({});
  const [startMonth, setStartMonth] = React.useState('2024-01');
  const [endMonth, setEndMonth] = React.useState('2024-12');
  const { dataMonthly } = useGetSummaryMonthly(startMonth, endMonth);

  React.useEffect(() => {
    if (dataMonthly) {
      const dataLabels = dataMonthly?.map((items: any) => items.month);
      const data = dataMonthly?.map((items: any) => items.orders);
      setChartData({
        labels: dataLabels || [],
        datasets: [
          {
            label: 'MONTH',
            data: data || [],
            borderColor: 'rgb(53,162,235)',
            backgroundColor: 'rgba(53, 162, 235, 0.4)',
          },
        ],
      });

      setChartOptions({
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
          },
        },
        maintainAspectRatio: true,
        responsive: true,
      });
    }
  }, [dataMonthly]);

  const handleFilter = () => {
    const startMonthValue = (
      document.getElementById('startMonth') as HTMLInputElement
    ).value;
    const endMonthValue = (
      document.getElementById('endMonth') as HTMLInputElement
    ).value;

    setStartMonth(startMonthValue);
    setEndMonth(endMonthValue);
  };

  return (
    <div>
      <div className='flex gap-3 pb-2'>
        <input
          type='month'
          id='startMonth'
          defaultValue={startMonth}
          className='border p-2 rounded-lg'
        />
        <input
          type='month'
          id='endMonth'
          defaultValue={endMonth}
          className='border p-2 rounded-lg'
        />
        <button
          className='btn bg-blue-600 text-white hover:bg-blue-600 hover:border-blue-600'
          onClick={handleFilter}
        >
          Filter
        </button>
      </div>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white shadow-lg'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
