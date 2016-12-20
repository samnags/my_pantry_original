class AddMeasurementIdToPantryIngredients < ActiveRecord::Migration
  def change
    add_column :pantry_ingredients, :measurement_id, :integer
  end
end
