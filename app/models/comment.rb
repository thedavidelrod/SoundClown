class Comment < ApplicationRecord
  validates :author_id, :sound_id, :body, presence: true

  belongs_to :author, 
  foreign_key: :author_id,
  class_name: :User

  belongs_to :sound,
  foreign_key: :sound_id,
  class_name: :Sound
  
end #! end of code
