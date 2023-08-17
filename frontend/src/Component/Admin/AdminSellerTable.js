const AdminSellerTable = ({ sellers, setSellers }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {sellers.map(seller => {
                    return (
                        <tr className="align-middle">
                            <th scope="row">{seller.id}</th>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td>{seller.status}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default AdminSellerTable;