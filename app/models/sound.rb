class Sound < ApplicationRecord
  validates :title, presence: true
  validates :uploader_id, presence: true
  has_one_attached :photo
  has_one_attached :sound

  belongs_to :user,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User

  has_many :comments,
    foreign_key: :sound_id,
    class_name: :Comment,
    dependent: :destroy

  has_many :likes,
    foreign_key: :sound_id,
    class_name: :Like
end #! end of code
