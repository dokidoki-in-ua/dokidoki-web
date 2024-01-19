import { Children, useCallback, useRef, useState } from 'react'
import internal from 'stream'
import CarouselView from './CarouselView'

const CarouselLogic = ({
    children,
    isPaused,
}: {
    children: React.ReactNode
    isPaused: boolean
}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const trackRef = useRef(null)
    const [bgActive, setBgActive] = useState(0)

    const animationPaused = isPaused ? 'paused' : 'running'

    // const updateIndex = useCallback(
    //     (newIndex: number) => {
    //         if (newIndex < 0) {
    //             newIndex = Children.count(children) - 1
    //         } else if (newIndex >= Children.count(children)) {
    //             newIndex = 0
    //         }

    //         const direction = newIndex > currentIndex ? 1 : -1
    //         const tabIndices = []

    //         for (let i = currentIndex; i !== newIndex; i += direction) {
    //             tabIndices.push(i)
    //         }

    //         tabIndices.push(newIndex)

    //         tabIndices.forEach((index, i) => {
    //             setTimeout(() => {
    //                 const tab = document.getElementById(
    //                     `.carousel_tab:nth-child(${index + 1})`
    //                 )
    //                 if (tab) {
    //                     tab.classList.add(styles.activeTab)
    //                 }
    //                 setTimeout(() => {
    //                     if (i === tabIndices.length - 1) {
    //                         setBgActive(index)
    //                     }
    //                 }, 500)
    //                 setCurrentIndex(index)
    //             }, (i - 1) * 100)
    //         })

    //         if (trackRef.current) {
    //             const newScrollLeft = trackRef.current.clientWidth * newIndex
    //             trackRef.current.scrollTo({
    //                 left: newScrollLeft,
    //                 behavior: 'smooth',
    //             })
    //         }
    //     },
    //     [children, currentIndex]
    // )

    return (
        <CarouselView>
            
        </CarouselView>
    )
}
export default CarouselLogic
