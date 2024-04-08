
export default function ProcessCard({ step, title, description }) {
    return (
        <div className="relative p-4 bg-backgroundlight border rounded-md group">
            <div className="flex gap-4 ">
                <div className="text-6xl text-muted-foreground/10 group-hover:text-muted-foreground transition-all">{step}</div>
                <div className="font-semibold self-end">{title}</div>
            </div>
            <p className="mt-4 capitalize">{description}</p>
        </div>
    )
}
