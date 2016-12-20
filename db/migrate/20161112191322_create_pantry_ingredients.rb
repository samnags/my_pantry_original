class CreatePantryIngredients < ActiveRecord::Migration
  def change
    create_table :pantry_ingredients do |t|
        t.integer :pantry_id
        t.integer :ingredient_id
        t.integer :quantity        
        t.date :date
        t.timestamps null: false
    end
  end
end
