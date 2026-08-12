import Reveal from "../common/Reveal";
import GalleryItem from "./GalleryItem";

export default function GalleryGrid({ items }) {
  return (
    <Reveal as="div" className="grid" style={{ gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
      {items.map((item) => (
        <GalleryItem item={item} key={item.id} />
      ))}
    </Reveal>
  );
}
