# == Schema Information
#
# Table name: pantry_ingredients
#
#  id             :integer          not null, primary key
#  pantry_id      :integer
#  ingredient_id  :integer
#  quantity       :integer
#  date           :date
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  measurement_id :integer
#

class PantryIngredient < ActiveRecord::Base
  belongs_to :ingredient
  belongs_to :pantry
  belongs_to :measurement
  has_one :category, through: :ingredient

  validates :pantry_id, :ingredient_id, :quantity, :measurement_id, presence: true

end
