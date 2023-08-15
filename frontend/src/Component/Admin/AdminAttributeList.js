const AdminAttributeList = ({ attributes, deleteAttribute }) => {
    return (
        <div>
            <ul>
                {attributes.map((a, i) => {
                    const required = a.required ? "(required)" : ""
                    return (
                        <li key={i}><b>{a.name}</b> {required} : {a.type} <button type="button" className="btn btn-link align-baseline ms-2 p-0" onClick={() => deleteAttribute(a)}>Delete</button> </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default AdminAttributeList;