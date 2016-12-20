class RemoveTypeFromMeasurements < ActiveRecord::Migration
  def change
    remove_column :measurements, :type  
  end
end
