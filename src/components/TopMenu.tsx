import TopMenuItem from './TopMenuItem';
import styles from './topmenu.module.css';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Link from 'next/link';

export default async function TopMenu() {

    const session = await getServerSession(authOptions)

    return (
        <div className={styles.menucontainer}>
            <Image src={'/img/logo.png'} className={styles.logoimg} alt='logo' width={0} height={0} sizes='100vh' />
            <TopMenuItem title='Select Car' pageRef='/car/' />
            <TopMenuItem title='Reservation' pageRef='/reservations/' />
            <TopMenuItem title='About' pageRef='/about/' />
            

            <div className='flex flex-row absolute left left-0 h-full'>
                <TopMenuItem title='Cart' pageRef='/cart/' />
                {
                    session? <Link href="/api/auth/signout"><div className='flex items-center h-full px-2 text-cyan-500 text-sm'>
                            Sign-Out of {session.user?.name}
                        </div></Link>
                    : <Link href="/api/auth/signin" className='flex items-center h-full px-2 text-cyan-500 text-sm'>Sign-In</Link>
                }
            </div>
        </div>
    );
}