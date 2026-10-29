import '../styles/care-gallery.css';

const photos = [
  { src: '/images/subservices/client-massage-cible.webp', label: 'Massage ciblé', position: '50% 54%' },
  { src: '/images/subservices/client-head-spa.webp', label: 'Head Spa', position: '50% 48%' },
  { src: '/images/subservices/client-hijama.webp', label: 'Hijama', position: '50% 50%' },
  { src: '/images/subservices/client-blanchiment-dentaire.webp', label: 'Blanchiment dentaire', position: '50% 48%' },
];

export default function CareGallery() {
  return (
    <section className="care-gallery" aria-labelledby="care-gallery-title">
      <div className="care-gallery-grid">
        {photos.map((photo, index) => (
          <figure className={`care-gallery-photo care-gallery-photo-${index + 1}`} key={photo.label}>
            <img src={photo.src} alt={photo.label} loading="lazy" decoding="async" width="900" height="1100" style={{ objectPosition: photo.position }} />
            <figcaption>{photo.label}</figcaption>
          </figure>
        ))}
        <div className="care-gallery-intro">
          <span className="care-gallery-eyebrow">Un accompagnement personnalisé</span>
          <h2 id="care-gallery-title">Nous conjuguons kinésithérapie, soin médico-esthétique et thérapies régénératives pour révéler une vitalité durable, équilibrée et naturellement éclatante.</h2>
          <p>Écoute, soins et accompagnement personnalisé.</p>
          <a href="#service" className="care-gallery-link">Découvrez nos soins <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
