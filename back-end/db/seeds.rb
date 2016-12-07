# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
# #
# # Examples:
# #
# #   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
# #   Mayor.create(name: 'Emanuel', city: cities.first)
#
sam = User.create!({name: "Sam"})
marissa = User.create!({name: "Marissa"})

dairy = Category.create!({name: "Dairy"})
meat = Category.create!({name: "Meat"})
spices = Category.create!({name: "Spices"})

sampantry = Pantry.create!({user_id: sam.id})
marissapantry = Pantry.create!({user_id: marissa.id})

milk = Ingredient.create!({name: "Milk", category_id: dairy.id})
chicken = Ingredient.create!({name: "Chicken", category_id: meat.id})
tumeric = Ingredient.create!({name: "Tumeric", category_id: spices.id})

sammilk = PantryIngredient.create({pantry_id: sampantry.id, ingredient_id: milk, quantity: 1, date: Date.today})
samtumeric = PantryIngredient.create({pantry_id: sampantry.id, ingredient_id: tumeric.id, quantity: 1, date: Date.today})
samchicken = PantryIngredient.create({pantry_id: sampantry.id, ingredient_id: chicken.id, quantity: 1, date: Date.today})
