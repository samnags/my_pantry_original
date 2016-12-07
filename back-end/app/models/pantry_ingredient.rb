class PantryIngredient < ActiveRecord::Base
  belongs_to :ingredient
  belongs_to :pantry
end
