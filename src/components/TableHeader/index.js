import "./styles.css";


const TableHeader = () => {
    let headerElement = ['id', 'name', 'email', 'phone', 'city', 'operation']

    return headerElement.map((key, index) => {
        f(key === 'id'){
            return <th data-type="number" key={index}>{key.toUpperCase()}</th>
        }
        return <th key={index}>{key.toUpperCase()}</th>
    })
}

export default TableHeader;