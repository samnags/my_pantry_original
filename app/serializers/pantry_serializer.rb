# == Schema Information
#
# Table name: pantries
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

# class PantrySerializer < ActiveModel::Serializer
#   attributes :id
#   embed :names, include: true
#   has_many :pantry_ingredients
#   # has_many :ingredients
# end
