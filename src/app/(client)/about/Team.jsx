import TeamCard from "@/components/ui/TeamCard"
import Image from "next/image"

const teamMembers = [
  {
    id: "tm1",
    name: "John Smith",
    jobTitle: "Senior Pest Control Technician",
    imageUrl:"/images/persons/11.jpg"
  },
  {
    id: "tm1",
    name: "Michael Johnson",
    jobTitle: "Pest Control Specialist",
    imageUrl:"/images/persons/13.jpg"
  },
  {
    id: "tm1",
    name: "David Brown",
    jobTitle: "Operations Manager",
    imageUrl:"/images/persons/14.jpg"
  },
]

export default function Team() {
  return (
    <>
      <section>
        <div className="p-8 bg-backgroundlight rounded-md grid gap-8 md:grid-cols-7">
          <div className="flex flex-col justify-center md:col-span-5">
            <h2>Hi there, I&apos;m John Doe</h2>
            <p className="">
              Behind BugBusters is a team of highly trained and experienced pest control professionals who are passionate about what they do. Our technicians undergo rigorous training and certification to ensure they are equipped with the knowledge, skills, and tools needed to tackle any pest infestation with precision and care.
            </p>
          </div>

          <div className="w-full md:aspect-[4/5] md:col-span-2">
            <Image
              className="w-full md:aspect-[4/5] object-cover rounded"
              src="/images/persons/8.jpg"
              width={400}
              height={500}
              alt="Team Leader portrait"
            />
          </div>
        </div>
      </section>

      <section className="pt-0 sm:pt-0 md:pt-0 lg:pt-0">
        <div className="text-center">
          <h2>Meet Our Team</h2>
        </div>

        <div className="my-10 grid justify-center gap-8 md:grid-cols-3">
          {teamMembers.map(item => (
            <TeamCard name={item.name} jobTitle={item.jobTitle} imageUrl={item.imageUrl} key={item.id} />
          ))}
        </div>
      </section>
    </>
  )
}
