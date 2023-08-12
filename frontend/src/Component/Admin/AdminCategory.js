import AdminCategoryList from './AdminCategoryList';
const testCat = [
    {
        name: "Electronic Devices",
        subCat: [{ name: "Computer", subCat: [] }, { name: "Laptop", subCat: [] }, { name: "Headphone", subCat: [] }]
    },
    {
        name: "Home Appliances",
        subCat: [{ name: "Kitchen", subCat: [] }, { name: "Living Room", subCat: [] }]
    },
    {
        name: "Groceries and Snack",
        subCat: [{ name: "Sweet", subCat: [] }, { name: "Chips", subCat: [] }]
    }]

const AdminCategory = () => {
    return (
        <div className="container">
            <h2>Category</h2>
            <button className="btn btn-primary mt-4">Add Category</button>
            <AdminCategoryList categories={testCat} />
        </div>
    );
}

export default AdminCategory;