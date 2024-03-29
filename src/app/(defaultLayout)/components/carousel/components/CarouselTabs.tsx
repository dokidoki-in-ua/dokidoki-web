import { Slide } from '@/types/carousel.types'
import { Dispatch, SetStateAction, useRef } from 'react'

interface CarouselTabsProps {
    slides: Slide[]
    currentIndex: number
    updateIndex: (newIndex: number) => void
    animationPaused: string
    setAnimationPaused: Dispatch<SetStateAction<string>>
}

const CarouselTabs: React.FC<CarouselTabsProps> = ({
    slides,
    currentIndex,
    updateIndex,
    animationPaused,
    setAnimationPaused,
}) => {
    const tabRef = useRef<HTMLDivElement>(null)

    const handleAnimationEnd = () => {
        updateIndex(currentIndex + 1)
    }

    return (
        <div className='relative w-full [grid-area:tabs]'>
            <div className='grid auto-cols-[minmax(auto,_10.75rem)] grid-flow-col justify-center gap-3 pt-5'>
                {slides.map((item, index) => {
                    return (
                        <button
                            className={`relative cursor-pointer  p-[0.9rem_0.5rem] duration-200  hover:text-font-hover bg-primary hover:bg-primary-hover active:bg-primary-active  ${index === currentIndex ? 'bg-[#2b354d] text-white hover:bg-[#374463] active:bg-[#232c3f]' : ''}`}
                            onClick={() => {
                                updateIndex(index)
                            }}
                            key={item.id}
                            onMouseEnter={() => setAnimationPaused('paused')}
                            onMouseLeave={() => setAnimationPaused('running')}
                        >
                            <div
                                ref={tabRef}
                                className={
                                    index === currentIndex
                                        ? `absolute left-0 top-0 h-[3px] w-full scale-y-100 bg-[#ffffff80] opacity-100 duration-150 before:block before:h-full before:w-0 before:animate-progress before:bg-secondary before:content-[""] before:[animation-play-state:${animationPaused}]`
                                        : ''
                                }
                                onAnimationEnd={handleAnimationEnd}
                            />
                            <span className='line-clamp-2 max-h-8 text-left text-[13px] font-bold leading-tight'>
                                {item.title}
                            </span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
export default CarouselTabs
