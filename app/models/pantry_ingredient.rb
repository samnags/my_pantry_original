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
  # has_one :measurement
end
