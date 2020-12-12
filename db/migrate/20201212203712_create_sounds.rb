class CreateSounds < ActiveRecord::Migration[5.2]
  def change
    create_table :sounds do |t|
        t.integer :uploader_id, null: false
        t.string :title, null: false
        t.string :tag, null: false
        t.text :body, null: false

      t.timestamps
    end
    add_index :sounds, :uploader_id
    add_index :sounds, :title
    add_index :sounds, :tag

  end
end
