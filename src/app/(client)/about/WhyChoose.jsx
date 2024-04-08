import { SlidersHorizontal, Flower, Smile } from 'lucide-react';

export default function WhyChoose() {
  return (
    <section className='grid gap-8 md:grid-cols-5 bg-primary text-neutral-50'>
      <div className="md:col-span-2">
        <h2>Why Choose BugBusters?</h2>
        <p className='text-neutral-100'>Choose BugBusters for trusted pest control solutions. With our experienced team and customized approach, we tackle your pest problems effectively and safely. We prioritize your satisfaction and the well-being of your family and the environment. Count on BugBusters for reliable service and peace of mind.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:col-span-3">
        <div className="p-4 flex-center text-center flex-col gap-4 border rounded-md">
          <div className="text-7xl">10+</div>
          <div className="text-xl font-bold">Years of Expertise</div>
          <p className='text-base text-neutral-100'>With years of experience in the pest control industry, we have the expertise to effectively identify, treat, and prevent a wide range of pest problems.</p>
        </div>
        <div className="p-4 flex-center text-center flex-col gap-4 border rounded-md">
          <div className="text-7xl"><SlidersHorizontal className='size-16' /></div>
          <div className="text-xl font-bold">Customized Solutions</div>
          <p className='text-base text-neutral-100'>We understand that every pest infestation is unique, which is why we tailor our solutions to meet your specific needs and circumstances.</p>
        </div>
        <div className="p-4 flex-center text-center flex-col gap-4 border rounded-md">
          <div className="text-7xl"><Flower className='size-16' /></div>
          <div className="text-xl font-bold">Environmentally Friendly</div>
          <p className='text-base text-neutral-100'>At BugBusters, we prioritize the safety of your family, pets, and the environment. That&apos;s why we use eco-friendly products and practices to minimize our impact on the planet.</p>
        </div>
        <div className="p-4 flex-center text-center flex-col gap-4 border rounded-md">
          <div className="text-7xl"><Smile className='size-16' /></div>
          <div className="text-xl font-bold">Customer Satisfaction</div>
          <p className='text-base text-neutral-100'>Your satisfaction is our top priority. From the initial inspection to ongoing maintenance, we are committed to providing exceptional service and exceeding your expectations every step of the way.</p>
        </div>

      </div>
    </section>
  )
}
