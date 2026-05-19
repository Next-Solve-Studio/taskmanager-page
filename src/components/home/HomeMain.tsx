import ContentInitial from "./sections/ContentInitial"
import ApresentationSistem from "./sections/ApresentationSistem"

export default function HomeMain() {
    return (
        <main className='w-full h-full flex flex-col overflow-hidden bg-(--bg-main)'>
            <ContentInitial />
            <ApresentationSistem />
        </main>
    )
}