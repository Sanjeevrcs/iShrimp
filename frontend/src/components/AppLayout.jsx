import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { UserIcon } from '@/components/UserIcon';
import PropTypes from 'prop-types';

export default function AppLayout({ children }) {
  return (
    <div className='bg-background font-sans antialiased __variable_a64ecd text-foreground'>
      <nav
        className={cn(
          'flex items-center space-x-4 lg:space-x-6 justify-between py-3 px-5 border-b'
        )}>
        <div className='flex items-center space-x-4 lg:space-x-6'>
          <Link
            to='/dashboard'
            className='text-md font-medium transition-colors hover:text-primary text-primary'>
            Dashboard
          </Link>

          <Link
            to='/trips'
            className='text-md font-medium text-muted-foreground transition-colors hover:text-primary'>
            Trips Details
          </Link>
          <Link
            to='/bots'
            className='text-md font-medium text-muted-foreground transition-colors hover:text-primary'>
            Bot Information
          </Link>
          <Link
            to='/chatbot'
            className='text-md font-medium text-muted-foreground transition-colors hover:text-primary'>
            Chat Bot
          </Link>
        </div>
        <div className='flex flex items-center space-x-4 lg:space-x-6'>
          {/* <Input
            type='search'
            placeholder='Search...'
            className='md:w-[100px] lg:w-[300px]'
          /> */}

          <UserIcon />
        </div>
      </nav>
      <main className='py-5 px-10 bg-background min-h-100'>{children}</main>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
