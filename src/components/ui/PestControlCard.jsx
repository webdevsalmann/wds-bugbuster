import Image from "next/image"

export default function PestControlCard({ name, description, imageUrl }) {
    return (
        <div className="relative w-fit bg-muted rounded">
            <Image
                className="aspect-square w-full object-cover rounded"
                src={imageUrl}
                width={400}
                height={500}
                alt={name + " Image"}
            />

            <div className="p-4">
                <div className="">{name} Control</div>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    )
}
