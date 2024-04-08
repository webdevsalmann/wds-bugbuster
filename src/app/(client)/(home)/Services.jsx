import ServiceCard from "@/components/ui/ServiceCard";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const pestsServices = [
  {
    imageUrl: "/images/pests-illustrations/ants.webp",
    name: "Ants"
  },
  {
    imageUrl: "/images/pests-illustrations/bed-bugs.webp",
    name: "Bed Bugs"
  },
  {
    imageUrl: "/images/pests-illustrations/cockroaches.webp",
    name: "cockroaches"
  },
  {
    imageUrl: "/images/pests-illustrations/flies.webp",
    name: "flies"
  },
  {
    imageUrl: "/images/pests-illustrations/mosquitoes.webp",
    name: "mosquitoes"
  },
  {
    imageUrl: "/images/pests-illustrations/rodents.webp",
    name: "rodents"
  },
  {
    imageUrl: "/images/pests-illustrations/spiders.webp",
    name: "spiders"
  },
  {
    imageUrl: "/images/pests-illustrations/termites.webp",
    name: "termites"
  },
]

export default function Services() {
  return (
    <section className="bg-backgroundlight">
      <h2 className="text-center">Our Services</h2>
      <div className="my-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pestsServices.map(item => (
          <ServiceCard name={item.name} imageUrl={item.imageUrl} key={item.name} />
        ))}
      </div>

      <div className="flex-center">
        <Link className={`${buttonVariants()}`} href="/services">
          View More Pests Control Services
        </Link>
      </div>
    </section>
  )
}
