import GalleryHero from '@/components/Gallery /GalleryHero'
import ScrollImages from '@/components/Gallery /ScrollImages'
import GridImages from '@/components/Gallery /GridImages'


const page = () => {
    return (
        <div>
            <GalleryHero />
            <ScrollImages />
            <GridImages />
        </div>
    )
}

export default page