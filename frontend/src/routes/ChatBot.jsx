import { Input } from '@/components/ui/input';

const ChatBot = () => {
  return (
    <div className=''>
      <h1 className='scroll-m-20 text-4xl font-bold tracking-tight py-5'>
        Chat Bot
      </h1>
      <div className='flex flex-col bg-primary justify-between'></div>
      <Input
        type='text'
        placeholder='Enter text to talk'
        className='absolute bottom-0 left-1/2 w-[calc(100%-5rem)] -translate-x-1/2 mb-10'
      />
    </div>
  );
};

export default ChatBot;
