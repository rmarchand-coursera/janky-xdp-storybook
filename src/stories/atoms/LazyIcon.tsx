const LazyIcon = ({ name }: { name: string }) => (
    <div style={{ borderRadius: '50%', backgroundColor: "transparent", color: 'lightblue', border: '1px solid grey', width: '16px', height: '16px', padding: '4px', aspectRatio: '1', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{name}</div>
)

export default LazyIcon;