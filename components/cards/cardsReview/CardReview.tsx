'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import { AiFillStar } from 'react-icons/ai';
import dynamic from 'next/dynamic';
import { reviews } from '../../../data/reviews';
import './cardReview.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { GoArrowRight } from 'react-icons/go';


export default function ReviewsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,

    slidesToShow: 3, // Desktop
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <div className="reviews-wrapper">

      <div className="reviews-carousel-container">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="carousel-slide">
              <article className="google-review-card">
                <div className="review-card-header">
                  <div className="reviewer-profile">
                    <div className="profile-image-container">
                      <Image
                        src={review?.image || '/placeholder.svg'}
                        alt={review?.name}
                        className="profile-image"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="reviewer-info">
                      <h3 className="reviewer-name">{review?.name}</h3>
                      <div className="rating-stars">
                        {Array.from({ length: 5 }, (_, i) => (
                          <AiFillStar
                            key={i}
                            className={`star ${i < review?.rating ? 'filled' : 'empty'}`}
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
      <div className="button-ppl-wrapper text-center pt-4">
        <a
          href="https://www.google.com/search?sca_esv=7e3b4dea3a648857&sxsrf=ANbL-n6KCmFUMbyDayifKqDrbwnTtiYgAg:1769692647524&q=rozas+y+roman+&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOWvZ8PQ_z0XiwwPRcgcqfW4PHN89g9qHZ7MMhWhN3vmeYKQKXhKg6g89KDeyij5Uwk-L0ZA%3D&uds=ALYpb_mM1P_6lpjjfowRxWEKPgkk-nmoRYjeAFv1jLYZxrjxz0ukshM0BlmO9gmC0qnQmNueD2lAnb-z5Bn9nO51m6fBfoJyFTRG2CjWYcdW-SIEbOSAzTc&sa=X&ved=2ahUKEwj78Pfs6rCSAxUEBNsEHV-ENZ8Q3PALegQIKxAF&biw=1920&bih=911&dpr=1&aic=0"
          target="_blank"
          className="button-ppl"
        >
          Ver todas las reseñas en Google <GoArrowRight />
        </a>
      </div>
    </div>
  );
}
