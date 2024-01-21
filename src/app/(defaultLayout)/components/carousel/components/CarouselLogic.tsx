import React, { Children, useCallback, useRef, useState } from 'react'
import internal from 'stream'
import CarouselView from './CarouselView'
import { Slide } from '@/types/carousel.types'

interface CarouselLogicProps {
    children: React.ReactNode
    isPaused: boolean
    slides: Slide[] // Add a more specific interface for your slides array
    setIsPaused: React.Dispatch<React.SetStateAction<boolean>>
}

const CarouselLogic: React.FC<CarouselLogicProps> = ({
    children,
    isPaused,
    slides,
    setIsPaused,
}) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const trackRef = useRef<HTMLDivElement>(null)
    const [bgActive, setBgActive] = useState<number>(0)

    const animationPaused = isPaused ? 'paused' : 'running'

    const updateIndex = useCallback(
        (newIndex: number) => {
            if (newIndex < 0) {
                newIndex = Children.count(children) - 1
            } else if (newIndex >= Children.count(children)) {
                newIndex = 0
            }

            const direction = newIndex > currentIndex ? 1 : -1
            const tabIndices = []

            for (let i = currentIndex; i !== newIndex; i += direction) {
                tabIndices.push(i)
            }

            tabIndices.push(newIndex)

            tabIndices.forEach((index, i) => {
                setTimeout(
                    () => {
                        const tab = document.getElementById(
                            `.carousel_tab:nth-child(${index + 1})`
                        )
                        if (tab) {
                            // tab.classList.add(styles.activeTab)
                        }
                        setTimeout(() => {
                            if (i === tabIndices.length - 1) {
                                setBgActive(index)
                            }
                        }, 500)
                        setCurrentIndex(index)
                    },
                    (i - 1) * 100
                )
            })

            if (trackRef.current) {
                const newScrollLeft = trackRef.current.clientWidth * newIndex
                trackRef.current.scrollTo({
                    left: newScrollLeft,
                    behavior: 'smooth',
                })
            }
        },
        [children, currentIndex]
    )

    return (
        <CarouselView
            currentIndex={currentIndex}
            updateIndex={updateIndex}
            trackRef={trackRef}
            slides={slides}
            animationPaused={animationPaused}
            setIsPaused={setIsPaused}
            bgActive={bgActive}
        >
            {Children.map(children, (child, index) => {
                return React.cloneElement(child as React.ReactElement, {
                    currentIndex: currentIndex,
                    index: index,
                })
            })}
        </CarouselView>
    )
}
export default CarouselLogic
