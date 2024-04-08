import Image from "next/image";
import Link from "next/link";
import { CircleCheckBig } from 'lucide-react';

export default function About() {
    return (
        <section className="bg-background">
            <div className="grid gap-8 md:grid-cols-2">
                <div className="p-6 w-full bg-contain flex-center">
                    <Image
                        className="relative w-full aspect-video object-cover object-center rounded text-foreground"
                        width={800}
                        height={450}
                        src="/images/common/1.jpg"
                        alt="hero"
                    />
                </div>

                <div className="flex-center flex-col">
                    <div>
                        <h2>Our Commitment to Excellence</h2>
                        <p className="mt-4">
                            At BugBusters, we&apos;re committed to providing top-notch pest control services with a focus on customer satisfaction and environmental responsibility. With years of experience and a passion for pest management, our team works tirelessly to ensure your home or business remains pest-free.
                        </p>
                        <ul className="mt-4 leading-10">
                            <li>
                                <CircleCheckBig className="mr-4 inline text-primary" />
                                Dedicated to Client Needs
                            </li>
                            <li>
                                <CircleCheckBig className="mr-4 inline text-primary" />
                                Eco-friendly Pest Control
                            </li>
                            <li>
                                <CircleCheckBig className="mr-4 inline text-primary" />
                                Highly Skilled Professionals
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
