import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function TeamCard({ name, imageUrl, jobTitle }) {
    return (
        <div className="relative rounded overflow-hidden">
            <div className="aspect-[4/5] md:col-span-2">
                <Image
                    className="aspect-[4/5] object-cover rounded"
                    src={imageUrl}
                    width={400}
                    height={500}
                    alt={name + " Image"}
                />
            </div>

            <div className="p-4">
                <div className="text-xl font-semibold">{name}</div>
                <div className="-mt-1 text-muted-foreground">{jobTitle}</div>
                <div className="mt-2 flex gap-2">
                    <Link className="hover:text-primary" href="https://www.facebook.com/"><Facebook className="size-5" /></Link>
                    <Link className="hover:text-primary" href="https://twitter.com/"><Twitter className="size-5" /></Link>
                    <Link className="hover:text-primary" href="https://www.instagram.com/"><Instagram className="size-5" /></Link>
                </div>
            </div>
        </div>
    )
}
