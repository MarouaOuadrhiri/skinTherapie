export default function Navbar() {
  return (
    <>
      {'\n'}
      <header className="fixed inset-x-0 top-0 z-80 w-full transition-all duration-300">
        {'\n  '}
        {'\n  '}
        <div className="container">
          {'\n    '}
          {'\n    '}
          <div
            id="navbar"
            className="relative bg-white flex items-center justify-between md:p-5 py-2.5 px-3.75 rounded-b-3xl w-full mx-auto transition-shadow duration-300"
          >
            {'\n\n      '}
            {'\n      '}
            <img
              src="/images/icons/left-small.svg"
              alt="Shape"
              className="absolute -inset-s-7.5 top-0 w-7.5 h-7.5 pointer-events-none"
            />
            {'\n      '}
            <img
              src="/images/icons/right-small.svg"
              alt="Shape"
              className="absolute -inset-e-7.5 top-0 w-7.5 h-7.5 pointer-events-none"
            />
            {'\n\n      '}
            {'\n      '}
            <div className="flex items-center justify-between w-full relative">
              {'\n\n        '}
              {'\n        '}
              <nav className="hidden lg:flex items-center gap-5 z-10">
                {'\n          '}
                <a
                  href="index.html"
                  className="text-primary-2 hover:text-primary-1 font-medium transition-colors"
                >
                  {'Accueil'}
                </a>
                {'\n          '}
                <a
                  href="about.html"
                  className="text-primary-2 hover:text-primary-1 font-medium transition-colors"
                >
                  {'À propos'}
                </a>
                {'\n          '}
                <a
                  href="service.html"
                  className="text-primary-2 hover:text-primary-1 font-medium transition-colors"
                >
                  {'Services'}
                </a>
                {'\n          '}
                <a
                  href="contact.html"
                  className="text-primary-2 hover:text-primary-1 font-medium transition-colors"
                >
                  {'Contact'}
                </a>
                {'\n        '}
              </nav>
              {'\n\n        '}
              {'\n\n        '}
              {'\n        '}
              <a
                href="index.html"
                className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex items-center z-10"
              >
                {'\n\n          '}
                {'\n          '}
                <img
                  src="/images/secondary_clay_rose_logo.svg"
                  alt="Dermato Logo"
                  className="hidden sm:block h-7 object-contain"
                />
                {'\n\n          '}
                {'\n          '}
                <img
                  src="/images/mono_clay_rose_logo.svg"
                  alt="Dermato Logo"
                  className="block sm:hidden h-7 object-contain"
                />
                {'\n\n        '}
              </a>
              {'\n\n        '}
              {'\n        '}
              <div className="flex items-center gap-4 z-10">
                {'\n\n          '}
                <a
                  href="appointment.html"
                  className="hidden md:flex items-center gap-2.5 bg-primary-5 transition-colors rounded-full ps-2.5 py-2.5 pe-5 text-sm font-medium group"
                >
                  {'\n\n            '}
                  <div className="flex items-center justify-center size-5 bg-white rounded-full">
                    {'\n              '}
                    <img
                      src="/images/icons/icon-1.svg"
                      alt="Icon"
                      className="size-4 transition-transform duration-300 group-hover:rotate-180"
                    />
                    {'\n            '}
                  </div>
                  {'\n            Prendre rendez-vous\n          '}
                </a>
                {'\n\n           '}
                {'\n\n          '}
                {'\n          '}
                <button
                  type="button"
                  className="lg:hidden flex items-center justify-center md:size-11 size-9 bg-primary-3 rounded-full text-white transition-colors"
                  data-hs-overlay="#mobile-menu"
                  aria-controls="mobile-menu"
                  aria-label="Toggle navigation"
                >
                  {'\n            '}
                  <i className="iconify tabler--menu-2 size-5"></i>
                  {'\n          '}
                </button>
                {'\n        '}
              </div>
              {'\n      '}
            </div>
            {'\n    '}
          </div>
          {'\n  '}
        </div>
        {'\n\n  '}
        {'\n  '}
        <div
          id="mobile-menu"
          className="hs-overlay hs-overlay-open:translate-y-0 hs-overlay-open:opacity-100 hidden opacity-0 fixed inset-x-0 md:top-22.5 top-15 z-[79] md:mx-5 mx-4 rounded-3xl -translate-y-full transform overflow-y-auto bg-white shadow-2xl transition-all duration-300 max-h-[calc(100vh-100px)] lg:hidden"
          role="dialog"
          tabIndex="-1"
          aria-labelledby="mobile-menu-label"
        >
          {'\n    '}
          <div className="flex flex-col overflow-y-auto p-5 space-y-2">
            {'\n      '}
            <a
              href="index.html"
              className="hover:text-primary-1 text-base font-medium w-full"
            >
              {'Accueil'}
            </a>
            {'\n      '}
            <a
              href="about.html"
              className="hover:text-primary-1 text-base font-medium w-full transition-colors"
            >
              {'À propos'}
            </a>
            {'\n      '}
            <a
              href="service.html"
              className="hover:text-primary-1 text-base font-medium w-full transition-colors"
            >
              {'Services'}
            </a>
            {'\n      '}
            <a
              href="contact.html"
              className="hover:text-primary-1 text-base font-medium w-full transition-colors"
            >
              {'Contact'}
            </a>
            {'\n    '}
          </div>
          {'\n  '}
        </div>
        {'\n'}
      </header>
    </>
  );
}
