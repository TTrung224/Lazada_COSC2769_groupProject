import { axiosSetting } from "../Context/constants"

export async function getCategories() {
    const res = axiosSetting.get("/category")
    return res
}

export async function getCategoryWithParents(id) {
    const res = axiosSetting.get(`/category/${id}`)
    return res
}

export async function addCategory(category) {
    const res = await axiosSetting.post("/category/add", category)
    return res
}

export async function updateCategory(id, category) {
    console.log(category)
    const res = await axiosSetting.put(`/category/edit/${id}`, category)
    return res
}

export async function deleteCategory(id) {
    const res = await axiosSetting.delete(`/category/delete/${id}`)
    return res
}