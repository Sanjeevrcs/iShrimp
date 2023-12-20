import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/Icons';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 3000);
  }

  return (
    <div className='h-screen bg-background font-sans antialiased __variable_a64ecd text-foreground flex flex-col items-center justify-center'>
      <form
        onSubmit={onSubmit}
        className='flex-col items-center flex justify-center h-full w-2/4 gap-5'>
        <h1 className='scroll-m-20 text-4xl font-bold tracking-tight py-5'>
          iShrimp 🦐
        </h1>
        <div className='flex-col flex w-full gap-3'>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            placeholder='name@example.com'
            type='email'
            autoCapitalize='none'
            autoComplete='email'
            autoCorrect='off'
            disabled={isLoading}
          />
        </div>
        <div className='flex-col flex w-full gap-3'>
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            placeholder='Password'
            type='password'
            autoCapitalize='none'
            autoComplete='password'
            autoCorrect='off'
            disabled={isLoading}
          />
        </div>

        <Button disabled={isLoading} className='w-full'>
          {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
          Sign In with Email
        </Button>
      </form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
      </div>
    </div>
  );
}
