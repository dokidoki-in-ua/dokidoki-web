import { Logo } from '@/components/svg/Logo'
import Link from 'next/link'
import { RiArrowDropDownFill } from 'react-icons/ri'

const Header = () => {
    return (
        <div className='h-[60px] fixed w-screen flex justify-center z-10 bg-primary '>
            <div className='w-10/12 flex justify-between px-[20px]'>
                <div className='flex h-full'>
                    <Link href={'/'} className='px-[10px] fill-secondary hover:fill-white duration-200'>
                        <Logo className='w-[150px]' />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Header
