class Category{
    constructor(name){
        this.name = name;
        this.subCategories = []
    }

    addCategoty(catName){
        this.subCategories.push(new Category(catName))
    }
}