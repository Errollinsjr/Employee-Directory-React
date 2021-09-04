import "./styles.css";


const TableHeader = () => {
    let headerElement = ['id', 'name', 'email', 'phone', 'city', 'operation']

    return headerElement.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
    })
}

export default TableHeader;