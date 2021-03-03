json.extract! comment, :id, :author_id, :sound_id, :body, :created_at   

json.extract! comment.author, :username             
json.photoUrl url_for(comment.author.photo) if comment.author.photo.attached?

