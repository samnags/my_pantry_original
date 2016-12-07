class PantrySerializer < ActiveModel::Serializer
  attributes :id
  embed :names, include: true
  has_many :pantry_ingredients
  # has_many :ingredients
end
