json.extract! user, :id, :email, :username, :sounds
json.sounds user.sounds.ids


json.photoUrl url_for(user.photo) if user.photo.attached?
