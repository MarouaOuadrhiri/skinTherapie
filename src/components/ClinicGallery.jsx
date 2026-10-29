import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import '../styles/clinic-gallery.css';

const photos = [
  { id: 'soin-visage', name: 'Meryem', title: 'Hydrafacial', text: 'J’ai apprécié les explications avant le soin et la douceur de la prise en charge. Un moment agréable pour prendre soin de ma peau.' },
  { id: 'blanchiment', name: 'Yassine', title: 'Blanchiment dentaire', text: 'J’avais quelques questions avant de commencer. L’équipe a pris le temps de m’expliquer le déroulement de la séance et de me rassurer.' },
  { id: 'laser', name: 'Salma', title: 'Épilation laser', text: 'Les étapes de la séance m’ont été expliquées clairement. J’ai surtout apprécié l’écoute et les conseils pour la suite.' },
  { id: 'hijama', name: 'Amine', title: 'Hijama', text: 'Un accueil attentif et des explications simples avant la séance. J’ai pu poser mes questions et me sentir à l’aise.' },
  { id: 'espace', name: 'Khadija', title: 'Massage', text: 'Une ambiance calme, une lumière douce et un massage adapté aux zones que je souhaitais travailler. Une belle pause dans ma journée.' },
];

export default function ClinicGallery() {
  const dialog = useRef(null);
  const slider = useRef(null);
  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function open(photo) {
    setSelected(photo);
    slider.current?.autoplay?.stop();
    dialog.current.showModal();
  }
  return (
    <section className="clinic-gallery" aria-labelledby="clinic-gallery-title">
      <div className="container-medium">
        <div className="clinic-gallery-heading">
          <span className="clinic-gallery-eyebrow">Soins & expériences</span>
          <h2 id="clinic-gallery-title">Les avis de nos clients</h2>
          <p>Découvrez nos soins en images, dans un cadre dédié à votre confort et à votre bien-être.</p>
        </div>
        <Swiper className="clinic-gallery-slider" modules={[Autoplay, A11y]} onSwiper={instance => { slider.current = instance; }} onSlideChange={instance => setIndex(instance.realIndex)} slidesPerView={1.08} spaceBetween={16} loop speed={600} autoplay={reduced ? false : { delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true }} breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 3, spaceBetween: 24 } }}>
          {photos.map(photo => (
            <SwiperSlide key={photo.id}>
              <article className="clinic-gallery-card">
                <button type="button" className={`clinic-gallery-photo clinic-gallery-photo-${photo.id}`} aria-label={`Agrandir : ${photo.title}`} onClick={() => open(photo)}>
                  <img src={`/images/clinic-gallery/${photo.id}.webp`} alt={photo.title} loading="lazy" decoding="async" width="900" height={photo.id === 'laser' ? '900' : '1600'} />
                  <span className="clinic-gallery-service">{photo.title}</span>
                  <span className="clinic-gallery-expand" aria-hidden="true">↗</span>
                </button>
                <div className="clinic-gallery-copy">
                  <p className="clinic-gallery-client">{photo.name}</p>
                  <blockquote>{photo.text}</blockquote>
                  <div className="clinic-gallery-signature"><h3>{photo.title}</h3></div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="clinic-gallery-controls" onFocusCapture={() => slider.current?.autoplay?.stop()}>
          <button type="button" className="clinic-gallery-arrow" aria-label="Soin précédent" onClick={() => slider.current?.slidePrev()}>←</button>
          <div className="clinic-gallery-dots" role="group" aria-label="Choisir un soin">{photos.map((photo, i) => <button key={photo.id} type="button" className={index === i ? 'is-active' : ''} aria-label={`Afficher : ${photo.title}`} aria-pressed={index === i} onClick={() => slider.current?.slideToLoop(i)} />)}</div>
          <button type="button" className="clinic-gallery-arrow" aria-label="Soin suivant" onClick={() => slider.current?.slideNext()}>→</button>
        </div>
      </div>
      <dialog ref={dialog} className="clinic-gallery-dialog" onClick={event => { if (event.target === event.currentTarget) dialog.current.close(); }} aria-label={selected?.title || 'Photo du centre'}>
        <button type="button" className="clinic-gallery-close" aria-label="Fermer la photo" onClick={() => dialog.current.close()}>×</button>
        {selected && <figure><img src={`/images/clinic-gallery/${selected.id}.webp`} alt={selected.title} /><figcaption>{selected.title}</figcaption></figure>}
      </dialog>
    </section>
  );
}
