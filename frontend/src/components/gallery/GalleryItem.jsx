import Media from "../common/Media";

export default function GalleryItem({ item }) {
  const style = item.tall ? { gridRow: "span 2", aspectRatio: "auto", height: "100%" } : undefined;
  return <Media label={item.label} variant="square" style={style} />;
}
