class Sound < ApplicationRecord
validates :title, presence: true
validates :uploader_id, presence: true


belongs_to :user,
  primary_key: :id,
  foreign_key: :uploader_id,
  class_name: :User
end #! end of code
