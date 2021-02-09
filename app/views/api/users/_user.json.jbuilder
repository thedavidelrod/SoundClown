json.extract! user, :id, :email
json.soundIds user.sounds.ids 


json.profilePicture url_for(user.photo) if user.photo.attached?
