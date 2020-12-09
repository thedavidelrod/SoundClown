class Removeusername < ActiveRecord::Migration[5.2]
  remove_column :users, :username
  def change
  end
end
