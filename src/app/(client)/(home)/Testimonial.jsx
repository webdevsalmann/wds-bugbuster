import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    id:"ts1",
    tag: "Amazing Work",
    name: "John Smith",
    location: "New York, NY",
    comment: "BugBusters Pest Control saved the day! They were quick to respond to my pest problem and provided effective solutions. I highly recommend their services to anyone dealing with unwanted pests.",
    imageUrl: "/images/persons/1.jpg"
  },
  {
    id:"ts2",
    tag: "Great Service",
    name: "Emily Johnson",
    location: "Los Angeles, CA",
    comment: "I was impressed by BugBusters' professionalism and attention to detail. Their team was courteous, knowledgeable, and took the time to address all my concerns. I'm happy to say my home is pest-free thanks to BugBusters!",
    imageUrl: "/images/persons/2.jpg"
  },
  {
    id:"ts3",
    tag: "Great Guys",
    name: "Michael Brown",
    location: "Chicago, IL",
    comment: "BugBusters exceeded my expectations! From the initial consultation to the final treatment, their service was top-notch. I appreciate their dedication to customer satisfaction and would gladly recommend them to others.",
    imageUrl: "/images/persons/3.jpg"
  }
];

export default function Testimonial() {
  return (
    <section>
      <div className="text-center">
        <h2>What Our Customers Say</h2>
        <p>Read what our satisfied customers have to say about BugBusters Pest Control</p>
      </div>

      <div className="my-10 grid gap-4 md:grid-cols-3">
        {testimonials.map((item, i) => (
          <TestimonialCard tag={item.tag} name={item.name} location={item.location} comment={item.comment} imageUrl={item.imageUrl} key={item.id}/>
        ))}
      </div>
    </section>
  )
}
