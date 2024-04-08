import ProcessCard from "@/components/ui/ProcessCard"
import { Description } from "@radix-ui/react-toast"

const process = [
  {
    id: "p1",
    title:"Initial Inspection",
    description: "Our experienced technicians conduct a thorough inspection of your property to identify pest infestations and assess the extent of the problem"
  },
  {
    id: "p2",
    title:"Customized Treatment Plan",
    description: "Our experienced technicians conduct a thorough inspection of your property to identify pest infestations and assess the extent of the problem"
  },
  {
    id: "p3",
    title:"Treatment Execution",
    description: "Our experienced technicians conduct a thorough inspection of your property to identify pest infestations and assess the extent of the problem"
  },
  {
    id: "p4",
    title:"Ongoing Monitoring and Maintenance",
    description: "Our experienced technicians conduct a thorough inspection of your property to identify pest infestations and assess the extent of the problem"
  },
  {
    id: "p5",
    title:"Customer Satisfaction Guarantee",
    description: "Our experienced technicians conduct a thorough inspection of your property to identify pest infestations and assess the extent of the problem"
  },
]

export default function Process() {
  return (
    <section>
      <h2 className="text-center">Our Proven Process</h2>

      <div className="my-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {process.map((item,i) => (
          <ProcessCard step={i + 1} title={item.title} description={item.description} key={item.id} />
        ))}
      </div>

    </section>
  )
}
