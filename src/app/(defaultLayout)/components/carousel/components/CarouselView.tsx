import BlueBackground from '@/assets/backgrounds/carousel/BlueBackground'
import Link from 'next/link'
import { MdArrowForwardIos, MdArrowBackIosNew  } from 'react-icons/md'

const CarouselView = () => {
    return (
        <div className='relative grid w-full grid-rows-[500px_70px] [grid-template-areas:"content"_"navigation"]'>
            <div className='relative [grid-area:content]'>
                <div className='absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-orange-500 via-amber-400 to-orange-500'>
                    <BlueBackground />
                    {/* bg2 */}
                    {/* bg3 */}
                </div>
            </div>

            <div className='relative m-[0_auto] grid items-center text-center [grid-area:content] [grid-template-areas:"viewbox"]'>
                <div className='z-[1] grid [grid-area:viewbox]'>
                    <button className='flex h-[35px] w-[35px] translate-x-[-35px] cursor-pointer items-center justify-center bg-transparent fill-black duration-300 hover:bg-[#1e1f24b4] hover:fill-[#fff]'>
                        <MdArrowBackIosNew size={28} />
                    </button>
                </div>

                <div className='z-[1] w-[1000px] overflow-hidden text-center [grid-area:viewbox]'>
                    <div className='grid h-[20px] grid-cols-1 grid-rows-1'></div>
                </div>

                <div className='z-[1] grid [grid-area:viewbox]'>
                    <button className='flex h-[35px] w-[35px] translate-x-[35px] cursor-pointer items-center justify-center justify-self-end bg-transparent fill-black duration-300 hover:bg-[#1e1f24b4] hover:fill-[#fff]'>
                        <MdArrowForwardIos size={28} />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CarouselView
