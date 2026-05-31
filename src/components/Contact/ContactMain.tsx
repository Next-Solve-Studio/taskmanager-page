import InitialContent from "./Sections/InitialContent"
import ContactForm from "./Sections/ContactForm"
import TreatmentContact from "./Sections/TreatmentContact"

export default function ContactMain() {
    return (
        <section className=''>
            <InitialContent />
            <ContactForm />
            <TreatmentContact />
        </section>
    )
}