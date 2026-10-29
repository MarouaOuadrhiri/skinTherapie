export default function Footer() {
  return (
    <>
      <footer className="lg:pt-40 md:pt-25 pt-20 lg:pb-20 md:pb-15 pb-12 bg-primary-5 overflow-hidden relative md:rounded-t-4xl rounded-t-2xl z-10 lg:mx-12.5 md:mx-5 mx-2.5">
        {'\n  '}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {'\n    '}
          <img
            src="/images/gallary/footer-skintherapie.webp"
            className="w-full h-full object-cover object-center"
            alt="Ambiance bien-être SkinTherapie : linge naturel, soins et branche d’olivier"
          />
          {'\n\n    '}
          {'\n    '}
          <div className="absolute bottom-0 inset-x-0 h-[65%] bg-linear-to-b from-transparent via-primary-5 to-primary-4 pointer-events-none"></div>
          {'\n  '}
        </div>
        {'\n\n  '}
        {'\n  '}
        <div className="container-medium relative z-10">
          {'\n    '}
          <div className="flex flex-col justify-between lg:items-start lg:mb-27.5 md:mb-20 mb-7.5">
            {'\n      '}
            <div className="max-w-xl lg:mb-10">
              {'\n        '}
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-primary-3 lg:mb-5 md:mb-10 mb-5 leading-[1.1]">
                {'Révélez votre'}
                <br />
                {' peau avec nous'}
              </h2>
              {'\n        '}
              <p className="text-primary-2 text-base">
                {
                  'Planifiez votre consultation personnalisée et faites le premier pas vers un bien-être et un éclat durables.'
                }
              </p>
              {'\n      '}
            </div>
            {'\n      '}
            <div className="flex flex-wrap items-center gap-4 mt-8 lg:mt-0">
              {'\n        '}
              <a
                href="appointment.html"
                className="flex items-center gap-2.5 bg-primary transition-colors rounded-full ps-2.5 py-2.5 pe-5 text-sm font-medium group text-primary-3"
              >
                {'\n          '}
                <div className="flex items-center justify-center size-6 bg-white rounded-full">
                  {'\n            '}
                  <img
                    src="/images/icons/icon-1.svg"
                    alt="Icone"
                    className="size-4 transition-transform duration-300 group-hover:rotate-180"
                  />
                  {'\n          '}
                </div>
                {'\n          Prendre rendez-vous\n        '}
              </a>
              {'\n        '}
              <a
                href="service.html"
                className="flex items-center gap-2.5 bg-primary-5 transition-colors rounded-full ps-2.5 py-2.5 pe-5 text-sm font-medium group text-primary-2"
              >
                {'\n          '}
                <div className="flex items-center justify-center size-6 bg-white rounded-full">
                  {'\n            '}
                  <img
                    src="/images/icons/icon-1.svg"
                    alt="Icone"
                    className="size-4 transition-transform duration-300 group-hover:rotate-180"
                  />
                  {'\n          '}
                </div>
                {'\n          Nos Rituels\n        '}
              </a>
              {'\n      '}
            </div>
            {'\n    '}
          </div>
          {'\n\n    '}
          {'\n    '}
          <div className="grid grid-cols-2 md:grid-cols-[1.9fr_1.2fr_1.4fr_1.4fr] lg:gap-14 md:gap-10 gap-7.5 lg:mb-27.5 md:mb-20 mb-7.5">
            {'\n      '}
            {'\n      '}
            <div className="flex flex-col gap-y-7.5 col-span-2 md:col-span-1">
              {'\n        '}
              <a
                href="index.html"
                className="inline-flex items-center gap-2 text-primary-3 font-medium text-2xl"
              >
                {'\n          '}
                <img
                  src="/images/secondary_clay_rose_logo.svg"
                  alt="SkinTherapie Logo"
                />
                {'\n        '}
              </a>
              {'\n        '}
              <p className="text-primary-2 text-base leading-[relaxed] font-medium">
                {
                  "Kinésithérapie, soins médico-esthétiques et thérapies régénératrices centrés sur les résultats, la sécurité et l'accompagnement personnalisé."
                }
              </p>
              {'\n        '}
              <div className="flex flex-row flex-wrap items-start lg:gap-3 gap-x-4 gap-y-2">
                {'\n          '}
                <div className="flex items-center gap-1.5 text-sm font-medium text-primary-2">
                  {'\n            '}
                  <i className="iconify lucide--badge-check size-4.5 text-primary-1"></i>
                  {'\n            Certifié Santé\n          '}
                </div>
                {'\n          '}
                <div className="flex items-center gap-1.5 text-sm font-medium text-primary-2">
                  {'\n            '}
                  <i className="iconify lucide--trophy size-4.5 text-primary-1"></i>
                  {'\n            Experts Diplômés\n          '}
                </div>
                {'\n        '}
              </div>
              {'\n      '}
            </div>
            {'\n\n      '}
            {'\n      '}
            <div className="flex flex-col">
              {'\n        '}
              <h3 className="lg:text-xl text-lg font-medium text-primary-3 mb-5">
                {'Accès rapide'}
              </h3>
              {'\n        '}
              <div className="flex flex-col gap-2.5 text-primary-3 font-medium">
                {'\n          '}
                <a
                  href="index.html"
                  className="hover:text-primary-1 transition-colors"
                >
                  {'Accueil'}
                </a>
                {'\n          '}
                <a
                  href="about.html"
                  className="hover:text-primary-1 transition-colors"
                >
                  {'À propos'}
                </a>
                {'\n          '}
                <a
                  href="service.html"
                  className="hover:text-primary-1 transition-colors"
                >
                  {'Rituels'}
                </a>
                {'\n          '}
                <a
                  href="blog.html"
                  className="hover:text-primary-1 transition-colors"
                >
                  {'Journal'}
                </a>
                {'\n          '}
                <a
                  href="contact.html"
                  className="hover:text-primary-1 transition-colors"
                >
                  {'Contact'}
                </a>
                {'\n          '}
                <a
                  href="appointment.html"
                  className="hover:text-primary-1 transition-colors"
                >
                  {'Rendez-vous'}
                </a>
                {'\n        '}
              </div>
              {'\n      '}
            </div>
            {'\n\n      '}
            {'\n      '}
            <div className="flex flex-col">
              {'\n        '}
              <h3 className="lg:text-xl text-lg font-medium text-primary-3 mb-5">
                {'Liens utiles'}
              </h3>
              {'\n        '}
              <div className="flex flex-col gap-2.5 text-primary-3 font-medium">
                {'\n          '}
                <a
                  href="privacy-policy.html"
                  className="hover:text-primary-1 transition-colors"
                >
                  {'Confidentialité'}
                </a>
                {'\n          '}
                {'\n        '}
              </div>
              {'\n      '}
            </div>
            {'\n\n      '}
            {'\n      '}
            <div className="flex flex-col col-span-2 md:col-span-1">
              {'\n        '}
              <h3 className="text-xl font-medium text-primary-3 mb-5">
                {'Nous contacter'}
              </h3>
              {'\n        '}
              <div className="flex flex-col gap-2.5 text-sm text-primary-2 font-medium">
                {'\n          '}
                <a
                  href="https://maps.google.com/?q=Rue+Badr+Al+Kobra+Hamria+Meknes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 hover:text-primary-1 transition-colors group"
                >
                  {'\n            '}
                  <span className="flex items-center justify-center size-9 rounded-lg bg-primary-4 shrink-0 text-primary-1 transition-colors">
                    {'\n              '}
                    <i className="iconify lucide--map-pin size-4.5"></i>
                    {'\n            '}
                  </span>
                  {'\n            '}
                  <span className="leading-relaxed text-base">
                    {'Immeuble Business Center 1, RDC'}
                    <br />
                    {'Rue Badr Al Kobra, Hamria, Meknès'}
                  </span>
                  {'\n          '}
                </a>
                {'\n          '}
                <a
                  href="tel:+212533511815"
                  className="flex items-center gap-2.5 hover:text-primary-1 transition-colors group"
                >
                  {'\n            '}
                  <span className="flex items-center justify-center size-9 rounded-lg bg-primary-4 shrink-0 text-primary-1 transition-colors">
                    {'\n              '}
                    <i className="iconify lucide--phone size-4.5"></i>
                    {'\n            '}
                  </span>
                  {'\n            '}
                  <span className="text-base">{'05 33 51 18 15'}</span>
                  {'\n          '}
                </a>
                {'\n          '}
                <a
                  href="https://wa.me/212713615758"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-primary-1 transition-colors group"
                >
                  {'\n            '}
                  <span className="flex items-center justify-center size-9 rounded-lg bg-primary-4 shrink-0 text-primary-1 transition-colors">
                    {'\n              '}
                    <i className="iconify tabler--brand-whatsapp size-4.5"></i>
                    {'\n            '}
                  </span>
                  {'\n            '}
                  <span className="text-base">
                    {'07 13 61 57 58 (WhatsApp)'}
                  </span>
                  {'\n          '}
                </a>
                {'\n          '}
                <a
                  href="mailto:contact@skintherapie.ma"
                  className="flex items-center gap-2.5 hover:text-primary-1 transition-colors group"
                >
                  {'\n            '}
                  <span className="flex items-center justify-center size-9 rounded-lg bg-primary-4 shrink-0 text-primary-1 transition-colors">
                    {'\n              '}
                    <i className="iconify lucide--mail size-4.5"></i>
                    {'\n            '}
                  </span>
                  {'\n            '}
                  <span className="text-base">{'contact@skintherapie.ma'}</span>
                  {'\n          '}
                </a>
                {'\n        '}
              </div>
              {'\n      '}
            </div>
            {'\n    '}
          </div>
          {'\n\n    '}
          {'\n'}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:gap-5 gap-5 text-primary-2 font-medium text-center">
            {'\n\n  '}
            {'\n  '}
            <p
              className="text-primary-3 text-2xl md:text-xl lg:text-2xl font-normal tracking-tight"
              style={{
                fontFamily: "'Andora Modern Serif', serif, serif",
                color: 'var(--color-primary-3)',
                fontWeight: '400',
              }}
            >
              {'\n    SkinTherapie by Vitalife\n  '}
            </p>
            {'\n\n  '}
            {'\n  '}
            <div className="flex items-center justify-center gap-2.5">
              {'\n    \n    '}
              <a
                href="https://wa.me/212713615758"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="flex items-center justify-center md:size-9 size-7.5 rounded-lg bg-primary-5 hover:bg-white hover:text-emerald-600 transition-colors"
              >
                {'\n      '}
                <i className="iconify tabler--brand-whatsapp size-4.5 text-primary-1 hover:text-emerald-600"></i>
                {'\n    '}
              </a>
              {'\n\n    '}
              <a
                href="#"
                className="flex items-center justify-center md:size-9 size-7.5 rounded-lg bg-primary-5 hover:bg-white hover:text-primary-1 transition-colors"
              >
                {'\n      '}
                <i className="iconify tabler--brand-facebook size-4.5 text-primary-1"></i>
                {'\n    '}
              </a>
              {'\n\n    '}
              <a
                href="#"
                className="flex items-center justify-center md:size-9 size-7.5 rounded-lg bg-primary-5 hover:bg-white hover:text-primary-1 transition-colors"
              >
                {'\n      '}
                <i className="iconify tabler--brand-youtube size-4.5 text-primary-1"></i>
                {'\n    '}
              </a>
              {'\n\n    '}
              <a
                href="#"
                className="flex items-center justify-center md:size-9 size-7.5 rounded-lg bg-primary-5 hover:bg-white hover:text-primary-1 transition-colors"
              >
                {'\n      '}
                <i className="iconify tabler--brand-linkedin size-4.5 text-primary-1"></i>
                {'\n    '}
              </a>
              {'\n\n    '}
              <a
                href="https://www.instagram.com/vitalife_physiotherapie/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Vitalife Physiothérapie"
                className="flex items-center justify-center md:size-9 size-7.5 rounded-lg bg-primary-5 hover:bg-white hover:text-primary-1 transition-colors"
              >
                {'\n      '}
                <i className="iconify tabler--brand-instagram size-4.5 text-primary-1"></i>
                {'\n    '}
              </a>
              {'\n\n  '}
            </div>
            {'\n\n'}
          </div>
          {'\n  '}
        </div>
        {'\n'}
      </footer>
      {'\n\n'}

      {'\n'}
      <a
        href="https://wa.me/212713615758"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter sur WhatsApp"
        className="fixed bottom-6 right-6 z-90 flex items-center gap-2.5 bg-[#25d366] hover:bg-[#1ebe5d] text-white px-4.5 py-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group"
      >
        {'\n  '}
        <i className="iconify tabler--brand-whatsapp size-6"></i>
        {'\n  '}
        <span className="hidden sm:inline font-medium text-sm tracking-wide">
          {'WhatsApp'}
        </span>
        {'\n'}
      </a>
    </>
  );
}
