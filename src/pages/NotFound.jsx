export default function NotFound() {
  return (
    <>
      {'\n    \n\n    '}
      <section className="md:pt-50 md:pb-27.5 pt-30 pb-15 w-full">
        {'\n        '}
        <div className="container">
          {'\n            '}
          <div className="mx-auto text-center flex flex-col items-center justify-center">
            {'\n                '}
            {'\n                '}
            <h1 className="text-[120px] md:text-[200px] font-heading font-medium text-primary-3 leading-none tracking-normal md:mb-2.5 mb-1.5 selection:bg-primary-1 selection:text-white">
              {'\n                    404\n                '}
            </h1>
            {'\n\n                '}
            {'\n                '}
            <h2 className="text-2xl md:text-3xl font-heading font-medium text-primary-3 tracking-tight md:mb-2.5 mb-1.5">
              {'\n                    Page non trouvée\n                '}
            </h2>
            {'\n\n                '}
            {'\n                '}
            <p className="text-primary-2 text-base md:mb-15 mb-7.5 leading-relaxed">
              {
                "\n                    La page que vous recherchez n'existe pas ou a été déplacée.\n                "
              }
            </p>
            {'\n\n                '}
            {'\n                '}
            <div className="inline-block shrink-0">
              {'\n                    '}
              <a
                href="index.html"
                className="flex items-center gap-2.5 bg-primary hover:bg-desert-taupe transition-colors rounded-full ps-2.5 py-2.5 pe-5 text-sm font-medium group text-primary-3"
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
                {'\n                        Back to home\n                    '}
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
