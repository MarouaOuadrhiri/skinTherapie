import PatientGuidance from '../components/PatientGuidance.jsx';
import WhatsAppContact from '../components/WhatsAppContact.jsx';
export default function Appointment() {
  return (
    <>
      {'\n\n    \n\n    '}
      <section className="md:pt-48 pt-30 lg:pb-50 md:pb-32.5 pb-25">
        {'\n        '}
        <div className="container">
          {'\n            '}
          <div className="text-center lg:mb-15 md:mb-12.5 mb-10">
            {'\n                '}
            {'\n                '}
            <div className="inline-flex items-center gap-2 bg-primary-1/5 text-primary-1 text-xs font-medium uppercase px-3 py-1.5 rounded-full md:mb-5 mb-4">
              {'\n                    '}
              <span className="w-1.5 h-1.5 rounded-full bg-primary-1"></span>
              {'\n                    Réservez votre rituel\n                '}
            </div>
            {'\n\n                '}
            {'\n                '}
            <h1 className="text-[42px] md:text-7xl lg:text-[90px] font-heading font-medium text-primary-3 tracking-tight leading-[1.1] md:mb-6 mb-4 md:w-xl mx-auto">
              {
                '\n                    Planifiez votre escale bien-être\n                '
              }
            </h1>
            {'\n            '}
          </div>
          {'\n\n            '}
          {'\n            '}
          <div className="bg-primary-5 p-6 md:p-10 rounded-3xl md:max-w-3xl mx-auto">
            {'\n                '}
            <WhatsAppContact kind="booking" />
            {'\n            '}
          </div>
          {'\n        '}
        </div>
        {'\n    '}
      </section>
      {'\n\n    '}

      {'\n    '}
      <PatientGuidance />
      {'\n\n    '}

      {'\n    '}
      <section className="lg:py-50 md:py-32.5 py-25">
        {'\n        '}
        <div className="container">
          {'\n            '}
          <div className="lg:w-4xl mx-auto">
            {'\n                '}
            <div className="bg-primary-5 rounded-4xl md:p-10 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              {'\n                    '}
              <div>
                {'\n                        '}
                <h3 className="text-2xl md:text-3xl font-heading font-medium text-primary-3 leading-tight mb-2.5">
                  {
                    '\n                            Une question avant de réserver ?\n                        '
                  }
                </h3>
                {'\n                        '}
                <p className="text-primary-2 text-sm md:text-base w-xs">
                  {
                    '\n                            Contactez-nous pour définir ensemble le rituel le plus adapté à votre peau.\n                        '
                  }
                </p>
                {'\n                    '}
              </div>
              {'\n                    '}
              <div className="inline-block">
                {'\n                        '}
                <a
                  href="contact.html"
                  className="flex items-center gap-2.5 bg-primary transition-colors rounded-full ps-2.5 py-2.5 pe-5 text-sm font-medium group text-primary-3"
                >
                  {'\n                            '}
                  <div className="flex items-center justify-center size-6 bg-white rounded-full">
                    {'\n                                '}
                    <img
                      src="/images/icons/icon-1.svg"
                      alt="Icon"
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                    {'\n                            '}
                  </div>
                  {
                    '\n                            Nous contacter\n                        '
                  }
                </a>
                {'\n                    '}
              </div>
              {'\n                '}
            </div>
            {'\n            '}
          </div>
          {'\n        '}
        </div>
        {'\n    '}
      </section>
      {'\n\n    '}

      {'\n    '}
      <section className="lg:pb-50 md:pb-32.5 pb-25">
        {'\n        '}
        <div className="container-medium">
          {'\n            '}
          <div className="max-w-xl mx-auto text-center md:mb-15 mb-10">
            {'\n                '}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-medium text-primary-3 tracking-tight mb-2.5">
              {
                '\n                    Une peau vraie, une lumière sensible\n                '
              }
            </h2>
            {'\n                '}
            <p className="text-primary-2 text-sm md:text-base md:mb-7.5 mb-4">
              {
                '\n                    Un accompagnement sur-mesure, des gestes précis et une expertise reconnue.\n                '
              }
            </p>
            {'\n                '}
            <div className="inline-block shrink-0">
              {'\n                    '}
              <a
                href="contact.html"
                className="flex items-center gap-2.5 bg-primary transition-colors rounded-full ps-2.5 py-2.5 pe-5 text-sm font-medium group text-primary-3"
              >
                {'\n                        '}
                <div className="flex items-center justify-center size-6 bg-white rounded-full">
                  {'\n                            '}
                  <img
                    src="/images/icons/icon-1.svg"
                    alt="Icon"
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                  {'\n                        '}
                </div>
                {
                  "\n                        Découvrir l'univers\n                    "
                }
              </a>
              {'\n                '}
            </div>
            {'\n            '}
          </div>
          {'\n\n            '}
          {'\n            '}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            data-toggle="gallery"
          >
            {'\n                '}
            {'\n                '}
            <a
              href="/images/services/service-1.webp"
              className="md:rounded-4xl rounded-2xl overflow-hidden aspect-[1/1] lg:aspect-[810/819] w-full group relative block"
            >
              {'\n                    '}
              <img
                src="/images/services/service-1.webp"
                alt="Rituel SkinTherapie"
                className="w-full h-full object-cover"
              />
              {'\n                '}
            </a>
            {'\n\n                '}
            {'\n                '}
            <div className="grid grid-cols-1 gap-5">
              {'\n                    '}
              <div className="grid grid-cols-2 gap-5">
                {'\n                        '}
                <a
                  href="/images/gallary/gallery-7.webp"
                  className="md:rounded-4xl rounded-2xl overflow-hidden aspect-[1/1] lg:aspect-[600/607] w-full group relative block"
                >
                  {'\n                            '}
                  <img
                    src="/images/gallary/gallery-7.webp"
                    alt="Détail Matière"
                    className="w-full h-full object-cover"
                  />
                  {'\n                        '}
                </a>
                {'\n                        '}
                <a
                  href="/images/gallary/gallery-8.webp"
                  className="md:rounded-4xl rounded-2xl overflow-hidden aspect-[1/1] lg:aspect-[600/607] w-full group relative block"
                >
                  {'\n                            '}
                  <img
                    src="/images/gallary/gallery-8.webp"
                    alt="Lumière Naturelle"
                    className="w-full h-full object-cover"
                  />
                  {'\n                        '}
                </a>
                {'\n                    '}
              </div>
              {'\n                    '}
              <a
                href="/images/about/about-12.webp"
                className="md:rounded-4xl rounded-2xl overflow-hidden aspect-[2/1] lg:aspect-[810/395] w-full group relative block"
              >
                {'\n                        '}
                <img
                  src="/images/about/about-12.webp"
                  alt="Le Geste"
                  className="w-full h-full object-cover"
                />
                {'\n                    '}
              </a>
              {'\n                '}
            </div>
            {'\n            '}
          </div>
          {'\n        '}
        </div>
        {'\n    '}
      </section>
      {'\n\n    \n\n'}
    </>
  );
}
