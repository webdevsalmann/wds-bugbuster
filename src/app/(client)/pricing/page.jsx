import Contact from '@/components/shared/Contact';
import { CheckCheck } from 'lucide-react';

export default function page() {
  return (
    <>
      <section className='pb-0 sm:pb-0 md:pb-0 lg:pb-0'>
        <h1 className="md:text-center leading-[70px]">
          Pest Control <span className="text-primary"> Packages</span> Options
        </h1>

        {/* Packages */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Residental */}
          <div className="relative p-4 h-fit bg-backgroundlight rounded-md border overflow-hidden">
            <div className="text-center">
              <div className="text-center text-4xl font-bold">Residential Pest Control </div>
              <p className="mt-4 text-sm">Our Residential Pest Control Package is designed to keep your home pest-free year-round. With regular inspections and treatments, we&apos;ll protect your family and property from common household pests.</p>
            </div>

            {/* Features */}
            <ul className="mt-6">
              <li className='flex gap-2'><CheckCheck className='size-6 text-primary inline shrink-0' /> Quarterly pest inspections</li>
              <li className='flex gap-2'><CheckCheck className='size-6 text-primary inline shrink-0' /> Interior and exterior treatments</li>
              <li className='flex gap-2'><CheckCheck className='size-6 text-primary inline shrink-0' /> Treatment for common pests (ants, cockroaches, spiders, etc.)</li>
              <li className='flex gap-2'><CheckCheck className='size-6 text-primary inline shrink-0' /> Exterior barrier spray to prevent pests from entering your home</li>
              <li className='flex gap-2'><CheckCheck className='size-6 text-primary inline shrink-0' /> Free follow-up visits between scheduled inspections</li>
            </ul>

            {/* Pricing */}
            <div className="mt-6 flex-center gap-4">
              <div className='px-2 bg-muted text-2xl border'>$39/mo</div>|
              <div className='px-2 bg-muted text-2xl border'>$429/year</div>
            </div>
          </div>

          {/* Commercial */}
          <div className="relative p-4 bg-backgroundlight rounded-md border overflow-hidden">
            <div className="text-center">
              <div className="text-center text-4xl font-bold">Commercial Pest Control </div>
              <p className="mt-4 text-sm">Our Commercial Pest Control Package is tailored to meet the unique needs of businesses and commercial properties. From restaurants to offices, we&apos;ll customize a pest control plan to ensure your establishment remains pest-free and compliant with health and safety regulations.</p>
            </div>

            {/* Features */}
            <ul className="mt-6">
              <li className='flex gap-2'><CheckCheck className='size-6 text-primary inline shrink-0' /> Monthly pest inspections</li>
              <li className='flex gap-2'><CheckCheck className='size-6 text-primary inline shrink-0' /> Customized treatment plan based on your industry and pest control needs</li>
              <li className='flex gap-2'><CheckCheck className='size-6 text-primary inline shrink-0' /> Integrated pest management (IPM) strategies for long-term pest prevention</li>
              <li className='flex gap-2'><CheckCheck className='size-6 text-primary inline shrink-0' /> Emergency pest control services available 24/7</li>
              <li className='flex gap-2'><CheckCheck className='size-6 text-primary inline shrink-0' /> Detailed reporting and documentation for regulatory compliance</li>
            </ul>

            {/* Pricing */}
            <div className="mt-6 flex-center gap-4">
              <div className='text-xl text-center'>Customized pricing based on the size and specific requirements of your business. Please contact us for a personalized quote.</div>
            </div>
          </div>

        </div>
      </section>
      <Contact title="Ready to take next-step?" />
    </>
  )
}
