# == Schema Information
#
# Table name: pantries
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  location   :string
#

class Pantry < ActiveRecord::Base
  belongs_to :user
  has_many :pantry_ingredients
  has_many :ingredients, through: :pantry_ingredients

  validates :location, presence: true
end
