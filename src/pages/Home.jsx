import CareGallery from '../components/CareGallery.jsx';
import { PatientGuidanceCard } from '../components/PatientGuidance.jsx';
import ClinicGallery from '../components/ClinicGallery.jsx';
import WhatsAppContact from '../components/WhatsAppContact.jsx';
import ServiceAccordion from '../components/ServiceAccordion.jsx';

export default function Home() {
  return (
    <>
      {'\n\n  \n\n  '}
      <section className="relative w-full lg:pt-41 md:pt-27.5 pt-15 lg:pb-50 md:pb-40 pb-32">
        {'\n    '}
        <div className="container">
          {'\n      '}
          {'\n      '}
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-0 gap-5 mt-8 items-start">
            {'\n        '}
            {'\n        '}
            {'\n        '}
            <div className="lg:col-span-12 text-center max-w-4xl mx-auto">
              {'\n          '}
              <h1 className="text-4xl md:text-6xl lg:text-[90px] text-primary-3 font-medium lg:mb-5 mb-3.5 leading-[1.1] tracking-tight">
                {'Un corps sublimé,'}
                <br className="lg:block hidden" />
                {' un esprit épanoui'}
              </h1>
              {'\n          '}
              <p className="text-primary-2 text-base max-w-md mx-auto">
                {
                  'Découvrez une approche globale de la beauté et du bien-être, combinant soins esthétiques, technologies innovantes et thérapies personnalisées.'
                }
              </p>
              {'\n        '}
            </div>
            {'\n        '}
            {'\n      '}
          </div>
          {'\n    '}
        </div>
        {'\n\n    '}
        {'\n    '}
        <div className="lg:mt-27.5 md:mt-20 mt-16 lg:px-12.5 md:px-5 px-3">
          {'\n      '}
          <div className="relative w-full rounded-4xl overflow-hidden flex flex-col items-center justify-end lg:h-198 h-100">
            {'\n        '}
            {'\n        '}
            <img
              src="/images/hero/hero-image.webp"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {'\n\n        '}
            <div className="absolute -bottom-30 lg:-bottom-20 inset-s-1/2 pointer-events-none hero-avatar-wheel z-20 flex items-center justify-center">
              {'\n          '}
              {'\n          '}
              <div
                className="absolute top-1/2 inset-s-1/2"
                style={{
                  transform:
                    'translate(-50%, -50%) rotate(0deg) translateY(-335px)',
                }}
              >
                {'\n            '}
                <div className="flex flex-col items-center justify-start gap-2 bg-white/10 backdrop-blur-xs rounded-full p-2 border border-white/20 w-11.5 h-[270px] overflow-hidden">
                  {'\n              '}
                  <div className="size-8.5 shrink-0 rounded-full bg-white flex items-center justify-center p-1.5 shadow-xs">
                    {'\n                '}
                    <img
                      src="/images/icons/icon-7.svg"
                      className="size-5 object-contain"
                      alt="Thérapie et Rééducation"
                    />
                    {'\n              '}
                  </div>
                  {'\n              '}
                  <div
                    className="text-white text-[11px] font-medium tracking-normal whitespace-nowrap"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {'Thérapie et Rééducation'}
                  </div>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n          '}
              <div
                className="absolute top-1/2 inset-s-1/2"
                style={{
                  transform:
                    'translate(-50%, -50%) rotate(22.5deg) translateY(-335px)',
                }}
              >
                {'\n            '}
                <div className="flex flex-col items-center justify-start gap-2 bg-white/10 backdrop-blur-xs rounded-full p-2 border border-white/20 w-11.5 h-[270px] overflow-hidden">
                  {'\n              '}
                  <div className="size-8.5 shrink-0 rounded-full bg-white flex items-center justify-center p-1.5 shadow-xs">
                    {'\n                '}
                    <img
                      src="/images/icons/icon-8.svg"
                      className="size-5 object-contain"
                      alt="Amincissement et Remodelage Corporel"
                    />
                    {'\n              '}
                  </div>
                  {'\n              '}
                  <div
                    className="text-white text-[11px] font-medium tracking-normal whitespace-nowrap"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {'Amincissement et Remodelage Corporel'}
                  </div>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n          '}
              <div
                className="absolute top-1/2 inset-s-1/2"
                style={{
                  transform:
                    'translate(-50%, -50%) rotate(45deg) translateY(-335px)',
                }}
              >
                {'\n            '}
                <div className="flex flex-col items-center justify-start gap-2 bg-white/10 backdrop-blur-xs rounded-full p-2 border border-white/20 w-11.5 h-[270px] overflow-hidden">
                  {'\n              '}
                  <div className="size-8.5 shrink-0 rounded-full bg-white flex items-center justify-center p-1.5 shadow-xs">
                    {'\n                '}
                    <img
                      src="/images/icons/icon-9.svg"
                      className="size-5 object-contain"
                      alt="Drainage et Lifting"
                    />
                    {'\n              '}
                  </div>
                  {'\n              '}
                  <div
                    className="text-white text-[11px] font-medium tracking-normal whitespace-nowrap"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {'Drainage et Lifting'}
                  </div>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n          '}
              <div
                className="absolute top-1/2 inset-s-1/2"
                style={{
                  transform:
                    'translate(-50%, -50%) rotate(67.5deg) translateY(-335px)',
                }}
              >
                {'\n            '}
                <div className="flex flex-col items-center justify-start gap-2 bg-white/10 backdrop-blur-xs rounded-full p-2 border border-white/20 w-11.5 h-[270px] overflow-hidden">
                  {'\n              '}
                  <div className="size-8.5 shrink-0 rounded-full bg-white flex items-center justify-center p-1.5 shadow-xs">
                    {'\n                '}
                    <img
                      src="/images/icons/icon-10.svg"
                      className="size-5 object-contain"
                      alt="Massothérapie"
                    />
                    {'\n              '}
                  </div>
                  {'\n              '}
                  <div
                    className="text-white text-[11px] font-medium tracking-normal whitespace-nowrap"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {'Massothérapie'}
                  </div>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n          '}
              <div
                className="absolute top-1/2 inset-s-1/2"
                style={{
                  transform:
                    'translate(-50%, -50%) rotate(90deg) translateY(-335px)',
                }}
              >
                {'\n            '}
                <div className="flex flex-col items-center justify-start gap-2 bg-white/10 backdrop-blur-xs rounded-full p-2 border border-white/20 w-11.5 h-[270px] overflow-hidden">
                  {'\n              '}
                  <div className="size-8.5 shrink-0 rounded-full bg-white flex items-center justify-center p-1.5 shadow-xs">
                    {'\n                '}
                    <img
                      src="/images/icons/icon-35.svg"
                      className="size-5 object-contain"
                      alt="Soin de Visage et Capillaire"
                    />
                    {'\n              '}
                  </div>
                  {'\n              '}
                  <div
                    className="text-white text-[11px] font-medium tracking-normal whitespace-nowrap"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {'Soin de Visage et Capillaire'}
                  </div>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n          '}
              <div
                className="absolute top-1/2 inset-s-1/2"
                style={{
                  transform:
                    'translate(-50%, -50%) rotate(112.5deg) translateY(-335px)',
                }}
              >
                {'\n            '}
                <div className="flex flex-col items-center justify-start gap-2 bg-white/10 backdrop-blur-xs rounded-full p-2 border border-white/20 w-11.5 h-[270px] overflow-hidden">
                  {'\n              '}
                  <div className="size-8.5 shrink-0 rounded-full bg-white flex items-center justify-center p-1.5 shadow-xs">
                    {'\n                '}
                    <img
                      src="/images/icons/icon-36.svg"
                      className="size-5 object-contain"
                      alt="Beauté et Bien-Être"
                    />
                    {'\n              '}
                  </div>
                  {'\n              '}
                  <div
                    className="text-white text-[11px] font-medium tracking-normal whitespace-nowrap"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {'Beauté et Bien-Être'}
                  </div>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n          '}
              <div
                className="absolute top-1/2 inset-s-1/2"
                style={{
                  transform:
                    'translate(-50%, -50%) rotate(135deg) translateY(-335px)',
                }}
              >
                {'\n            '}
                <div className="flex flex-col items-center justify-start gap-2 bg-white/10 backdrop-blur-xs rounded-full p-2 border border-white/20 w-11.5 h-[270px] overflow-hidden">
                  {'\n              '}
                  <div className="size-8.5 shrink-0 rounded-full bg-white flex items-center justify-center p-1.5 shadow-xs">
                    {'\n                '}
                    <img
                      src="/images/icons/icon-37.svg"
                      className="size-5 object-contain"
                      alt="Laser et Technologie Médico-Esthétique"
                    />
                    {'\n              '}
                  </div>
                  {'\n              '}
                  <div
                    className="text-white text-[11px] font-medium tracking-normal whitespace-nowrap"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {'Laser et Technologie Médico-Esthétique'}
                  </div>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n          '}
              <div
                className="absolute top-1/2 inset-s-1/2"
                style={{
                  transform:
                    'translate(-50%, -50%) rotate(157.5deg) translateY(-335px)',
                }}
              >
                {'\n            '}
                <div className="flex flex-col items-center justify-start gap-2 bg-white/10 backdrop-blur-xs rounded-full p-2 border border-white/20 w-11.5 h-[270px] overflow-hidden">
                  {'\n              '}
                  <div className="size-8.5 shrink-0 rounded-full bg-white flex items-center justify-center p-1.5 shadow-xs">
                    {'\n                '}
                    <img
                      src="/images/icons/icon-38.svg"
                      className="size-5 object-contain"
                      alt="Biohacking Aesthetic Treatments"
                    />
                    {'\n              '}
                  </div>
                  {'\n              '}
                  <div
                    className="text-white text-[11px] font-medium tracking-normal whitespace-nowrap"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {'Biohacking Aesthetic Treatments'}
                  </div>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n          '}
              <div
                className="absolute top-1/2 inset-s-1/2"
                style={{
                  transform:
                    'translate(-50%, -50%) rotate(180deg) translateY(-335px)',
                }}
              >
                {'\n            '}
                <div className="flex flex-col items-center justify-start gap-2 bg-white/10 backdrop-blur-xs rounded-full p-2 border border-white/20 w-11.5 h-[270px] overflow-hidden">
                  {'\n              '}
                  <div className="size-8.5 shrink-0 rounded-full bg-white flex items-center justify-center p-1.5 shadow-xs">
                    {'\n                '}
                    <img
                      src="/images/icons/icon-7.svg"
                      className="size-5 object-contain"
                      alt="Thérapie et Rééducation"
                    />
                    {'\n              '}
                  </div>
                  {'\n              '}
                  <div
                    className="text-white text-[11px] font-medium tracking-normal whitespace-nowrap"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {'Thérapie et Rééducation'}
                  </div>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n          '}
              <div
                className="absolute top-1/2 inset-s-1/2"
                style={{
                  transform:
                    'translate(-50%, -50%) rotate(202.5deg) translateY(-335px)',
                }}
              >
                {'\n            '}
                <div className="flex flex-col items-center justify-start gap-2 bg-white/10 backdrop-blur-xs rounded-full p-2 border border-white/20 w-11.5 h-[270px] overflow-hidden">
                  {'\n              '}
                  <div className="size-8.5 shrink-0 rounded-full bg-white flex items-center justify-center p-1.5 shadow-xs">
                    {'\n                '}
                    <img
                      src="/images/icons/icon-8.svg"
                      className="size-5 object-contain"
                      alt="Amincissement et Remodelage Corporel"
                    />
                    {'\n              '}
                  </div>
                  {'\n              '}
                  <div
                    className="text-white text-[11px] font-medium tracking-normal whitespace-nowrap"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {'Amincissement et Remodelage Corporel'}
                  </div>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n          '}
              <div
                className="absolute top-1/2 inset-s-1/2"
                style={{
                  transform:
                    'translate(-50%, -50%) rotate(225deg) translateY(-335px)',
                }}
              >
                {'\n            '}
                <div className="flex flex-col items-center justify-start gap-2 bg-white/10 backdrop-blur-xs rounded-full p-2 border border-white/20 w-11.5 h-[270px] overflow-hidden">
                  {'\n              '}
                  <div className="size-8.5 shrink-0 rounded-full bg-white flex items-center justify-center p-1.5 shadow-xs">
                    {'\n                '}
                    <img
                      src="/images/icons/icon-9.svg"
                      className="size-5 object-contain"
                      alt="Drainage et Lifting"
                    />
                    {'\n              '}
                  </div>
                  {'\n              '}
                  <div
                    className="text-white text-[11px] font-medium tracking-normal whitespace-nowrap"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {'Drainage et Lifting'}
                  </div>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n          '}
              <div
                className="absolute top-1/2 inset-s-1/2"
                style={{
                  transform:
                    'translate(-50%, -50%) rotate(247.5deg) translateY(-335px)',
                }}
              >
                {'\n            '}
                <div className="flex flex-col items-center justify-start gap-2 bg-white/10 backdrop-blur-xs rounded-full p-2 border border-white/20 w-11.5 h-[270px] overflow-hidden">
                  {'\n              '}
                  <div className="size-8.5 shrink-0 rounded-full bg-white flex items-center justify-center p-1.5 shadow-xs">
                    {'\n                '}
                    <img
                      src="/images/icons/icon-10.svg"
                      className="size-5 object-contain"
                      alt="Massothérapie"
                    />
                    {'\n              '}
                  </div>
                  {'\n              '}
                  <div
                    className="text-white text-[11px] font-medium tracking-normal whitespace-nowrap"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {'Massothérapie'}
                  </div>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n          '}
              <div
                className="absolute top-1/2 inset-s-1/2"
                style={{
                  transform:
                    'translate(-50%, -50%) rotate(270deg) translateY(-335px)',
                }}
              >
                {'\n            '}
                <div className="flex flex-col items-center justify-start gap-2 bg-white/10 backdrop-blur-xs rounded-full p-2 border border-white/20 w-11.5 h-[270px] overflow-hidden">
                  {'\n              '}
                  <div className="size-8.5 shrink-0 rounded-full bg-white flex items-center justify-center p-1.5 shadow-xs">
                    {'\n                '}
                    <img
                      src="/images/icons/icon-35.svg"
                      className="size-5 object-contain"
                      alt="Soin de Visage et Capillaire"
                    />
                    {'\n              '}
                  </div>
                  {'\n              '}
                  <div
                    className="text-white text-[11px] font-medium tracking-normal whitespace-nowrap"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {'Soin de Visage et Capillaire'}
                  </div>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n          '}
              <div
                className="absolute top-1/2 inset-s-1/2"
                style={{
                  transform:
                    'translate(-50%, -50%) rotate(292.5deg) translateY(-335px)',
                }}
              >
                {'\n            '}
                <div className="flex flex-col items-center justify-start gap-2 bg-white/10 backdrop-blur-xs rounded-full p-2 border border-white/20 w-11.5 h-[270px] overflow-hidden">
                  {'\n              '}
                  <div className="size-8.5 shrink-0 rounded-full bg-white flex items-center justify-center p-1.5 shadow-xs">
                    {'\n                '}
                    <img
                      src="/images/icons/icon-36.svg"
                      className="size-5 object-contain"
                      alt="Beauté et Bien-Être"
                    />
                    {'\n              '}
                  </div>
                  {'\n              '}
                  <div
                    className="text-white text-[11px] font-medium tracking-normal whitespace-nowrap"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {'Beauté et Bien-Être'}
                  </div>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n          '}
              <div
                className="absolute top-1/2 inset-s-1/2"
                style={{
                  transform:
                    'translate(-50%, -50%) rotate(315deg) translateY(-335px)',
                }}
              >
                {'\n            '}
                <div className="flex flex-col items-center justify-start gap-2 bg-white/10 backdrop-blur-xs rounded-full p-2 border border-white/20 w-11.5 h-[270px] overflow-hidden">
                  {'\n              '}
                  <div className="size-8.5 shrink-0 rounded-full bg-white flex items-center justify-center p-1.5 shadow-xs">
                    {'\n                '}
                    <img
                      src="/images/icons/icon-37.svg"
                      className="size-5 object-contain"
                      alt="Laser et Technologie Médico-Esthétique"
                    />
                    {'\n              '}
                  </div>
                  {'\n              '}
                  <div
                    className="text-white text-[11px] font-medium tracking-normal whitespace-nowrap"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {'Laser et Technologie Médico-Esthétique'}
                  </div>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n          '}
              <div
                className="absolute top-1/2 inset-s-1/2"
                style={{
                  transform:
                    'translate(-50%, -50%) rotate(337.5deg) translateY(-335px)',
                }}
              >
                {'\n            '}
                <div className="flex flex-col items-center justify-start gap-2 bg-white/10 backdrop-blur-xs rounded-full p-2 border border-white/20 w-11.5 h-[270px] overflow-hidden">
                  {'\n              '}
                  <div className="size-8.5 shrink-0 rounded-full bg-white flex items-center justify-center p-1.5 shadow-xs">
                    {'\n                '}
                    <img
                      src="/images/icons/icon-38.svg"
                      className="size-5 object-contain"
                      alt="Biohacking Aesthetic Treatments"
                    />
                    {'\n              '}
                  </div>
                  {'\n              '}
                  <div
                    className="text-white text-[11px] font-medium tracking-normal whitespace-nowrap"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {'Biohacking Aesthetic Treatments'}
                  </div>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n        '}
            </div>
            {'\n\n        '}
            {'\n        '}
            <div className="relative z-10 bg-primary-4 min-w-52 md:min-w-0 px-6 md:px-10 pt-6 pb-2 rounded-t-full flex flex-col items-center justify-center translate-y-1">
              {'\n          '}
              {'\n          '}
              <img
                src="/images/icons/left.svg"
                className="absolute top-5.5 -inset-s-17 bottom-0 w-23 h-15.5 pointer-events-none"
                alt=""
                aria-hidden="true"
              />
              {'\n          '}
              <img
                src="/images/icons/right.svg"
                className="absolute top-5.5 -inset-e-17 bottom-0 w-23 h-15.5 pointer-events-none"
                alt=""
                aria-hidden="true"
              />
              {'\n\n          '}
              <a
                href="#service"
                className="relative z-10 flex flex-col items-center group cursor-pointer text-center pointer-events-auto"
              >
                {'\n            '}
                <img
                  src="/images/icons/icon-1.svg"
                  className="size-4.5 mb-2 group-hover:rotate-180 transition-transform duration-500"
                />
                {'\n            '}
                <span className="text-primary-3 font-medium text-sm pb-2 whitespace-nowrap">
                  {'Explorez nos rituels'}
                </span>
                {'\n          '}
              </a>
              {'\n        '}
            </div>
            {'\n      '}
          </div>
          {'\n    '}
        </div>
        {'\n  '}
      </section>
      {'\n\n  '}

      {'\n  '}
      <CareGallery />
      {'\n\n  '}

      {'\n  '}
      <section id="service" className="lg:pb-50 md:pb-32.5 pb-25">
        {'\n    '}
        <div className="container">
          {'\n      '}
          {'\n      '}
          <div className="md:mb-12.5 mb-10">
            {'\n        '}
            <div className="flex flex-col items-start gap-4 mb-2.5">
              {'\n          '}
              <div className="inline-flex items-center gap-2 bg-primary-5 border border-white/60 text-primary-2 text-xs font-medium uppercase px-3 py-1.5 rounded-full">
                {'\n            '}
                <span className="w-1.5 h-1.5 rounded-full bg-primary-1"></span>
                {'\n            Prestations & Soins\n          '}
              </div>
              {'\n        '}
            </div>
            {'\n\n        '}
            <div className="md:flex justify-between items-center">
              {'\n          '}
              <h2 className="text-3xl md:text-6xl lg:text-7xl font-medium text-primary-3 tracking-tight md:mb-0 mb-2.5">
                {'Nos Prestations'}
              </h2>
              {'\n          '}
              <div className="inline-block">
                {'\n            '}
                <a
                  href="service.html"
                  className="flex items-center gap-2.5 bg-primary transition-colors rounded-full ps-2.5 py-2.5 pe-5 text-sm font-medium group text-primary-3"
                >
                  {'\n              '}
                  <div className="flex items-center justify-center size-6 bg-white rounded-full">
                    {'\n                '}
                    <img
                      src="/images/icons/icon-1.svg"
                      alt="Icon"
                      className="size-4 transition-transform duration-300 group-hover:rotate-180"
                    />
                    {'\n              '}
                  </div>
                  {'\n              Voir tout\n            '}
                </a>
                {'\n          '}
              </div>
              {'\n        '}
            </div>
            {'\n      '}
          </div>
          {'\n\n      '}
          {'\n      '}
          <ServiceAccordion appointmentLabel="Prendre RDV" />
          {'\n    '}
        </div>
        {'\n  '}
      </section>
      {'\n\n  '}

      {'\n  '}
      <section className="lg:px-12.5 md:px-5 px-3.75">
        {'\n    '}
        <div className="lg:py-40 md:py-20 py-16 bg-primary-5 md:rounded-4xl rounded-3xl">
          {'\n      '}
          <div className="container-medium">
            {'\n        '}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-15 gap-7.5 items-center">
              {'\n\n          '}
              {'\n          '}
              <div className="relative w-full rounded-4xl overflow-hidden group">
                {'\n            '}
                <img
                  src="/images/about/about.webp"
                  alt="Notre approche"
                  className="w-full lg:h-auto md:h-142 h-82 object-cover"
                />
                {'\n\n            '}
                {'\n            '}
                <div className="absolute bottom-0 inset-x-0 md:h-[230px] h-37.5 bg-primary-1 blur-[90px] pointer-events-none z-0"></div>
                {'\n\n            '}
                {'\n            '}
                <div className="absolute bottom-2.5 inset-x-2.5 lg:bottom-5 lg:inset-x-5 rounded-3xl bg-primary-1/40 backdrop-blur-md border border-white/10 p-3 md:p-6 lg:p-7.5 flex items-center justify-between z-10">
                  {'\n              '}
                  <div className="flex flex-col text-white">
                    {'\n                '}
                    <h3 className="text-xl md:text-3xl font-medium mb-1 text-white">
                      {'Habiba Aboukebcha'}
                    </h3>
                    {'\n                '}
                    <p className="text-white text-sm font-medium">
                      {'Kinésithérapeute & Skinthérapeute'}
                    </p>
                    {'\n                '}
                    <p className="text-white/80 text-xs">
                      {
                        'Spécialiste en Soin Médico-Esthétique et Thérapie Régénérative'
                      }
                    </p>
                    {'\n              '}
                  </div>
                  {'\n              '}
                  <img
                    src="/images/icons/mono_blanc.svg"
                    alt="Icone"
                    className="size-6 shrink-0"
                  />
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n\n          '}
              {'\n          '}
              <div className="flex flex-col items-start gap-y-2.5">
                {'\n            '}
                {'\n            '}
                <div className="inline-flex items-center gap-2 bg-primary-1/10 text-primary-1 text-xs font-medium uppercase px-3 py-1.5 rounded-full">
                  {'\n              '}
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-1"></span>
                  {
                    "\n              L'excellence au service de votre peau\n            "
                  }
                </div>
                {'\n\n            '}
                {'\n            '}
                <h2 className="text-3xl md:text-6xl lg:text-7xl leading-[1.1] font-medium text-primary-3 lg:text-nowrap">
                  {'Un centre engagé'}
                </h2>
                {'\n\n            '}
                {'\n            '}
                <p className="text-primary-2 leading-[1.2] md:text-base text-sm lg:mb-12.5 md:mb-8 mb-5">
                  {
                    'Chaque traitement débute par une consultation minutieuse et un plan de soins personnalisé, fondé sur la science.'
                  }
                </p>
                {'\n\n            '}
                {'\n            '}
                <div className="flex flex-col gap-5 lg:mb-12.5 md:mb-8 mb-5 w-full">
                  {'\n              '}
                  <div className="flex lg:items-center items-start gap-2.5">
                    {'\n                '}
                    <div className="bg-white shrink-0 rounded-full md:size-10 size-7.5 flex items-center justify-center text-primary-1">
                      {'\n                  '}
                      <img
                        src="/images/icons/icon-11.svg"
                        alt="Icon"
                        className="md:size-6 size-5"
                      />
                      {'\n                '}
                    </div>
                    {'\n                '}
                    <span className="font-medium md:text-lg">
                      {'Méthodes de traitement scientifiquement prouvées'}
                    </span>
                    {'\n              '}
                  </div>
                  {'\n\n              '}
                  <div className="flex lg:items-center items-start gap-2.5">
                    {'\n                '}
                    <div className="bg-white shrink-0 rounded-full md:size-10 size-7.5 flex items-center justify-center text-primary-1">
                      {'\n                  '}
                      <img
                        src="/images/icons/icon-12.svg"
                        alt="Icon"
                        className="md:size-6 size-5"
                      />
                      {'\n                '}
                    </div>
                    {'\n                '}
                    <span className="font-medium md:text-lg">
                      {"Une équipe d'experts certifiés et passionnés"}
                    </span>
                    {'\n              '}
                  </div>
                  {'\n\n              '}
                  <div className="flex lg:items-center items-start gap-2.5">
                    {'\n                '}
                    <div className="bg-white shrink-0 rounded-full md:size-10 size-7.5 flex items-center justify-center text-primary-1">
                      {'\n                  '}
                      <img
                        src="/images/icons/icon-13.svg"
                        alt="Icon"
                        className="md:size-6 size-5"
                      />
                      {'\n                '}
                    </div>
                    {'\n                '}
                    <span className="font-medium md:text-lg">
                      {'Soins personnalisés adaptés à votre nature unique'}
                    </span>
                    {'\n              '}
                  </div>
                  {'\n            '}
                </div>
                {'\n\n            '}
                {'\n            '}
                <a
                  href="contact.html"
                  className="flex items-center gap-2.5 bg-primary transition-colors rounded-full ps-2.5 py-2.5 pe-5 text-sm font-medium group text-primary-3"
                >
                  {'\n              '}
                  <div className="flex items-center justify-center size-6 bg-white rounded-full">
                    {'\n                '}
                    <img
                      src="/images/icons/icon-1.svg"
                      alt="Icon"
                      className="size-4 transition-transform duration-300 group-hover:rotate-180"
                    />
                    {'\n              '}
                  </div>
                  {'\n              Notre Approche\n            '}
                </a>
                {'\n          '}
              </div>
              {'\n        '}
            </div>
            {'\n      '}
          </div>
          {'\n    '}
        </div>
        {'\n  '}
      </section>
      {'\n\n  '}

      {'\n  '}
      <section className="lg:py-50 py-32.5">
        {'\n    '}
        <div className="container-medium">
          {'\n      '}
          {'\n      '}
          <div className="flex flex-col items-center justify-center text-center mb-12.5">
            {'\n        '}
            <div className="inline-flex items-center gap-2 bg-primary-1/5 text-primary-1 text-xs font-medium uppercase px-3 py-1.5 rounded-full mb-2.5">
              {'\n          '}
              <span className="w-1.5 h-1.5 rounded-full bg-primary-1"></span>
              {'\n          Pourquoi nous choisir\n        '}
            </div>
            {'\n        '}
            <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-medium text-primary-3 w-xl">
              {'Un accompagnement '}
              <br className="lg:hidden block" />
              {'centré sur vous'}
            </h2>
            {'\n      '}
          </div>
          {'\n\n      '}
          {'\n      '}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 h-auto lg:h-[750px]">
            {'\n\n        '}
            {'\n        '}
            <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col gap-5">
              {'\n          '}
              <div
                className="relative w-full h-[420px] md:h-[400px] lg:h-auto flex-1 rounded-3xl overflow-hidden group shadow-sm bg-primary-5 p-6 lg:p-8 flex flex-col justify-end"
                style={{ '--pos': '50%' }}
              >
                {'\n            '}
                <img
                  src="/images/services/after-treatment.webp"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {'\n            '}
                <img
                  src="/images/services/before-treatment.webp"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    clipPath:
                      'polygon(0 0, var(--pos) 0, var(--pos) 100%, 0 100%)',
                  }}
                />
                {'\n\n            '}
                <div className="absolute top-6 inset-s-6 bg-white/40 backdrop-blur-sm text-default-800 font-medium text-sm px-4 py-1.5 rounded-md z-10 shadow-sm pointer-events-none">
                  {'Avant'}
                </div>
                {'\n            '}
                <div className="absolute top-6 inset-e-6 bg-white/40 backdrop-blur-sm text-default-800 font-medium text-sm px-4 py-1.5 rounded-md z-10 shadow-sm pointer-events-none">
                  {'Après'}
                </div>
                {'\n\n            '}
                <div
                  className="absolute inset-y-0 w-0.5 bg-white pointer-events-none z-10"
                  style={{ left: 'var(--pos)', transform: 'translateX(-50%)' }}
                >
                  {'\n              '}
                  <div className="absolute top-1/2 inset-s-1/2 -translate-x-1/2 -translate-y-1/2 size-10 bg-white rounded-full flex items-center justify-center text-primary-2 shadow-lg">
                    {'\n                '}
                    <i className="iconify lucide--code size-5 rotate-90 text-primary-1"></i>
                    {'\n              '}
                  </div>
                  {'\n            '}
                </div>
                {'\n\n            '}
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="50"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  onInput={(event) =>
                    event.currentTarget.parentNode.style.setProperty(
                      '--pos',
                      event.currentTarget.value + '%',
                    )
                  }
                />
                {'\n            '}
                <div className="absolute -bottom-6 inset-x-0 h-40 bg-primary-1 blur-[40px] pointer-events-none z-10"></div>
                {'\n\n            '}
                <div className="relative z-30 pointer-events-none mt-auto">
                  {'\n              '}
                  <h3 className="text-2xl lg:text-3xl font-medium text-white mb-2.5 leading-tight">
                    {'Résultats réels, émotions partagées'}
                  </h3>
                  {'\n              '}
                  <div className="flex items-center gap-4 text-white text-sm font-medium">
                    {'\n                '}
                    <div className="flex items-center gap-2.5">
                      {'\n                  '}
                      <i className="iconify lucide--calendar-check size-4"></i>
                      {'\n                  '}
                      <span>{'12 Semaines'}</span>
                      {'\n                '}
                    </div>
                    {'\n                '}
                    <div className="flex items-center gap-2">
                      {'\n                  '}
                      <i className="iconify lucide--sparkle size-4"></i>
                      {'\n                  '}
                      <span>{"Soin de l'acné"}</span>
                      {'\n                '}
                    </div>
                    {'\n              '}
                  </div>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n\n          '}
              <div className="bg-primary-5 rounded-3xl md:p-7.5 p-5 flex flex-col items-center justify-center text-center border border-primary-1/5 shrink-0">
                {'\n            '}
                <div className="relative flex items-center justify-center mb-5">
                  {'\n              '}
                  <img
                    src="/images/icons/icon-18.svg"
                    alt=""
                    className="size-12.5"
                  />
                  {'\n              '}
                  <span className="absolute text-primary-1 text-xs font-medium tracking-wider uppercase mt-0.5">
                    {'Offert'}
                  </span>
                  {'\n            '}
                </div>
                {'\n\n            '}
                <div className="space-y-2.5 mb-5">
                  {'\n              '}
                  <p className="text-primary-2 font-medium">
                    {'Bilan personnalisé'}
                  </p>
                  {'\n              '}
                  <h3 className="text-2xl md:text-3xl font-medium text-primary-3 font-heading">
                    {'Consultation gratuite'}
                  </h3>
                  {'\n              '}
                  <p className="text-primary-2 font-medium">
                    {'Avant chaque soin'}
                  </p>
                  {'\n            '}
                </div>
                {'\n\n            '}
                <a
                  href="contact.html"
                  className="flex items-center gap-2.5 bg-primary transition-colors rounded-full ps-2.5 py-2.5 pe-5 text-sm font-medium group text-primary-3"
                >
                  {'\n              '}
                  <div className="flex items-center justify-center size-6 bg-white rounded-full">
                    {'\n                '}
                    <img
                      src="/images/icons/icon-1.svg"
                      alt="Icon"
                      className="size-4 transition-transform duration-300 group-hover:rotate-180"
                    />
                    {'\n              '}
                  </div>
                  {'\n              Réserver\n            '}
                </a>
                {'\n          '}
              </div>
              {'\n        '}
            </div>
            {'\n\n        '}
            {'\n        '}
            <div className="lg:col-span-8 flex flex-col gap-5 h-full">
              {'\n          '}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:h-72.5 h-100 shrink-0">
                {'\n            '}
                <div className="md:col-span-7 bg-primary-5 rounded-3xl lg:p-7.5 p-5 relative overflow-hidden flex flex-col border border-primary-1/5">
                  {'\n              '}
                  <h3 className="text-2xl md:text-3xl leading-tight font-medium text-primary-3 z-10 max-w-[220px] lg:mx-6">
                    {'Une expérience fluide et sereine'}
                  </h3>
                  {'\n              '}
                  <img
                    src="/images/about/left-hand.webp"
                    className="absolute bottom-14 inset-s-0 w-[48%] object-contain"
                  />
                  {'\n              '}
                  <img
                    src="/images/about/right-hand.webp"
                    className="absolute -bottom-2 -inset-e-4.5 w-[58%] object-contain translate-x-2"
                  />
                  {'\n            '}
                </div>
                {'\n\n            '}
                <div className="md:col-span-5 bg-primary-5 rounded-3xl lg:p-7.5 p-5 relative overflow-hidden flex md:flex-row flex-col border border-primary-1/5">
                  {'\n              '}
                  <div className="flex flex-col md:flex-1 z-10 h-full justify-between md:text-start text-center">
                    {'\n                '}
                    <div>
                      {'\n                  '}
                      <h3 className="text-2xl lg:text-3xl font-medium text-primary-3 leading-tight mb-4 tracking-tight">
                        {'Plusieurs années'}
                      </h3>
                      {'\n                  '}
                      <p className="text-primary-2 font-medium leading-snug">
                        {'d’expérience'}
                      </p>
                      {'\n                '}
                    </div>
                    {'\n                '}
                    <div className="flex flex-col gap-4 lg:mt-auto mt-4">
                      {'\n                  '}
                      <div>
                        {'\n                    '}
                        <span className="bg-white rounded-full px-2.5 py-1.25 text-sm font-medium text-nowrap">
                          {'2 000+ Procédures'}
                        </span>
                        {'\n                  '}
                      </div>
                      {'\n                  '}
                      <div>
                        {'\n                    '}
                        <span className="bg-white rounded-full px-2.5 py-1.25 text-sm font-medium">
                          {'50+ Traitements'}
                        </span>
                        {'\n                  '}
                      </div>
                      {'\n                '}
                    </div>
                    {'\n              '}
                  </div>
                  {'\n              '}
                  <div className="relative shrink-0 flex md:flex-col flex-row items-center justify-center md:-space-y-6 md:-mx-0 -mx-4 md:mt-0 mt-5">
                    {'\n                '}
                    <img
                      src="/images/avatar/avatar-15.webp"
                      className="lg:size-24.5 md:size-22 size-12.5 rounded-full border border-primary-5 object-cover z-30 relative"
                    />
                    {'\n                '}
                    <img
                      src="/images/avatar/avatar-14.webp"
                      className="lg:size-32.5 md:size-27.5 size-17.5 rounded-full border border-primary-5 object-cover z-50 relative"
                    />
                    {'\n                '}
                    <img
                      src="/images/avatar/avatar-16.webp"
                      className="lg:size-24.5 md:size-22 size-12.5 rounded-full border border-primary-5 object-cover z-10 relative"
                    />
                    {'\n              '}
                  </div>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n\n          '}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 min-h-90">
                {'\n            '}
                <div className="md:col-span-7 flex flex-col gap-5 h-full">
                  {'\n              '}
                  <div className="bg-primary-5 rounded-3xl md:p-7.5 p-5 flex flex-col items-center justify-end text-center relative overflow-hidden md:flex-1 border border-primary-1/5 md:min-h-68">
                    {'\n                '}
                    {'\n                '}
                    <div className="absolute top-64 inset-0 hidden md:flex items-center justify-center pointer-events-none">
                      {'\n                  '}
                      <div className="relative w-50 h-68 animate-revolve">
                        {'\n                    '}
                        <div
                          className="absolute top-1/2 inset-s-1/2"
                          style={{
                            transform: 'rotate(0deg) translateY(-220px)',
                          }}
                        >
                          {'\n                      '}
                          <div
                            className="absolute -top-10 -inset-s-10 w-[80px] h-[80px]"
                            style={{ transform: 'rotate(0deg)' }}
                          >
                            {'\n                        '}
                            <div className="animate-counter-revolve w-full h-full">
                              {'\n                          '}
                              <img
                                src="/images/avatar/avatar-17.webp"
                                className="w-full h-full rounded-2xl object-cover shadow-sm border border-black/5 max-w-none"
                              />
                              {'\n                        '}
                            </div>
                            {'\n                      '}
                          </div>
                          {'\n                    '}
                        </div>
                        {'\n                    '}
                        <div
                          className="absolute top-1/2 inset-s-1/2"
                          style={{
                            transform: 'rotate(45deg) translateY(-220px)',
                          }}
                        >
                          {'\n                      '}
                          <div
                            className="absolute -top-10 -inset-s-10 w-[80px] h-[80px]"
                            style={{ transform: 'rotate(-45deg)' }}
                          >
                            {'\n                        '}
                            <div className="animate-counter-revolve w-full h-full">
                              {'\n                          '}
                              <img
                                src="/images/avatar/avatar-18.webp"
                                className="w-full h-full rounded-2xl object-cover shadow-sm border border-black/5 max-w-none"
                              />
                              {'\n                        '}
                            </div>
                            {'\n                      '}
                          </div>
                          {'\n                    '}
                        </div>
                        {'\n                    '}
                        <div
                          className="absolute top-1/2 inset-s-1/2"
                          style={{
                            transform: 'rotate(90deg) translateY(-220px)',
                          }}
                        >
                          {'\n                      '}
                          <div
                            className="absolute -top-10 -inset-s-10 w-[80px] h-[80px]"
                            style={{ transform: 'rotate(-90deg)' }}
                          >
                            {'\n                        '}
                            <div className="animate-counter-revolve w-full h-full">
                              {'\n                          '}
                              <img
                                src="/images/avatar/avatar-19.webp"
                                className="w-full h-full rounded-2xl object-cover shadow-sm border border-black/5 max-w-none"
                              />
                              {'\n                        '}
                            </div>
                            {'\n                      '}
                          </div>
                          {'\n                    '}
                        </div>
                        {'\n                  '}
                      </div>
                      {'\n                '}
                    </div>
                    {'\n\n                '}
                    <div className="relative z-10 w-full">
                      {'\n                  '}
                      <h3 className="text-2xl md:text-3xl font-medium text-primary-3 mb-2.5 font-heading leading-tight">
                        {'Un rituel sur-mesure'}
                      </h3>
                      {'\n                  '}
                      <p className="text-primary-2 max-w-60 mx-auto leading-snug font-medium">
                        {
                          'Des plans de soins personnalisés pour chaque personne'
                        }
                      </p>
                      {'\n                '}
                    </div>
                    {'\n              '}
                  </div>
                  {'\n\n              '}
                  <div className="rounded-3xl overflow-hidden relative group flex items-end p-6 lg:h-68 md:h-50 h-60 shrink-0 shadow-sm border border-white/20">
                    {'\n                '}
                    <video
                      src="videos/bg-vd.mp4"
                      autoplay=""
                      loop={true}
                      muted={true}
                      playsInline={true}
                      className="absolute inset-0 w-full h-full object-cover z-0"
                    ></video>
                    {'\n                '}
                    <div className="absolute inset-s-0 -bottom-6 bg-primary-1 z-10 h-25 w-full blur-xl"></div>
                    {'\n                '}
                    <div className="relative z-20 text-center w-full">
                      {'\n                  '}
                      <h3 className="md:text-3xl text-2xl font-medium text-white leading-tight">
                        {'Technologie de pointe'}
                      </h3>
                      {'\n                '}
                    </div>
                    {'\n              '}
                  </div>
                  {'\n            '}
                </div>
                {'\n\n            '}
                <PatientGuidanceCard />
                {'\n          '}
              </div>
              {'\n        '}
            </div>
            {'\n      '}
          </div>
          {'\n    '}
        </div>
        {'\n  '}
      </section>
      {'\n\n  '}

      {'\n  '}
      <section className="lg:pt-30 lg:pb-50 md:pb-32.5 pb-25">
        {'\n    '}
        <div className="container-medium">
          {'\n      '}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-15 gap-7.5 items-start">
            {'\n        '}
            {'\n        '}
            <div className="flex flex-col lg:justify-between h-full">
              {'\n          '}
              <div className="flex flex-col gap-2.5">
                {'\n            '}
                <div>
                  {'\n              '}
                  <div className="inline-flex items-center gap-2 bg-primary-5 border border-white/60 text-primary-1 text-xs font-medium uppercase px-3 py-1.5 rounded-full">
                    {'\n                '}
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-1"></span>
                    {
                      '\n                Thérapie & Soins Régénératifs\n              '
                    }
                  </div>
                  {'\n            '}
                </div>
                {'\n\n            '}
                <h2 className="text-3xl lg:text-[46px] leading-[1.1] font-medium text-primary-3">
                  {
                    'Des soins experts, personnalisés et adaptés à chaque personne'
                  }
                </h2>
                {'\n\n            '}
                <p className="text-primary-2 lg:leading-relaxed lg:mb-0 mb-5">
                  {
                    "De la rééducation tissulaire aux soins réparateurs cutanés, du drainage lymphatique au remodelage corporel, en passant par les technologies laser et médico-esthétiques, bénéficiez d'une prise en charge experte, personnalisée et sécurisée."
                  }
                </p>
                {'\n          '}
              </div>
              {'\n\n          '}
              <div className="grid grid-cols-2 gap-5">
                {'\n            '}
                <div className="flex lg:items-center items-start gap-2.5">
                  {'\n              '}
                  <div>
                    <i className="iconify lucide--badge-check md:size-6 size-4.5 lg:mt-0 md:mt-1"></i>
                  </div>
                  {'\n              '}
                  <span className="text-primary-2 font-medium lg:text-lg md:text-base text-sm">
                    {'Kinésithérapie & Rééducation'}
                  </span>
                  {'\n            '}
                </div>
                {'\n            '}
                <div className="flex lg:items-center items-start gap-2.5">
                  {'\n              '}
                  <div>
                    <i className="iconify lucide--badge-check md:size-6 size-4.5 lg:mt-0 md:mt-1"></i>
                  </div>
                  {'\n              '}
                  <span className="text-primary-2 font-medium lg:text-lg md:text-base text-sm">
                    {'Amincissement & Silhouette'}
                  </span>
                  {'\n            '}
                </div>
                {'\n            '}
                <div className="flex lg:items-center items-start gap-2.5">
                  {'\n              '}
                  <div>
                    <i className="iconify lucide--badge-check md:size-6 size-4.5 lg:mt-0 md:mt-1"></i>
                  </div>
                  {'\n              '}
                  <span className="text-primary-2 font-medium lg:text-lg md:text-base text-sm">
                    {'Drainage & Lifting tissulaire'}
                  </span>
                  {'\n            '}
                </div>
                {'\n            '}
                <div className="flex lg:items-center items-start gap-2.5">
                  {'\n              '}
                  <div>
                    <i className="iconify lucide--badge-check md:size-6 size-4.5 lg:mt-0 md:mt-1"></i>
                  </div>
                  {'\n              '}
                  <span className="text-primary-2 font-medium lg:text-lg md:text-base text-sm">
                    {'Massothérapie experte'}
                  </span>
                  {'\n            '}
                </div>
                {'\n            '}
                <div className="flex lg:items-center items-start gap-2.5">
                  {'\n              '}
                  <div>
                    <i className="iconify lucide--badge-check md:size-6 size-4.5 lg:mt-0 md:mt-1"></i>
                  </div>
                  {'\n              '}
                  <span className="text-primary-2 font-medium lg:text-lg md:text-base text-sm">
                    {'Soin visage & capillaire'}
                  </span>
                  {'\n            '}
                </div>
                {'\n            '}
                <div className="flex lg:items-center items-start gap-2.5">
                  {'\n              '}
                  <div>
                    <i className="iconify lucide--badge-check md:size-6 size-4.5 lg:mt-0 md:mt-1"></i>
                  </div>
                  {'\n              '}
                  <span className="text-primary-2 font-medium lg:text-lg md:text-base text-sm">
                    {'Biohacking & Régénération'}
                  </span>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n        '}
            </div>
            {'\n\n        '}
            {'\n        '}
            <div className="relative w-full rounded-4xl overflow-hidden">
              {'\n          '}
              <img
                src="/images/about/about-2.webp"
                alt="Thérapie et Soins Régénératifs"
                className="w-full lg:h-auto md:h-114 h-88 object-cover rounded-4xl"
              />
              {'\n          '}
              <div className="absolute bottom-4 inset-s-4 lg:bottom-5 lg:left-5 bg-primary-1/60 backdrop-blur-lg border border-white/20 md:p-7.5 p-3 rounded-3xl w-78 z-20">
                {'\n            '}
                <i className="iconify lucide--message-square-more md:size-10.5 size-7.5 text-white mb-4"></i>
                {'\n            '}
                <h3 className="text-white md:text-3xl text-xl leading-tight font-medium">
                  {'Accompagnement et conseil personnalisé'}
                </h3>
                {'\n          '}
              </div>
              {'\n          '}
              <div className="absolute h-57.5 bg-primary-1/50 w-full bottom-0 inset-s-0 blur-[30px]"></div>
              {'\n        '}
            </div>
            {'\n      '}
          </div>
          {'\n    '}
        </div>
        {'\n  '}
      </section>
      {'\n\n  '}

      {'\n  '}
      <ClinicGallery />
      {'\n\n  '}

      {'\n\n  '}

      {'\n  '}
      <section className="lg:mt-50 md:mt-32.5 mt-25">
        {'\n    '}
        <div className="container-medium">
          {'\n      '}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-primary-5 rounded-4xl overflow-hidden">
            {'\n        '}
            <div className="lg:p-12.5 md:p-6.5 p-5 w-full flex flex-col justify-center">
              {'\n          '}
              <h2 className="text-3xl md:text-4xl lg:text-[46px] font-medium text-primary-3 mb-2">
                {'Demander un rendez-vous'}
              </h2>
              {'\n          '}
              <p className="text-primary-2 mb-10 md:mb-12.5 text-base">
                {
                  'Réservez votre rituel en discutant directement avec notre équipe sur WhatsApp.'
                }
              </p>
              {'\n\n          '}
              <WhatsAppContact kind="booking" description={false} />
              {'\n        '}
            </div>
            {'\n\n        '}
            <div className="relative w-full h-full min-h-84 md:min-h-0">
              {'\n          '}
              <div className="w-full h-full overflow-hidden relative">
                {'\n            '}
                <img
                  src="/images/about/about-4.webp"
                  alt="Rendez-vous"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {'\n            '}
                <div className="absolute bottom-3 inset-x-3 lg:bottom-5 lg:inset-x-4 backdrop-blur-md md:p-7.5 p-5 rounded-2xl flex flex-col items-center justify-center text-center text-white z-10 bg-primary-1/60 border border-white/10 shadow-lg">
                  {'\n              '}
                  <img
                    src="/images/icons/mono_blanc.svg"
                    alt="Icon"
                    className="size-6 mb-5"
                  />
                  {'\n              '}
                  <h3 className="text-xl font-medium mb-2.5 text-white">
                    {'Informations générales'}
                  </h3>
                  {'\n              '}
                  <div className="flex flex-col gap-2.5 text-base">
                    {'\n                '}
                    <a
                      href="tel:+212533511815"
                      className="flex items-center justify-center gap-2 hover:underline transition-opacity"
                    >
                      {'\n                  '}
                      <i className="iconify lucide--phone size-4"></i>
                      {'\n                  '}
                      <span>{'Fixe : 05 33 51 18 15'}</span>
                      {'\n                '}
                    </a>
                    {'\n                '}
                    <a
                      href="https://wa.me/212713615758"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 hover:underline transition-opacity"
                    >
                      {'\n                  '}
                      <i className="iconify tabler--brand-whatsapp size-4 text-white"></i>
                      {'\n                  '}
                      <span>{'WhatsApp : 07 13 61 57 58'}</span>
                      {'\n                '}
                    </a>
                    {'\n                '}
                    <a
                      href="mailto:contact@skintherapie.ma"
                      className="flex items-center justify-center gap-2 hover:underline transition-opacity"
                    >
                      {'\n                  '}
                      <i className="iconify lucide--mail size-4"></i>
                      {'\n                  '}
                      <span>{'contact@skintherapie.ma'}</span>
                      {'\n                '}
                    </a>
                    {'\n              '}
                  </div>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n          '}
              <div className="absolute bottom-3 inset-s-0 h-60 w-full bg-primary-1/50 blur-[30px]"></div>
              {'\n        '}
            </div>
            {'\n      '}
          </div>
          {'\n    '}
        </div>
        {'\n  '}
      </section>
      {'\n\n  '}

      {'\n  '}
      <section className="lg:py-50 md:py-32.5 py-24">
        {'\n    '}
        <div className="container-medium">
          {'\n      '}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-25 gap-15">
            {'\n        '}
            <div className="flex flex-col justify-between h-full">
              {'\n          '}
              <div className="md:mb-0 mb-10">
                {'\n            '}
                <div className="inline-flex items-center gap-2 bg-primary-5 border border-white/60 text-primary-1 text-xs font-medium uppercase px-3 py-1.5 rounded-full mb-2.5 w-max">
                  {'\n              '}
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-1"></span>
                  {'\n              Questions Fréquentes\n            '}
                </div>
                {'\n            '}
                <h2 className="text-3xl md:text-6xl leading-[1.1] font-medium text-primary-3">
                  {'Questions '}
                  <br />
                  {' fréquentes'}
                </h2>
                {'\n          '}
              </div>
              {'\n\n          '}
              <div className="relative w-full rounded-3xl lg:rounded-4xl overflow-hidden mt-auto">
                {'\n            '}
                <img
                  src="/images/about/about-5.webp"
                  alt="FAQ"
                  className="w-full lg:h-46 h-58 object-cover"
                />
                {'\n            '}
                <div className="absolute md:bottom-12 bottom-6 inset-x-4 md:inset-x-7.5 lg:flex items-center justify-between gap-5 text-white z-10">
                  {'\n              '}
                  <div className="flex flex-col lg:mb-0 mb-5">
                    {'\n                '}
                    <h3 className="text-xl text-white font-medium mb-1.5">
                      {'Encore une interrogation ?'}
                    </h3>
                    {'\n                '}
                    <p className="text-sm w-70">
                      {
                        'Notre équipe est là pour vous guider vers le soin le plus adapté.'
                      }
                    </p>
                    {'\n              '}
                  </div>
                  {'\n              '}
                  <div className="inline-flex">
                    {'\n                '}
                    <a
                      href="contact.html"
                      className="flex items-center gap-2.5 bg-primary-5 transition-colors rounded-full ps-2.5 py-2.5 pe-5 text-sm font-medium group text-primary-2"
                    >
                      {'\n                  '}
                      <div className="flex items-center justify-center size-6 bg-white rounded-full">
                        {'\n                    '}
                        <img
                          src="/images/icons/icon-1.svg"
                          alt="Icon"
                          className="size-4 transition-transform duration-300 group-hover:rotate-180"
                        />
                        {'\n                  '}
                      </div>
                      {'\n                  Nous contacter\n                '}
                    </a>
                    {'\n              '}
                  </div>
                  {'\n            '}
                </div>
                {'\n            '}
                <div className="absolute bottom-0 inset-s-0 h-40 w-full bg-primary-1/50 blur-[40px] z-0"></div>
                {'\n          '}
              </div>
              {'\n        '}
            </div>
            {'\n\n        '}
            <div className="hs-accordion-group flex flex-col gap-4">
              {'\n\n          '}
              {'\n          '}
              <div
                className="hs-accordion active bg-white hs-accordion-active:bg-primary-5 rounded-2xl p-5 transition-colors"
                id="faq-1"
              >
                {'\n            '}
                <button
                  className="hs-accordion-toggle inline-flex items-center justify-between w-full font-medium text-primary-3 md:text-xl font-heading transition text-left"
                  aria-controls="faq-collapse-1"
                >
                  {
                    '\n              Comment réserver mon premier soin ?\n              '
                  }
                  <span className="size-8.75 shrink-0 flex justify-center items-center text-primary-1 hs-accordion-active:bg-white rounded-full transition-colors">
                    {'\n                '}
                    <i className="iconify lucide--plus size-5 hs-accordion-active:rotate-135 transition-all duration-500"></i>
                    {'\n              '}
                  </span>
                  {'\n            '}
                </button>
                {'\n            '}
                <div
                  id="faq-collapse-1"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="faq-1"
                >
                  {'\n              '}
                  <p className="text-primary-2 mt-5 text-sm md:text-base leading-[1.4] max-w-2xl font-medium">
                    {
                      "\n                Contactez-nous directement sur WhatsApp via le bouton « Prendre rendez-vous ». Indiquez le soin qui vous intéresse et vos disponibilités : notre équipe vous accompagne dans votre choix et vous propose un créneau adapté.\n              "
                    }
                  </p>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n\n          '}
              {'\n          '}
              <div
                className="hs-accordion bg-white hs-accordion-active:bg-primary-5 rounded-2xl p-5 transition-colors"
                id="faq-2"
              >
                {'\n            '}
                <button
                  className="hs-accordion-toggle inline-flex items-center justify-between w-full font-medium text-primary-3 md:text-xl font-heading transition text-left"
                  aria-controls="faq-collapse-2"
                >
                  {
                    '\n              Proposez-vous des consultations de diagnostic ?\n              '
                  }
                  <span className="size-8.75 shrink-0 flex justify-center items-center text-primary-1 hs-accordion-active:bg-white rounded-full transition-colors">
                    {'\n                '}
                    <i className="iconify lucide--plus size-5 hs-accordion-active:rotate-135 transition-all duration-500"></i>
                    {'\n              '}
                  </span>
                  {'\n            '}
                </button>
                {'\n            '}
                <div
                  id="faq-collapse-2"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="faq-2"
                >
                  {'\n              '}
                  <p className="text-primary-2 mt-5 text-sm md:text-base leading-[1.4] max-w-2xl font-medium">
                    {
                      '\n                Oui, nous proposons des consultations préliminaires pour définir vos besoins cutanés. Contactez notre accueil pour connaître les modalités et disponibilités.\n              '
                    }
                  </p>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n\n          '}
              {'\n          '}
              <div
                className="hs-accordion bg-white hs-accordion-active:bg-primary-5 rounded-2xl p-5 transition-colors"
                id="faq-3"
              >
                {'\n            '}
                <button
                  className="hs-accordion-toggle inline-flex items-center justify-between w-full font-medium text-primary-3 md:text-xl font-heading transition text-left"
                  aria-controls="faq-collapse-3"
                >
                  {
                    '\n              Quand les résultats du laser commencent-ils à apparaître ?\n              '
                  }
                  <span className="size-8.75 shrink-0 flex justify-center items-center text-primary-1 hs-accordion-active:bg-white rounded-full transition-colors">
                    {'\n                '}
                    <i className="iconify lucide--plus size-5 hs-accordion-active:rotate-135 transition-all duration-500"></i>
                    {'\n              '}
                  </span>
                  {'\n            '}
                </button>
                {'\n            '}
                <div
                  id="faq-collapse-3"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="faq-3"
                >
                  {'\n              '}
                  <p className="text-primary-2 mt-5 text-sm md:text-base leading-[1.4] max-w-2xl font-medium">
                    {
                      "\n                Les premiers résultats peuvent être visibles dès la première séance. Ils varient selon la zone traitée et chaque personne.\n              "
                    }
                  </p>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n\n          '}
              {'\n          '}
              <div
                className="hs-accordion bg-white hs-accordion-active:bg-primary-5 rounded-2xl p-5 transition-colors"
                id="faq-4"
              >
                {'\n            '}
                <button
                  className="hs-accordion-toggle inline-flex items-center justify-between w-full font-medium text-primary-3 md:text-xl font-heading transition text-left"
                  aria-controls="faq-collapse-4"
                >
                  {
                    '\n              Les soins sont-ils douloureux ?\n              '
                  }
                  <span className="size-8.75 shrink-0 flex justify-center items-center text-primary-1 hs-accordion-active:bg-white rounded-full transition-colors">
                    {'\n                '}
                    <i className="iconify lucide--plus size-5 hs-accordion-active:rotate-135 transition-all duration-500"></i>
                    {'\n              '}
                  </span>
                  {'\n            '}
                </button>
                {'\n            '}
                <div
                  id="faq-collapse-4"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="faq-4"
                >
                  {'\n              '}
                  <p className="text-primary-2 mt-5 text-sm md:text-base leading-[1.4] max-w-2xl font-medium">
                    {
                      "\n                La majorité de nos rituels sont non invasifs et d'une grande douceur. Votre confort est notre priorité et nous utilisons des agents apaisants si nécessaire.\n              "
                    }
                  </p>
                  {'\n            '}
                </div>
                {'\n          '}
              </div>
              {'\n\n        '}
            </div>
            {'\n      '}
          </div>
          {'\n    '}
        </div>
        {'\n  '}
      </section>
      {'\n\n  \n\n'}
    </>
  );
}
