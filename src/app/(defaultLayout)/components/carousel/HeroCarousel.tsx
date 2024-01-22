'use client'
// dev imports
import devImage from '@/_dev/imgs/q8WZIIglNZ7dkhovKnP2h3nCWDVSvYSw3rXK9YxP.webp'
// ====
import CarouselLogic from './components/CarouselLogic'
import { useState } from 'react'
import CarouselSlide from './components/CarouselSlide'
import Image from 'next/image'
import { Slide } from '@/types/carousel.types'

// prettier-ignore
const slides: Slide[] = [
    { id: 6, anime_id: 1084, content_path: devImage, alias: 'hell-s-paradise', title: 'Пекельний рай' },
    { id: 5, anime_id: 1084, content_path: devImage, alias: 'hell-s-paradise', title: 'Пекельний рай' },
    { id: 4, anime_id: 1084, content_path: devImage, alias: 'hell-s-paradise', title: 'Пекельний рай' },
    { id: 3, anime_id: 1084, content_path: devImage, alias: 'hell-s-paradise', title: 'Пекельний рай' },
    { id: 2, anime_id: 1084, content_path: devImage, alias: 'hell-s-paradise', title: 'Пекельний рай' },
    { id: 1, anime_id: 1084, content_path: devImage, alias: 'hell-s-paradise', title: 'Пекельний рай' },
];

const HeroCarousel = () => {
    return (
        <CarouselLogic slides={slides}>
            {slides.map((item) => (
                <CarouselSlide key={item.id}>
                    <picture>
                        <Image
                            src={item.content_path}
                            alt={item.title}
                            title={item.title}
                            priority
                        />
                    </picture>
                </CarouselSlide>
            ))}
        </CarouselLogic>
    )
}
export default HeroCarousel
