sam = User.create(name: "Sam")
marissa = User.create(name: "Marissa")

dairy = Category.create("Dairy")
meat = Category.create("Meat")
species = Category.create("Spices")

milk = Ingredient.create(name: "Milk", category_id: dairy.id)
chicken = Ingredient.create(name: "C


hicken", category_id: meat.id)
tumeric = Ingredient.create(name: "Tumeric", category_id: species.id)

sampantry = Pantry.create(user_id: sam.id, )


Sam's House = sampantry

id    user_id    ingredient_id  quantity date
1       1           4             10      
