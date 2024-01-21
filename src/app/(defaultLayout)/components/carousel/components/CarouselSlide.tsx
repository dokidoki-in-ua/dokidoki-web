import Link from 'next/link'

const CarouselSlide = ({
    children,
    setIsPaused,
}: {
    children: React.ReactNode
    setIsPaused: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    return (
        <div className='visible h-[500px] snap-start duration-300 ease-in-out'>
            <div className='inline-flex h-full w-[1000px] items-center justify-center overflow-hidden'>
                <Link href={'/'}>
                    <div
                        className='h-[421px] w-[720px]'
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {children}
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default CarouselSlide
