class AddLocationToPantries < ActiveRecord::Migration
  def change
    add_column :pantries, :location, :string
  end
end
