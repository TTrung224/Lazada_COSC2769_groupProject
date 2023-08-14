export default class Category {
    constructor(id, name) {
        this.id = id
        this.name = name;
        this.parent = null
        this.subCat = []
        this.attributes = []
    }

    addSubCat(category) {
        category.parent = this
        this.subCat.push(category)
    }

    addAttribute(attribute) {
        this.attributes.push(attribute)
    }
}