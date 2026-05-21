import ContentInitial from "./Sections/ContentInitial"
import ApresentationSistem from "./Sections/ApresentationSistem"
import AboutHome from "./Sections/AboutHome"
import StartSistem from "./CTAs/StartSistem"
import CommentsHome from "./Sections/CommentsHome"

export default function HomeMain() {
    return (
        <main className='w-full h-full flex flex-col overflow-hidden bg-(--bg-main)'>
            <ContentInitial />
            <ApresentationSistem />
            <AboutHome />
            <StartSistem /> {/* CTA */}
            <CommentsHome /> 
        </main>
    )
}