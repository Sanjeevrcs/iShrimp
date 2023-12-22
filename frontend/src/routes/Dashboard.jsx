export default function Dashboard() {
  return (
    <div className='p-4'>
      <h1 className='scroll-m-20 text-4xl font-bold tracking-tight py-5'>
        Dashboard
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex-grow'>
          <video
            src='https://ishrimpapi.iqubekct.ac.in/media/videoutt.mp4'
            className='w-full h-full rounded-lg shadow-lg'
            controls
            autoPlay
          />
        </div>
        <div className='flex-grow'>
          <video
            src='https://ishrimpapi.iqubekct.ac.in/media/videout.mp4'
            className='w-full h-full rounded-lg shadow-lg'
            autoPlay
            controls
          />
        </div>
      </div>
      <br />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex-grow'>
          <video
            src='http://localhost:8502'
            className='w-full h-full rounded-lg shadow-lg'
            controls
            autoPlay
          />
        </div>
        <div className='flex-grow'>
          <video
            src='https://ishrimpapi.iqubekct.ac.in/media/dash.mp4'
            className='w-full h-full rounded-lg shadow-lg'
            controls
            autoPlay
          />
        </div>
      </div>
      <br />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex-grow'>
          <video
            src='https://ishrimpapi.iqubekct.ac.in/media/videout1.mp4'
            className='w-full h-full rounded-lg shadow-md'
            autoPlay
          />
        </div>
        <div className='flex-grow'>
          <video
            src='https://ishrimpapi.iqubekct.ac.in/media/videout2.mp4'
            className='w-full h-full rounded-lg shadow-md'
            autoPlay
          />
        </div>
      </div>
    </div>
  );
}
