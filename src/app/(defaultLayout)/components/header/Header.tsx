import { Logo } from '@/components/svg/Logo'
import Link from 'next/link'
import { RiArrowDropDownFill } from 'react-icons/ri'

const Header = () => {
    return (
        <div className='fixed z-10 flex h-[60px] w-screen justify-center bg-primary '>
            <div className='flex w-10/12 justify-between px-[20px]'>
                <div className='flex h-full'>
                    <Link
                        href={'/'}
                        className='flex items-center fill-secondary px-[10px] duration-200 hover:fill-white'
                    >
                        <Logo className='w-[150px]' />
                    </Link>

                    <div className='flex'>
                        <div className='flex cursor-pointer items-center px-2 duration-200 hover:bg-primary-hover hover:text-font-hover'>
                            <span>Аніме</span>
                            <RiArrowDropDownFill size={22} />
                        </div>

                        <Link
                            href={''}
                            className='flex items-center px-2 duration-200 hover:bg-primary-hover hover:text-font-hover'
                        >
                            Новини
                        </Link>

                        <Link
                            href={''}
                            className='flex items-center px-2 duration-200 hover:bg-primary-hover hover:text-font-hover'
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
