import ContentInitial from "./Sections/ContentInitial"
import ApresentationSistem from "./Sections/ApresentationSistem"
import StartSistem from "./CTAs/StartSistem"

export default function HomeMain() {
    return (
        <main className='w-full h-full flex flex-col overflow-hidden bg-(--bg-main)'>
            <ContentInitial />
            <ApresentationSistem />
            <StartSistem /> {/* CTA */}
        </main>
    )
}