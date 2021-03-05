class Like < ApplicationRecord
    validates :user_id, :sound_id, presence: true

belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

belongs_to :sound,
  foreign_key: :sound_id,
  class_name: :Sound
end
