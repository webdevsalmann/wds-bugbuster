import Image from "next/image"

export default function Mission() {
  return (
    <section className='grid gap-12 md:grid-cols-2'>
      <div>
        <h2>Our Mission</h2>
        <p>At BugBusters, our mission is simple: to protect your home or business from pests while ensuring the safety and well-being of your family, employees, and customers. We strive to exceed your expectations by delivering exceptional service and results, backed by our commitment to integrity, professionalism, and customer satisfaction.</p>
      </div>

      <div className="">
        <Image
          className="aspect-video object-cover rounded shadow"
          src="/images/common/4.jpg"
          width={800}
          height={450}
          alt="Misson Image"
        />
      </div>
    </section>
  )
}
