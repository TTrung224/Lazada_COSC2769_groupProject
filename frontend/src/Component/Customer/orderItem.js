import { backendUrl, numberFormat } from "../../Context/constants";

const OrderItem = ({ item }) => {
    const product = item.product


    const statusButtons = () => {
        if (item.status === "New") {
            return "Pending..."
        }
        if (item.status === "Shipped") {
            return (
                <>
                    <button className="btn btn-success btn-sm d-block w-100 my-1">Accept</button>
                    <button className="btn btn-danger btn-sm d-block w-100 my-1">Reject</button>
                </>
            )
        }
        return "Complete"
    }
    return (
        <tr className="align-middle">
            <td style={{width: "150px"}}>
                <img
                    src={backendUrl + `/image/${product.imgName}`} alt="product"
                    className="img-fluid" style={{ maxHeight: "100px" }} />
            </td>
            <td>{product.name}</td>
            <td>{numberFormat(product.price)} VND</td>
            <td>{item.quantity}</td>
            <td>{product.seller.fullName}</td>
            <td><b>{statusButtons()}</b></td>
        </tr>
    );

}



export default OrderItem;