const Breadcrumb = ({ path }: { path: string[] }) => (
    <span>{path.join(' > ')}</span>
)

export default Breadcrumb;