class PantryingredientSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :date

  has_one: ingredient
  has_one: pantry

end
