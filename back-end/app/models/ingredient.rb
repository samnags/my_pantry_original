class Ingredient < ActiveRecord::Base
  belongs_to :category
  has_many :ingredients_pantries
  has_many :pantries, through: :ingredients_pantries
end
