export function Footer() {
  return (
    <footer className="relative bg-charcoal pb-8 pt-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-ivory/10 bg-ivory/5 p-8 backdrop-blur-lg md:p-12 lg:p-16">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            
            <div className="max-w-xl">
              <h3 className="font-serif text-3xl md:text-4xl text-ivory mb-6">
                SETHU LAKSHMI BAYI
                <span className="block text-xl md:text-2xl mt-2 text-brick font-sans uppercase tracking-widest">
                  Government Higher Secondary School
                </span>
              </h3>
              <p className="font-sans text-ivory/60 max-w-sm leading-relaxed">
                Nagercoil, Tamil Nadu
              </p>
              <p className="font-sans text-ivory/60 max-w-sm leading-relaxed mt-2">
                Phone: <a href="tel:04652232867" className="hover:text-brick transition-colors">04652 232 867</a>
              </p>
            </div>

            <div className="flex flex-col gap-4 text-sm text-ivory/40 font-sans">
              <div className="flex gap-6">
                <a href="#" className="hover:text-ivory transition-colors">Admissions</a>
                <a href="#" className="hover:text-ivory transition-colors">Academics</a>
                <a href="#" className="hover:text-ivory transition-colors">Alumni</a>
                <a href="#" className="hover:text-ivory transition-colors">Contact</a>
              </div>
              <p className="mt-4 lg:text-right">
                &copy; {new Date().getFullYear()} SLB School. All rights reserved.
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
