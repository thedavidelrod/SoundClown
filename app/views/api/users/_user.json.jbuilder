json.extract! user, :id, :email, :username
json.soundIds user.sounds.ids 


json.profilePicture url_for(user.photo) if user.photo.attached?
