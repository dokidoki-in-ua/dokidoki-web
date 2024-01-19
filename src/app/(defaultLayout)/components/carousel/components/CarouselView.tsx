import BlueBackground from "@/assets/backgrounds/carousel/BlueBackground"

const CarouselView = () => {
    return (
        <div className='relative grid w-full grid-rows-[500px_70px]'>
            <div className='relative row-start-1'>
                <div className='absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-orange-500 via-amber-400 to-orange-500'>
                    <BlueBackground/>
                </div>
            </div>

            <div className='carousel wrapper'></div>
        </div>
    )
}
export default CarouselView
