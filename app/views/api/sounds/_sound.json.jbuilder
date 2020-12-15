json.extract! sound, :id, :uploader_id, :title, :tag, :body
json.photoUrl url_for(sound.photo) if sound.photo.attached?
json.soundUrl url_for(sound.sound) if sound.sound.attached?

