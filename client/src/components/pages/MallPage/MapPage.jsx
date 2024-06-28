export default function MapPage({mapSrc}){
  return (
    <iframe
    src = {mapSrc}
    title="Mappedin Map"
    allow="clipboard-write; web-share"
    scrolling="no"
    style={{ width: '100%', height: '650px', border: 0 }}
    ></iframe>
  )
}


