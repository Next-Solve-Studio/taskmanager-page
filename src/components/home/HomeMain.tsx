import ContentInitial from "./sections/ContentInitial"
import ApresentationSistem from "./sections/ApresentationSistem"
import AboutHome from "./sections/AboutHome"
import StartSistem from "./CTAs/StartSistem"
import CommentsHome from "./sections/CommentsHome"
import BusinessCall from "./CTAs/BusinessCall"

export default function HomeMain() {
    return (
        <main className='w-full h-full flex flex-col overflow-hidden bg-(--bg-main)'>
            <ContentInitial />
            <ApresentationSistem />
            <AboutHome />
            <StartSistem /> {/* CTA */}
            <CommentsHome /> 
            <BusinessCall /> {/* CTA */} 
        </main>
    )
}