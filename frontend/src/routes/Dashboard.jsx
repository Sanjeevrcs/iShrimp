import dash from './../assets/dash.mp4';

export default function Dashboard() {
  return (
    <div className='p-4'>
      <h1 className='scroll-m-20 text-4xl font-bold tracking-tight py-5'>
        Dashboard
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex-grow'>
          <video
            src=''
            className='w-full h-full rounded-lg shadow-md'
            controls
          />
        </div>
        <div className='flex-grow'>
          <video
            src={dash}
            className='w-full h-full rounded-lg shadow-md'
            controls
            autoPlay
          />
        </div>
      </div>
    </div>
  );
}
