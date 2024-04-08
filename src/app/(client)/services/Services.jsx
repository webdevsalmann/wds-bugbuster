import PestControlCard from "@/components/ui/PestControlCard"

const services = [
    {
        id: "serv1",
        name: "Ants",
        Description: "Eliminate ant infestations and prevent future invasions to keep your home or business pest-free.",
        imageUrl: "/images/pests/ant.jpg"
    },
    {
        id: "serv2",
        name: "Bed Bugs",
        Description: "Thorough inspection and treatment to eradicate bed bugs and ensure a comfortable sleep environment.",
        imageUrl: "/images/pests/bed-bug.jpg"
    },
    {
        id: "serv3",
        name: "Cockroaches",
        Description: "Exterminate cockroach populations and implement preventative measures to maintain hygiene standards.",
        imageUrl: "/images/pests/cockroache.jpg"
    },
    {
        id: "serv4",
        name: "Termites",
        Description: "Identify and eliminate termite colonies to protect your property from costly structural damage.",
        imageUrl: "/images/pests/termite.jpg"
    },
    {
        id: "serv5",
        name: "Rodents (Mice and Rats)",
        Description: "Safely remove rodents and seal entry points to prevent reinfestation and potential health risks.",
        imageUrl: "/images/pests/rodent.jpg"
    },
    {
        id: "serv6",
        name: "Spiders",
        Description: "Control spider populations and create a spider-free environment for improved safety and comfort.",
        imageUrl: "/images/pests/spider.jpg"
    },
    {
        id: "serv7",
        name: "Fleas",
        Description: "Eradicate fleas from your home or pet's environment to prevent itching, discomfort, and potential health issues.",
        imageUrl: "/images/pests/flea.jpg"
    },
    {
        id: "serv8",
        name: "Ticks",
        Description: "Remove ticks and implement preventive measures to reduce the risk of tick-borne diseases for your family and pets.",
        imageUrl: "/images/pests/tick.jpg"
    },
    {
        id: "serv9",
        name: "Mosquitoes",
        Description: "Reduce mosquito populations and minimize the risk of mosquito-borne illnesses with effective control measures.",
        imageUrl: "/images/pests/mosquito.jpg"
    },
    {
        id: "serv10",
        name: "Flies",
        Description: "Control fly infestations and implement sanitation practices to maintain cleanliness and hygiene.",
        imageUrl: "/images/pests/flie.jpg"
    },
    {
        id: "serv11",
        name: "Bees",
        Description: "Safely relocate bee colonies to protect both humans and bees while ensuring pollination and ecosystem health.",
        imageUrl: "/images/pests/bee.jpg"
    },
    {
        id: "serv12",
        name: "Wasps",
        Description: "Eliminate wasp nests and implement preventive measures to prevent stings and allergic reactions.",
        imageUrl: "/images/pests/wasp.jpg"
    },
    {
        id: "serv13",
        name: "Hornets",
        Description: "Safely remove hornet nests and implement measures to deter future nesting activity.",
        imageUrl: "/images/pests/hornet.jpg"
    },
    {
        id: "serv14",
        name: "Moths",
        Description: "Eradicate moth infestations and protect clothing, fabrics, and stored goods from damage.",
        imageUrl: "/images/pests/moth.jpg"
    },
    {
        id: "serv16",
        name: "Carpet Beetles",
        Description: "Eradicate carpet beetle infestations and protect carpets, upholstery, and clothing from damage.",
        imageUrl: "/images/pests/carpet-beetle.jpg"
    },
    {
        id: "serv18",
        name: "Centipedes",
        Description: "Eliminate centipedes and implement moisture control measures to reduce their habitat.",
        imageUrl: "/images/pests/centipede.jpg"
    },
    {
        id: "serv19",
        name: "Millipedes",
        Description: "Control millipede populations and prevent entry into homes or structures.",
        imageUrl: "/images/pests/millipede.jpg"
    },
    {
        id: "serv22",
        name: "Crickets",
        Description: "Control cricket populations and prevent damage to fabrics, paper, and stored goods.",
        imageUrl: "/images/pests/cricket.jpg"
    },
    {
        id: "serv23",
        name: "Aphids",
        Description: "Eliminate aphid infestations and protect plants, crops, and ornamentals from feeding damage.",
        imageUrl: "/images/pests/aphid.jpg"
    },
    {
        id: "serv25",
        name: "Mealybugs",
        Description: "Control mealybug populations and implement cultural practices to reduce infestation risk.",
        imageUrl: "/images/pests/mealybug.jpg"
    },
    {
        id: "serv26",
        name: "Spider Mites",
        Description: "Eliminate spider mite infestations and protect plants from feeding damage and stress.",
        imageUrl: "/images/pests/spider-mite.jpg"
    },
    {
        id: "serv27",
        name: "Leafhoppers",
        Description: "Control leafhopper populations and prevent damage to garden plants, crops, and ornamentals.",
        imageUrl: "/images/pests/leafhopper.jpg"
    },
    {
        id: "serv28",
        name: "Caterpillars",
        Description: "Eliminate caterpillar infestations and protect trees, shrubs, and crops from defoliation.",
        imageUrl: "/images/pests/caterpillar.jpg"
    },
    {
        id: "serv29",
        name: "Snails",
        Description: "Control snail populations and protect garden plants, vegetables, and ornamentals from feeding damage.",
        imageUrl: "/images/pests/snail.jpg"
    },
]

export default function Services() {
    return (
        <section className="pb-0 sm:pb-0 md:pb-0 lg:pb-0">
            <h1 className="md:text-center leading-[70px]">
                Comprehensive Pest Control <span className="text-primary">Services</span>
            </h1>

            {/* Service Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {services.map(item => (
                    <PestControlCard imageUrl={item.imageUrl} name={item.name} description={item.Description} key={item.id} />
                ))}
            </div>

        </section>
    )
}
