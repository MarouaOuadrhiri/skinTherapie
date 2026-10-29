import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import { reviewExamples } from '../data/reviewExamples.js';
import '../styles/review-examples.css';

export default function ReviewExamples() {
  const slider = useRef(null);
  const [index, setIndex] = useState(0);

  return (
    <section
      className="review-examples lg:py-50 md:py-32.5 py-25 bg-primary-5"
      aria-labelledby="review-examples-title"
    >
      <div className="container-medium">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12.5">
          <span className="inline-flex rounded-full border border-primary-1/20 px-3 py-1 text-xs text-primary-1 mb-5">
            Exemples de commentaires
          </span>
          <h2
            id="review-examples-title"
            className="text-4xl md:text-6xl lg:text-7xl font-medium text-primary-3 leading-[1.1] mb-4"
          >
            Des mots autour des soins
          </h2>
          <p className="text-primary-2 text-sm md:text-base">
            Textes fictifs proposés à titre illustratif — ils ne sont pas des
            avis clients vérifiés. Photos illustratives.
          </p>
        </div>
        <Swiper
          modules={[Autoplay, A11y]}
          onSwiper={(instance) => {
            slider.current = instance;
          }}
          onSlideChange={(instance) => setIndex(instance.realIndex)}
          slidesPerView={1.18}
          centeredSlides
          spaceBetween={16}
          loop
          speed={650}
          autoplay={
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
              ? false
              : {
                  delay: 6500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
          }
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
            1024: { slidesPerView: 3, spaceBetween: 24, centeredSlides: false },
          }}
          className="review-examples-slider"
        >
          {reviewExamples.map((review) => (
            <SwiperSlide key={review.id}>
              <article className="review-example-card">
                <div className="review-example-photo">
                  <img
                    src={review.photo}
                    alt={`Photo illustrative : ${review.service}`}
                    loading="lazy"
                    decoding="async"
                    width="1024"
                    height="1024"
                  />
                  <span className="review-example-badge">Exemple</span>
                </div>
                <div className="review-example-copy">
                  <blockquote className="text-primary-2 text-sm md:text-base leading-relaxed">
                    « {review.text} »
                  </blockquote>
                  <div
                    className="review-example-stars"
                    aria-label="Étoiles illustratives"
                  >
                    {Array.from({ length: 5 }, (_, i) => (
                      <i
                        key={i}
                        className="iconify tabler--star-filled size-4"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-lg font-heading font-medium text-primary-3">
                    {review.name}{' '}
                    <span className="text-xs font-body text-primary-2">
                      (exemple)
                    </span>
                  </p>
                  <p className="text-xs md:text-sm text-primary-2 mt-1">
                    {review.service}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="flex justify-center items-center gap-5 mt-7"
          onFocusCapture={() => slider.current?.autoplay?.stop()}
        >
          <button
            type="button"
            className="review-example-arrow"
            aria-label="Commentaire précédent"
            onClick={() => slider.current?.slidePrev()}
          >
            <i
              className="iconify lucide--arrow-left size-4"
              aria-hidden="true"
            />
          </button>
          <div
            className="flex gap-2"
            role="group"
            aria-label="Choisir un exemple de commentaire"
          >
            {reviewExamples.map((review, i) => (
              <button
                key={review.id}
                type="button"
                className={`review-example-dot${index === i ? ' is-active' : ''}`}
                aria-label={`Afficher l’exemple ${i + 1}`}
                aria-pressed={index === i}
                onClick={() => slider.current?.slideToLoop(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="review-example-arrow"
            aria-label="Commentaire suivant"
            onClick={() => slider.current?.slideNext()}
          >
            <i
              className="iconify lucide--arrow-right size-4"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
