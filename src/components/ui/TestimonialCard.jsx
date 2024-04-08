import { Star } from 'lucide-react';
import Image from "next/image"

export default function TestimonialCard({ tag, name, imageUrl, location, comment }) {
    return (
        <div className="relative p-6 h-fit bg-backgroundlight flex-center text-center flex-col gap-2 border rounded-md">
            {/* <div className="flex items-center gap-4"> */}
            {/* </div> */}

            <div className="flex text-primary gap-1">
                <Star className='size-4' />
                <Star className='size-4' />
                <Star className='size-4' />
                <Star className='size-4' />
                <Star className='size-4' />
            </div>
            <div className="text-xl capitalize">{tag}</div>
            <p className="text-center text-base">{comment}</p>

            <div className="mt-4 w-full h-fit flex gap-4">
                <Image
                    className="size-14 aspect-square object-cover object-center rounded-full"
                    width={50}
                    height={50}
                    src={imageUrl}
                    alt={name + " Image"}
                />
                <div className="text-left">
                    <div className="font-bold">{name}</div>
                    <div className="text-muted-foreground text-sm">{location}</div>
                </div>
            </div>
        </div>
    )
}
