class CreatePantries < ActiveRecord::Migration
  def change
    create_table :pantries do |t|
      t.integer :user_id    
      t.timestamps null: false
    end
  end
end
