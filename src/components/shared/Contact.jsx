import Form from "./Form";

export default function Contact({ className, title, subTitle }) {
    return (
        <section className={className}>
            <div className="mx-auto text-center w-11/12 md:w-1/2">
                <h2>{title || 'Get in Touch'}</h2>
                <p className="mt-2">{subTitle || 'Reach out to us for any inquiries or assistance'}</p>
            </div>
                
            <div className="my-10 grid gap-12 md:grid-cols-2">
                <Form />
                <iframe className="w-full h-80 md:h-full rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155.26752831504666!2d-0.1081057637929873!3d51.48972075236246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486da9397785df19%3A0x640825d45416eb69!2sVerminx%20Pest%20Control!5e0!3m2!1sen!2sus!4v1712553032959!5m2!1sen!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}
