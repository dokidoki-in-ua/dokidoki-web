import { Logo } from '@/components/svg/Logo'
import Link from 'next/link'
import { RiArrowDropDownFill } from 'react-icons/ri'

const Header = () => {
    return (
        <div className='h-[60px] fixed w-screen flex justify-center z-10 bg-primary '>
            <div className='w-10/12 flex justify-between px-[20px]'>
                <div className='flex h-full'>
                    <Link
                        href={'/'}
                        className='px-[10px] fill-secondary hover:fill-white duration-200 flex items-center'
                    >
                        <Logo className='w-[150px]' />
                    </Link>
                    <div className='flex'>
                        <div className='flex items-center px-2 hover:bg-primary-hover hover:text-font-hover duration-200 cursor-pointer'>
                            <span>Аніме</span>
                            <RiArrowDropDownFill size={22} />
                        </div>
                        <Link
                            href={''}
                            className='flex items-center px-2 hover:bg-primary-hover hover:text-font-hover duration-200'
                        >
                            Новини
                        </Link>
                        <Link
                            href={''}
                            className='flex items-center px-2 hover:bg-primary-hover hover:text-font-hover duration-200'
                        >
                            Манга
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header
