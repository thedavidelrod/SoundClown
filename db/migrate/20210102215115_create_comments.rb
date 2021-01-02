class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :sound_id, null: false
      t.integer :parent_id
      t.timestamps
    end
    add_index :comments, :author_id
    add_index :comments, :sound_id
    add_index :comments, :parent_id
  end
end
