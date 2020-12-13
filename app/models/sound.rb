class Sound < ApplicationRecord
validates :title, presence: true
validates :uploader_id, presence: true
has_one_attached :photo
has_one_attached :sound

belongs_to :user,
  primary_key: :id,
  foreign_key: :uploader_id,
  class_name: :User


end #! end of code
