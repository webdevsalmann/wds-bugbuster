import Image from "next/image";

export default function ServiceCard({name, imageUrl}) {
    return (
        <div className="relative p-4 bg-background border rounded-md">
            <div className="flex items-center gap-4">
                <Image
                    className="size-10 object-contain object-center rounded text-foreground"
                    width={100}
                    height={100}
                    src={imageUrl}
                    alt="hero"
                />
                <div className="text-xl capitalize">{name}</div>
            </div>
        </div>
    )
}
