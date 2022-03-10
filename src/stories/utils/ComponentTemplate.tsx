const ComponentTemplate = ({ width = 300, height = 100, componentDescription }: { width: number, height: number, componentDescription: string }) => (
    <div style={{ width: `${width}px`, height: `${height}px`, border: '3px solid gold', backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, lightgrey 10px, lightgrey 12px)' }}>
        Template for:
        {componentDescription}
    </div>
);

export default ComponentTemplate;