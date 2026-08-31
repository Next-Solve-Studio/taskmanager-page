import CTIPrivacyPolicy from "./Sections/CTIPrivacyPolicy"
import ContentPrivacyPolicy from "./Sections/ContentPrivacyPolicy"
import BusinessCall from "../home/Sections/BusinessCall"

export default function PrivacyPolicyMain() {
    return (
        <section className="">
            <CTIPrivacyPolicy />
            <ContentPrivacyPolicy />
            <BusinessCall />
        </section>
    )
}
