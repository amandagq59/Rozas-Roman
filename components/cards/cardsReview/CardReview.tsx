'use client';

import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';
import { HiOutlineCursorClick } from 'react-icons/hi';
import Link from 'next/link';

import { reviews } from '../../../data/reviews';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './cardReview.css';

export default function ReviewsCarousel() {
  const sliderRef = useRef<Slider>(null);
  const [mounted, setMounted] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setSlidesToShow(1);
      else if (width < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const NextArrow = ({ className, onClick }: any) => (
    <div className={`${className} custom-next`} onClick={onClick}>
      <GoChevronRight size={22} />
    </div>
  );

  const PrevArrow = ({ className, onClick }: any) => (
    <div className={`${className} custom-prev`} onClick={onClick}>
      <GoChevronLeft size={22} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: slidesToShow === 1,
    centerPadding: '0px',
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  if (!mounted) return null;

  return (
    <div className="reviews-wrapper container">
      <div className="reviews-carousel-container">
        <Slider ref={sliderRef} {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="carousel-slide">
              <article className="google-review-card">
                <div className="review-card-header">
                  <div className="reviewer-profile">
                    <div className="profile-image-container">
                      <Image
                        src={review?.image || '/placeholder.svg'}
                        alt={review?.name}
                        width={60}
                        height={60}
                        className="profile-image"
                      />
                    </div>

                    <div className="reviewer-info">
                      <h3 className="reviewer-name">{review?.name}</h3>
                      <div className="rating-stars">
                        {Array.from({ length: 5 }, (_, i) => (
                          <AiFillStar
                            key={i}
                            className={`star ${
                              i < review?.rating ? 'filled' : 'empty'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="google-badge">
                    <Image
                      src="/svg/google.svg"
                      alt="Google"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>

                <div className="review-content">
                  <p className="review-text">{review?.description}</p>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>

      <div className="button-ppl-wrapper text-center py-5">
        <Link
          href="https://www.google.com/search?q=ROZAS+ROM%C3%81N+ASESOR%C3%8DA+ABOGADOS+Rese%C3%B1as"
          target="_blank"
          className="button-ppl"
        >
          <HiOutlineCursorClick /> Ver todas las reseñas de Google
        </Link>
      </div>
    </div>
  );
}