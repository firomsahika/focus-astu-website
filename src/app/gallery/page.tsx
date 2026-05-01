import GalleryHero from '@/components/Gallery/GalleryHero'
import ScrollImages from '@/components/Gallery/ScrollImages'
import GridImages from '@/components/Gallery/GridImages'
import Graduates from "@/components/Gallery/Graduates"


const page = () => {
    return (
        <div>
            <GalleryHero />
            <ScrollImages />
            <GridImages />
            <Graduates />
        </div>
    )
}

export default page