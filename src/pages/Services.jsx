import ServiceAccordion from '../components/ServiceAccordion.jsx';

export default function Services() {
  return (
    <>
      {'\n\n    \n\n    '}
      <section className="relative w-full lg:pt-50 md:pt-45 pt-30 md:pb-37.5 pb-22.5 overflow-hidden">
        {'\n        '}
        <div className="container relative z-10">
          {'\n            '}
          <div className="flex flex-col items-center gap-y-5 lg:mb-15 md:mb-12.5 mb-10">
            {'\n                '}
            {'\n                '}
            <div className="inline-flex items-center gap-2 bg-primary-1/5 text-primary-1 text-xs font-medium uppercase px-3 py-1.5 rounded-full">
              {'\n                    '}
              <span className="w-1.5 h-1.5 rounded-full bg-primary-1"></span>
              {
                '\n                    Prestations & Soins Spécialisés\n                '
              }
            </div>
            {'\n\n                '}
            {'\n                '}
            <h1 className="text-[42px] md:text-7xl lg:text-[90px] text-primary-3 font-medium leading-[1.1] tracking-tight md:w-210 text-center">
              {
                '\n                    Nos Grands Titres de Prestations\n                '
              }
            </h1>
            {'\n\n                '}
            {'\n                '}
            <p className="text-primary-2 text-base max-w-xl leading-[1.2] font-medium text-center">
              {
                "\n                    Kinésithérapie, soin médico-esthétique et thérapie régénératrice : découvrez nos protocoles d'excellence pensés pour sublimer votre bien-être et votre beauté naturelle.\n                "
              }
            </p>
            {'\n            '}
          </div>
          {'\n\n            '}
          {'\n            '}
          <ServiceAccordion appointmentLabel="Prendre rendez-vous" />
          {'\n        '}
        </div>
        {'\n    '}
      </section>
      {'\n\n    '}

      {'\n    '}
      <section className="bg-primary-4">
        {'\n        '}
        <div className="container">
          {'\n            '}
          {'\n            '}
          <div className="flex flex-col items-center text-center max-w-xl mx-auto lg:mb-15 mb-12.5">
            {'\n                '}
            {'\n                '}
            <div className="inline-flex items-center gap-2 bg-primary-1/10 text-primary-1 text-xs font-semibold uppercase px-3.5 py-1.5 rounded-full mb-6">
              {'\n                    '}
              <span className="w-1.5 h-1.5 rounded-full bg-primary-1"></span>
              {'\n                    Engagement\n                '}
            </div>
            {'\n                '}
            <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-heading font-medium text-primary-3 tracking-tight">
              {'Expertise kinésithérapique, résultats visibles'}
            </h2>
            {'\n            '}
          </div>
          {'\n\n            '}
          {'\n            '}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2.2fr] gap-5">
            {'\n\n                '}
            {'\n                '}
            <div className="relative w-full md:rounded-4xl rounded-2xl overflow-hidden group h-100 md:min-h-170 lg:min-h-173">
              {'\n                    '}
              <img
                src="/images/about/about-16.webp"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {'\n                    '}
              {'\n                    '}
              <div className="absolute bg-primary-1 h-37.5 w-full blur-[50px] -bottom-2 inset-s-0"></div>
              {'\n\n                    '}
              <div className="absolute bottom-0 inset-s-0 w-full p-7.5 flex flex-col items-center text-center z-10">
                {'\n                        '}
                <img
                  src="/images/icons/mono_blanc.svg"
                  className="size-6 mb-5 filter brightness-0 invert"
                />
                {'\n                        '}
                <h3 className="text-white text-xl font-heading font-medium leading-[1.2]">
                  {'Réalisé par votre kinésithérapeute '}
                  <br />
                  {'& spécialiste certifiée'}
                </h3>
                {'\n                    '}
              </div>
              {'\n                '}
            </div>
            {'\n\n                '}
            {'\n                '}
            <div className="flex flex-col gap-5">
              {'\n\n                    '}
              {'\n                    '}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                {'\n                        '}
                {'\n                        '}
                <div className="md:col-span-5 bg-primary-5 lg:p-7.5 p-5 md:rounded-4xl rounded-2xl flex flex-col lg:gap-y-7.5 gap-y-4 items-center text-center justify-center relative overflow-hidden h-full">
                  {'\n                            '}
                  <h3 className="text-xl md:text-3xl leading-[1.2] font-heading font-medium text-primary-3">
                    {'Équipe de '}
                    <br className="md:block hidden" />
                    {'spécialistes'}
                  </h3>
                  {'\n                            '}
                  <div className="relative flex justify-center items-center w-full">
                    {'\n                                '}
                    <img
                      src="images/avatar/avatar-12.webp"
                      className="size-10 rounded-full object-cover relative z-10 border-4"
                    />
                    {'\n                                '}
                    <img
                      src="/images/icons/icon-42.svg"
                      className="absolute top-1/2 inset-s-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-42 w-30 z-0"
                    />
                    {'\n                            '}
                  </div>
                  {'\n                            '}
                  <p className="text-primary-2 text-base font-medium">
                    {
                      'Un accompagnement sur-mesure et bienveillant à chaque étape.'
                    }
                  </p>
                  {'\n                        '}
                </div>
                {'\n\n                        '}
                {'\n                        '}
                <div className="md:col-span-7 bg-primary-5 lg:p-7.5 p-5 md:rounded-4xl rounded-2xl flex flex-col justify-start relative overflow-hidden h-full">
                  {'\n                            '}
                  <h3 className="text-xl md:text-3xl leading-[1.2] font-heading font-medium text-primary-3 mb-2.5 relative z-10">
                    {'Technologie de pointe'}
                  </h3>
                  {'\n                            '}
                  <p className="text-primary-2 text-base font-medium relative z-10 lg:w-sm md:mb-0 mb-16">
                    {
                      'Nous utilisons des équipements certifiés pour des soins sûrs et efficaces.'
                    }
                  </p>
                  {'\n                            '}
                  {'\n                            '}
                  <img
                    src="/images/hero/bg-pattern-1.svg"
                    className="absolute -bottom-4 -inset-e-4 w-full h-31.5 pointer-events-none"
                  />
                  {'\n                        '}
                </div>
                {'\n                    '}
              </div>
              {'\n\n                    '}
              {'\n                    '}
              <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-5 h-full">
                {'\n                        '}
                {'\n                        '}
                <div className="bg-primary-5 lg:p-7.5 p-5 md:rounded-4xl rounded-2xl flex flex-col justify-between h-full gap-8">
                  {'\n\n                            '}
                  {'\n                            '}
                  <div className="grid grid-cols-2 bg-primary-4 rounded-2xl lg:gap-0 gap-4 p-2.5">
                    {'\n                                '}
                    <div className="flex items-start gap-1.5 lg:p-2.5">
                      {'\n                                    '}
                      <div>
                        <i className="iconify lucide--badge-check size-4 mt-1"></i>
                      </div>
                      {'\n                                    '}
                      <p className="text-primary-3 text-sm font-medium leading-[1.4]">
                        <span className="text-primary-3">
                          {'Workflow de consultation :'}
                        </span>
                        <br />
                        {'Réservation & rappels certifiés'}
                      </p>
                      {'\n                                '}
                    </div>
                    {'\n                                '}
                    <div className="flex items-start gap-1.5 lg:p-2.5">
                      {'\n                                    '}
                      <div>
                        <i className="iconify lucide--badge-check size-4 mt-1"></i>
                      </div>
                      {'\n                                    '}
                      <p className="text-primary-3 text-sm font-medium leading-[1.4]">
                        <span className="text-primary-3">
                          {'Sécurité des soins :'}
                        </span>
                        <br />
                        {'Protocoles validés'}
                      </p>
                      {'\n                                '}
                    </div>
                    {'\n                                '}
                    <div className="flex items-start gap-1.5 lg:p-2.5">
                      {'\n                                    '}
                      <div>
                        <i className="iconify lucide--badge-check size-4 mt-1"></i>
                      </div>
                      {'\n                                    '}
                      <p className="text-primary-3 text-sm font-medium leading-[1.4]">
                        <span className="text-primary-3">
                          {'Dossiers patients :'}
                        </span>
                        <br />
                        {'Données sécurisées'}
                      </p>
                      {'\n                                '}
                    </div>
                    {'\n                                '}
                    <div className="flex items-start gap-1.5 lg:p-2.5">
                      {'\n                                    '}
                      <div>
                        <i className="iconify lucide--badge-check size-4 mt-1"></i>
                      </div>
                      {'\n                                    '}
                      <p className="text-primary-3 text-sm font-medium leading-[1.4]">
                        <span className="text-primary-3">
                          {'Suivi post-traitement :'}
                        </span>
                        <br />
                        {'Accompagnement continu'}
                      </p>
                      {'\n                                '}
                    </div>
                    {'\n                            '}
                  </div>
                  {'\n\n                            '}
                  {'\n                            '}
                  <div className="grid grid-cols-2 gap-6 lg:pt-8 mt-auto">
                    {'\n                                '}
                    <div className="flex flex-col">
                      {'\n                                    '}
                      <div className="flex items-baseline gap-0.5 mb-1 text-primary-1">
                        {'\n                                        '}
                        <span className="lg:text-[46px] text-3xl font-heading font-medium leading-none">
                          {'2'}
                        </span>
                        {'\n                                        '}
                        <span className="lg:text-[46px] text-3xl font-heading font-medium leading-none">
                          {'K+'}
                        </span>
                        {'\n                                    '}
                      </div>
                      {'\n                                    '}
                      <p className="text-primary-1 text-xs md:text-sm font-medium">
                        {'Patients'}
                      </p>
                      {'\n                                '}
                    </div>
                    {'\n                                '}
                    <div className="flex flex-col">
                      {'\n                                    '}
                      <div className="flex items-baseline gap-0.5 mb-1 text-primary-1">
                        {'\n                                        '}
                        <span className="lg:text-[46px] text-3xl font-heading font-medium leading-none">
                          {'50'}
                        </span>
                        {'\n                                        '}
                        <span className="lg:text-[46px] text-3xl font-heading font-medium leading-none">
                          {'+'}
                        </span>
                        {'\n                                    '}
                      </div>
                      {'\n                                    '}
                      <p className="text-primary-1 text-xs md:text-sm font-medium">
                        {'Soins'}
                      </p>
                      {'\n                                '}
                    </div>
                    {'\n                            '}
                  </div>
                  {'\n\n                        '}
                </div>
                {'\n\n                        '}
                {'\n                        '}
                <div className="bg-primary-5 lg:p-7.5 p-5 md:rounded-4xl rounded-2xl flex flex-col gap-y-2.5 items-center justify-center text-center h-full">
                  {'\n                            '}
                  <i
                    className="iconify lucide--heart-handshake size-7 text-primary-1"
                    aria-hidden="true"
                  />
                  {'\n                            '}
                  <h3 className="text-3xl lg:text-[46px] font-heading font-medium text-primary-3 leading-none">
                    {'Votre soin'}
                  </h3>
                  {'\n                            '}
                  <p className="text-primary-2 text-sm font-medium">
                    {'Un accompagnement personnalisé'}
                  </p>
                  {'\n                        '}
                </div>
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
      <section className="lg:py-50 md:py-32.5 py-25">
        {'\n        '}
        <div className="container">
          {'\n            '}
          {'\n            '}
          <div className="flex flex-col items-center text-center mx-auto lg:mb-30 md:mb-16 mb-10">
            {'\n                '}
            {'\n                '}
            <div className="inline-flex items-center gap-2 bg-primary-5 text-primary-1 text-xs font-semibold uppercase px-3.5 py-1.5 rounded-full mb-6">
              {'\n                    '}
              <span className="w-1.5 h-1.5 rounded-full bg-primary-1"></span>
              {'\n                    NOTRE MÉTHODE\n                '}
            </div>
            {'\n                '}
            <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-heading font-medium text-primary-3 tracking-tight">
              {'Votre parcours de soin'}
            </h2>
            {'\n            '}
          </div>
          {'\n\n            '}
          {'\n            '}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-5 gap-10">
            {'\n                '}
            {'\n                '}
            <div className="flex flex-col relative w-full group bg-primary-5 rounded-3xl overflow-hidden">
              {'\n                    '}
              <div className="relative w-full">
                {'\n                        '}
                {'\n                        '}
                <div className="relative w-full flex justify-center text-center md:h-18 h-12">
                  {'\n                            '}
                  <div className="absolute lg:top-2 top-0 inset-s-1/2 -translate-x-1/2 z-10 md:text-3xl text-2xl font-heading font-medium text-primary-3">
                    {
                      '\n                                01\n                            '
                    }
                  </div>
                  {'\n                            '}
                  <img
                    src="/images/icons/icon.svg"
                    className="lg:w-46 w-35 lg:h-15 h-12.5 object-cover block"
                  />
                  {'\n                        '}
                </div>
                {'\n\n                        '}
                {'\n                        '}
                <div className="pt-4 md:pb-7.5 pb-5 px-5 flex flex-col items-center text-center">
                  {'\n                            '}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-medium text-primary-3 mb-2.5">
                    {'Consultation'}
                  </h3>
                  {'\n                            '}
                  <p className="text-primary-2 text-base font-medium">
                    {'Échange sur vos besoins et objectifs'}
                  </p>
                  {'\n                        '}
                </div>
                {'\n                    '}
              </div>
              {'\n                '}
            </div>
            {'\n\n                '}
            {'\n                '}
            <div className="flex flex-col relative w-full group bg-primary-5 rounded-3xl overflow-hidden">
              {'\n                    '}
              <div className="relative w-full">
                {'\n                        '}
                <div className="relative w-full flex justify-center text-center md:h-18 h-12">
                  {'\n                            '}
                  <div className="absolute lg:top-2 top-0 inset-s-1/2 -translate-x-1/2 z-10 md:text-3xl text-2xl font-heading font-medium text-primary-3">
                    {
                      '\n                                02\n                            '
                    }
                  </div>
                  {'\n                            '}
                  <img
                    src="/images/icons/icon.svg"
                    className="lg:w-46 w-35 lg:h-15 h-12.5 object-cover block"
                  />
                  {'\n                        '}
                </div>
                {'\n\n                        '}
                <div className="pt-4 md:pb-7.5 pb-5 px-5 flex flex-col items-center text-center">
                  {'\n                            '}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-medium text-primary-3 mb-2.5">
                    {'Analyse'}
                  </h3>
                  {'\n                            '}
                  <p className="text-primary-2 text-base font-medium">
                    {'Diagnostic approfondi de votre peau'}
                  </p>
                  {'\n                        '}
                </div>
                {'\n                    '}
              </div>
              {'\n                '}
            </div>
            {'\n\n                '}
            {'\n                '}
            <div className="flex flex-col relative w-full group bg-primary-5 rounded-3xl overflow-hidden">
              {'\n                    '}
              <div className="relative w-full">
                {'\n                        '}
                <div className="relative w-full flex justify-center text-center md:h-18 h-12">
                  {'\n                            '}
                  <div className="absolute lg:top-2 top-0 inset-s-1/2 -translate-x-1/2 z-10 md:text-3xl text-2xl font-heading font-medium text-primary-3">
                    {
                      '\n                                03\n                            '
                    }
                  </div>
                  {'\n                            '}
                  <img
                    src="/images/icons/icon.svg"
                    className="lg:w-46 w-35 lg:h-15 h-12.5 object-cover block"
                  />
                  {'\n                        '}
                </div>
                {'\n\n                        '}
                <div className="pt-4 md:pb-7.5 pb-5 px-5 flex flex-col items-center text-center">
                  {'\n                            '}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-medium text-primary-3 mb-2.5">
                    {'Traitement'}
                  </h3>
                  {'\n                            '}
                  <p className="text-primary-2 text-base font-medium">
                    {'Stratégie de soin personnalisée'}
                  </p>
                  {'\n                        '}
                </div>
                {'\n                    '}
              </div>
              {'\n                '}
            </div>
            {'\n\n                '}
            {'\n                '}
            <div className="flex flex-col relative w-full group bg-primary-5 rounded-3xl overflow-hidden">
              {'\n                    '}
              <div className="relative w-full">
                {'\n                        '}
                <div className="relative w-full flex justify-center text-center md:h-18 h-12">
                  {'\n                            '}
                  <div className="absolute lg:top-2 top-0 inset-s-1/2 -translate-x-1/2 z-10 md:text-3xl text-2xl font-heading font-medium text-primary-3">
                    {
                      '\n                                04\n                            '
                    }
                  </div>
                  {'\n                            '}
                  <img
                    src="/images/icons/icon.svg"
                    className="lg:w-46 w-35 lg:h-15 h-12.5 object-cover block"
                  />
                  {'\n                        '}
                </div>
                {'\n\n                        '}
                <div className="pt-4 md:pb-7.5 pb-5 px-5 flex flex-col items-center text-center">
                  {'\n                            '}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-medium text-primary-3 mb-2.5">
                    {'Suivi'}
                  </h3>
                  {'\n                            '}
                  <p className="text-primary-2 text-base font-medium">
                    {'Accompagnement et contrôle des résultats'}
                  </p>
                  {'\n                        '}
                </div>
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
      <section className="lg:pb-50 md:pb-37.5 pb-25">
        {'\n        '}
        <div className="container-medium">
          {'\n            '}
          <div className="relative w-full rounded-3xl overflow-hidden lg:min-h-140 md:min-h-125 min-h-112 flex items-end">
            {'\n                '}
            {'\n                '}
            <img
              src="/images/about/about-17.webp"
              alt="Révélez votre peau"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {'\n\n                '}
            {'\n                '}
            <div className="relative z-10 lg:p-12.5 md:p-12 p-5">
              {'\n                    '}
              <h2 className="text-3xl lg:text-[46px] text-white font-heading font-medium mb-2.5 leading-[1.1] tracking-tight">
                {'\n                        Prêt(e) à révéler'}
                <br />
                {'votre peau ?\n                    '}
              </h2>
              {'\n                    '}
              <p className="text-white text-sm md:text-base md:mb-8 mb-4 max-w-[300px] md:max-w-sm leading-relaxed font-medium">
                {
                  '\n                        Planifiez votre consultation pour définir'
                }
                <br className="hidden md:block" />
                {'les rituels adaptés à vos besoins.\n                    '}
              </p>
              {'\n\n                    '}
              <div className="inline-block">
                {'\n                        '}
                <a
                  href="appointment.html"
                  className="flex items-center gap-2.5 bg-primary transition-colors rounded-full ps-2.5 py-2.5 pe-5 text-sm font-medium group text-primary-3"
                >
                  {'\n                            '}
                  <div className="flex items-center justify-center size-6 bg-white rounded-full">
                    {'\n                                '}
                    <img
                      src="/images/icons/icon-1.svg"
                      alt="Icon"
                      className="size-3 transition-transform duration-300 group-hover:rotate-180"
                    />
                    {'\n                            '}
                  </div>
                  {
                    '\n                            Réserver un rendez-vous\n                        '
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
      {'\n\n    \n\n'}
    </>
  );
}
