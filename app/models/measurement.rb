# == Schema Information
#
# Table name: measurements
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Measurement < ActiveRecord::Base
  # belongs_to :PantryIngredient
end