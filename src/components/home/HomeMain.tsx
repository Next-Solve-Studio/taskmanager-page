import ContentInitial from "./ContentInitial"
import ApresentationSistem from "./ApresentationSistem"
import AboutHome from "./AboutHome"
import StartSistem from "./StartSistem"
import CommentsHome from "./CommentsHome"
import BusinessCall from "./BusinessCall"

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