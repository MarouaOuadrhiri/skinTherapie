const steps = [
  {
    title: 'Choisir votre soin',
    text: 'Découvrez nos prestations et les sous-services proposés pour chaque rituel.',
    icon: 'lucide--sparkles',
  },
  {
    title: 'Échanger avec nous',
    text: 'Contactez notre équipe directement sur WhatsApp pour parler de votre demande.',
    icon: 'tabler--brand-whatsapp',
  },
  {
    title: 'Préparer votre rendez-vous',
    text: 'Précisez le soin qui vous intéresse et vos disponibilités lors de la conversation.',
    icon: 'lucide--calendar-check',
  },
];

export function PatientGuidanceCard() {
  return (
    <div
      data-guidance-card
      className="md:col-span-5 bg-primary-5 border border-primary-1/5 rounded-3xl flex flex-col h-full overflow-hidden p-5 gap-3"
    >
      <h3 className="text-2xl lg:text-3xl text-primary-3 font-medium">
        À votre écoute
      </h3>
      <p className="text-primary-2 text-sm leading-relaxed">
        Un parcours simple pour découvrir nos soins et prendre rendez-vous.
      </p>
      {steps.map((step) => (
        <div
          key={step.title}
          className="bg-white rounded-2xl p-3 flex gap-3 items-start"
        >
          <i
            className={`iconify ${step.icon} size-5 shrink-0 text-primary-1 mt-1`}
            aria-hidden="true"
          />
          <div>
            <h4 className="text-base font-medium text-primary-3 mb-1">
              {step.title}
            </h4>
            <p className="text-xs text-primary-2 leading-relaxed">
              {step.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PatientGuidance() {
  return (
    <section className="lg:py-50 md:py-32.5 py-25 bg-primary-5">
      <div className="container-medium">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-15 items-center">
          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-medium text-primary-3 mb-4">
              Votre parcours, simplement
            </h2>
            <p className="text-primary-2 text-base mb-8">
              Du choix du soin à la prise de rendez-vous, retrouvez les étapes
              pour nous contacter.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="bg-white rounded-2xl lg:p-7.5 p-5"
                >
                  <span className="text-sm font-medium text-primary-1 block mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl md:text-2xl font-medium text-primary-3 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-primary-2 text-sm md:text-base leading-relaxed">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <img
            src="/images/about/about-3.webp"
            alt="Un moment de soin"
            className="w-full h-88 md:h-132 object-cover rounded-4xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
