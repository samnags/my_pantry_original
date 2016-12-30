# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
# #
# # Examples:
# #
# #   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
# #   Mayor.create(name: 'Emanuel', city: cities.first)
#
sam = User.create!({name: "Sam", email: 'sam@sam.com', password: 'password' })
# marissa = User.create!({name: "Marissa"})

ny = Pantry.create!({location: 'NY', user: sam})
ct = Pantry.create!({location: 'CT', user: sam})

dairy = Category.create!({name: "Dairy"})
meat = Category.create!({name: "Meat"})
spices = Category.create!({name: "Spices"})
canned = Category.create!({name: "Canned"})
dried = Category.create!({name: "Dried"})
herbs = Category.create!({name: "Herbs"})
frozen = Category.create!({name: "Frozen"})
vegetables = Category.create!({name: "Vegetables"})
fruits = Category.create!({name: "Fruits"})
condiments = Category.create!(name: "Condiment")

tb = Measurement.create!({name: "Tablespoon"})
ts = Measurement.create!({name: "Teaspoon"})
cup = Measurement.create!({name: "Cup"})
ounce = Measurement.create!({name: "Ounce"})
pound = Measurement.create!({name: "Pound"})
liter = Measurement.create!({name: "Liter"})
unit = Measurement.create!({name: "Unit"})
gallon = Measurement.create!({name: "Gallon"})
quart = Measurement.create!({name: "Quart"})
pint = Measurement.create!({name: "Pint"})


milk = Ingredient.create!({name: "Milk", category_id: dairy.id})
chicken = Ingredient.create!({name: "Chicken", category_id: meat.id})
tumeric = Ingredient.create!({name: "Tumeric", category_id: spices.id})

# sammilk = PantryIngredient.create({pantry_id: ny.id, ingredient_id: milk, quantity: 1, measurement: cup})
# samtumeric = PantryIngredient.create({pantry_id: ny.id, ingredient_id: tumeric.id, quantity: 3, measurement: tb})
# samchicken = PantryIngredient.create({pantry_id: ny.id, ingredient_id: chicken.id, quantity: 2, measurement: pound})
