type GalleryItemProps = {
  image: string
  imageAlt: string
}

export default function GalleryItem({ image, imageAlt }: GalleryItemProps) {
  return (
    <picture>
      <source srcSet={`./assets/desktop/${image}`} media="(min-width: 568px)" />
      <img src={`./assets/mobile/${image}`} alt={imageAlt} />
    </picture>
  )
}
