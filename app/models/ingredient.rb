# == Schema Information
#
# Table name: ingredients
# =>
#  id          :integer          not null, primary key
#  name        :string
#  category_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Ingredient < ActiveRecord::Base
  belongs_to :category
  has_many :pantry_ingredients
  has_many :pantries, through: :pantry_ingredients

  validates :name, presence: true
end
