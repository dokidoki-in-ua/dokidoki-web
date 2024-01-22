import BlueBackground from '@/assets/backgrounds/carousel/BlueBackground'
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md'
import { Children, useState } from 'react'
import CarouselTabs from './CarouselTabs'
import { Slide } from '@/types/carousel.types'
import OrangeBackground from '@/assets/backgrounds/carousel/OrangeBackground'
import BubblesBackground from '@/assets/backgrounds/carousel/BubblesBackground'

interface CarouselViewProps {
    children: React.ReactNode
    currentIndex: number
    updateIndex: (newIndex: number) => void
    trackRef: React.RefObject<HTMLDivElement>
    slides: Slide[]
    bgActive: number
}

const CarouselView: React.FC<CarouselViewProps> = ({
    children,
    currentIndex,
    updateIndex,
    trackRef,
    slides,
    bgActive,
}) => {
    const [animationPaused, setAnimationPaused] = useState<string>('running')

    return (
        <div className='relative grid w-full grid-rows-[500px_70px] [grid-template-areas:"content"_"tabs"]'>
            <div className='relative [grid-area:content]'>
                <div className='absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-orange-500 via-amber-400 to-orange-500'>
                    <BlueBackground bgActive={bgActive} />
                    <OrangeBackground bgActive={bgActive} />
                    <BubblesBackground bgActive={bgActive} />
                </div>
            </div>

            <div className='relative m-[0_auto] grid items-center text-center [grid-area:content] [grid-template-areas:"viewbox"]'>
                <div className='z-[0] grid [grid-area:viewbox]'>
                    <button
                        className={`flex h-[35px] w-[35px] translate-x-[-35px] cursor-pointer items-center justify-center bg-transparent fill-black duration-300 hover:bg-[#1e1f24b4] hover:fill-[#fff] ${currentIndex === 0 ? 'hidden' : ''}`}
                        onClick={() => {
                            updateIndex(currentIndex - 1)
                        }}
                    >
                        <MdArrowBackIosNew size={28} />
                    </button>
                </div>

                <div className='z-[1] w-[1000px] overflow-hidden text-center [grid-area:viewbox]'>
                    <div
                        className='grid grid-flow-col grid-rows-1 overflow-hidden overscroll-x-none [scroll-snap-type:x_mandatory]'
                        ref={trackRef}
                        onMouseEnter={() => setAnimationPaused('paused')}
                        onMouseLeave={() => setAnimationPaused('running')}
                    >
                        {children}
                    </div>
                </div>

                <div className='z-[0] grid [grid-area:viewbox]'>
                    <button
                        className={`flex h-[35px] w-[35px] translate-x-[35px] cursor-pointer items-center justify-center justify-self-end bg-transparent fill-black duration-300 hover:bg-[#1e1f24b4] hover:fill-[#fff] ${currentIndex === Children.count(children) - 1 ? 'hidden' : ''}`}
                        onClick={() => {
                            updateIndex(currentIndex + 1)
                        }}
                    >
                        <MdArrowForwardIos size={28} />
                    </button>
                </div>
            </div>

            <CarouselTabs
                slides={slides}
                currentIndex={currentIndex}
                updateIndex={updateIndex}
                animationPaused={animationPaused}
                setAnimationPaused={setAnimationPaused}
            />
        </div>
    )
}
export default CarouselView
