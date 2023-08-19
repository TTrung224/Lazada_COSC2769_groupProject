const AdminSellerTable = ({ sellers }) => {

      

    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {sellers.map(seller => {
                        let rowColor = ""
                        if(seller.status === "Accepted") rowColor = "table-success"
                        else if(seller.status === "Rejected") rowColor = "table-danger"
                        return (
                            <tr key={seller.id} className={`${rowColor} align-middle`}>
                                <th scope="row">{seller.id}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.status}</td>
                                <td>
                                    <button className="btn btn-success mx-1" disabled={seller.status === 'Accepted'}><i className="bi-check-lg" /></button>
                                    <button className="btn btn-danger mx-1" disabled={seller.status === 'Rejected'}><i className="bi-x-lg" /></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AdminSellerTable;