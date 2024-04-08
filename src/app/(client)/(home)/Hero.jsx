import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Hero() {
    return (
        <section className="relative bg-primary">
            <div className="relative">
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="flex-center flex-col text-neutral-50">
                        <div>
                            <h1>Welcome to BugBusters - Pest Controlling service</h1>
                            <p className="mt-4 text-neutral-100">
                                At BugBusters, we&apos;re dedicated to keeping your home or business pest-free. With our expert team and proven methods, you can trust us to tackle any pest problem, big or small. Say goodbye to pests and hello to peace of mind. Schedule your inspection today!
                            </p>
                        </div>

                        <div className="mt-6 self-start flex gap-4">
                            <Link className={`${buttonVariants({ variant: "secondary" })}`} href="/contact">
                                Schedule Inspection
                            </Link>
                            <Link className={`${buttonVariants({ variant: "ghost" })} underline`} href="/contact">
                                Request Free Quote
                            </Link>
                        </div>
                    </div>

                    <div className="relative p-6 w-full bg-contain flex-center ">
                        <div className="hero-blob "></div>
                        <Image
                            className="relative w-full aspect-video object-cover object-center rounded text-foreground"
                            width={800}
                            height={450}
                            src="/images/common/3.jpg"
                            alt="hero"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
