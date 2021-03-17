# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

User.destroy_all
Sound.destroy_all


# testuser 
guestUser = User.create!({email: 'test@user.com', username: 'testuser', password: 'testuser'})
guest_photo = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/images.jpg") 
guestUser.photo.attach(io: guest_photo, filename: "images.jpg")

sound1 = Sound.create!({uploader_id: guestUser.id, title: "Baycation", tag: "Dreampop", body:"Mammoth Life"})
sound1_sound = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/04+Baycation.mp3")
sound1.sound.attach(io: sound1_sound, filename: "04 Baycation.mp3")
sound1_photo = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/Baycation+Cover.jpg")
sound1.photo.attach(io: sound1_photo, filename:'baycationcover.jpg')

sound2 = Sound.create!({uploader_id: guestUser.id, title: 'Saturday In The City', tag: 'Dreampop', body: "Mammoth Life"})
sound2_sound = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/01+Saturday+In+The+City.mp3")
sound2.sound.attach(io: sound2_sound, filename: "01 Saturday In The City.mp3")     
sound2_photo = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/Baycation+Cover.jpg")
sound2.photo.attach(io: sound2_photo, filename: "baycationcover.jpg")

sound3 = Sound.create!({uploader_id: guestUser.id, title: "Lights Out", tag: "Dreampop", body: "Mammoth Life"})
sound3_sound = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/02+Lights+Out.mp3")
sound3.sound.attach(io:sound3_sound, filename: "02 Lights Out.mp3")
sound3_photo = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/Baycation+Cover.jpg")
sound3.photo.attach(io: sound3_photo, filename: "baycationcover.jpg")

sound4 = Sound.create!({uploader_id: guestUser.id, title: "Something In Between", tag: "Dreampop", body: "Mammoth Life"})
sound4_sound = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/03+Something+In+Between.mp3")
sound4.sound.attach(io: sound4_sound, filename: "03 Something In Between.mp3")
sound4_photo = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/Baycation+Cover.jpg")
sound4.photo.attach(io: sound4_photo, filename: "baycationcover.jpg")


#Rollie 

rollie = User.create!({ email: "rollie@dog.com", username: "Rollie", password: "testuser" })
rollie_photo = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/0.jpg")
rollie.photo.attach(io: rollie_photo, filename: "0.jpg")

rollie1 = Sound.create!({uploader_id: rollie.id, title: "Night Of Stars", tag: "Space Rock", body: "Ghostwolf"})
rollie1_sound = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/Ghostwolf+-+Warning+Star+-+11+Nights+Of+Stars.flac")   
rollie1.sound.attach(io: rollie1_sound, filename: "Ghostwolf - Warning Star - 11 Nights Of Stars.flac")
rollie1_photo = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/cover.jpg")
rollie1.photo.attach(io: rollie1_photo, filename: "cover.jpg")

rollie2 = Sound.create!({uploader_id: rollie.id, title: "Darling Dears", tag: "Space Rock", body: "Ghostwolf"})
rollie2_sound = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/Ghostwolf+-+Warning+Star+-+07+Darling+Dears.flac")
rollie2.sound.attach(io: rollie2_sound, filename: "Ghostwolf - Warning Star - 07 Darling Dears.flac")
rollie2_photo = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/cover.jpg")
rollie2.photo.attach(io: rollie2_photo, filename: "cover.jpg")

rollie3 = Sound.create!({uploader_id: rollie.id, title: "Howls", tag: "Space Rock", body: "Ghostwolf"})
rollie3_sound = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/Ghostwolf+-+Warning+Star+-+06+Howls.flac")
rollie3.sound.attach(io: rollie3_sound, filename: "Ghostwolf - Warning Star - 06 Howls.flac")
rollie3_photo = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/cover.jpg")
rollie3.photo.attach(io: rollie3_photo, filename: "cover.jpg")

rollie4 = Sound.create!({uploader_id: rollie.id, title: "Man From Solway Firth", tag: "Space Rock", body: "Ghostwolf"})   
rollie4_sound = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/Ghostwolf+-+Warning+Star+-+13+Man+From+Solway+Firth.flac")
rollie4.sound.attach(io:rollie4_sound, filename: 'Ghostwolf - Warning Star - 13 Man From Solway Firth.flac')  
rollie4_photo = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/cover.jpg")
rollie4.photo.attach(io: rollie4_photo, filename: "cover.jpg")


#Sam Wong

samWong = User.create!({ email: 'sam@hotwong.com', username: "Sam Wong", password: "testuser"})
sam_photo = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/image_from_ios.jpg")
samWong.photo.attach(io: sam_photo, filename: "image_from_ios.jpg") 

sam1 = Sound.create!({uploader_id: samWong.id, title: "Coo?", tag: "Hip-Hop", body: "Blue Scholars"})
sam1_sound = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/03_-_Coo_.mp3")
sam1.sound.attach(io: sam1_sound, filename: "03_-_Coo_.mp3")
sam1_photo = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/Oof.jpg")
sam1.photo.attach(io: sam1_photo, filename: "Oof.jpg")

sam2 = Sound.create!({uploader_id: samWong.id, title: "Hi-808", tag: "Hip-Hop", body: "Blue Scholars"})
sam2_sound = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/02_-_Hi-808.mp3")
sam2.sound.attach(io: sam2_sound, filename: "02_-_Hi-808.mp3")
sam2_photo = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/Oof.jpg")
sam2.photo.attach(io: sam2_photo, filename: "Oof.jpg")

sam3 = Sound.create!({uploader_id: samWong.id, title: "New People", tag: "Hip-Hop", body: "Blue Scholars"})
sam3_sound = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/04_-_New_People.mp3")
sam3.sound.attach(io: sam3_sound, filename: "04_-_New_People.mp3")
sam3_photo = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/Oof.jpg")
sam3.photo.attach(io: sam3_photo, filename: "Oof.jpg")


#Oliver

oliver = User.create!({ email: 'oli@smooth.com', username: "Smooth Oli", password: "testuser"})
oliver_photo = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/Oliver.jpg")
oliver.photo.attach(io: oliver_photo, filename: "Oliver.jpg")

oli1 = Sound.create!({uploader_id: oliver.id, title: "Take Me Home", tag: "Hip-Hop", body: "Prometheus Brown"})
oli1_sound = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/22+Take+Me+Home.mp3")
oli1.sound.attach(io:oli1_sound, filename: "22 Take Me Home.mp3")
oli1_photo = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/21+Take+Me+Home.jpg")
oli1.photo.attach(io:oli1_photo, filename: "21 Take Me Home.jpg")

oli2 = Sound.create!({uploader_id: oliver.id, title: "Focus", tag: "Hip-Hop", body: "Prometheus Brown"})
oli2_sound = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/03+Focus.mp3")
oli2.sound.attach(io:oli2_sound, filename: "03 Focus.mp3")
oli2_photo = open('https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/03+Focus.jpg')
oli2.photo.attach(io: oli2_photo, filename: "03 Focus.jpg")

#Hexum

hexum = User.create!({ email:'nick@311.com', username: "Nick Hexum", password: "testuser"})
hexum_photo = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/nick+hexum.jpg")
hexum.photo.attach(io:hexum_photo, filename:"nick hexum.jpg")

space_time = Sound.create({uploader_id: hexum.id, title: "Space and Time", tag: "Rock", body: "311" })
space_time_sound = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/04.+Space+and+Time.mp3")
space_time.sound.attach(io:space_time_sound, filename:"04.Space and Time.mp3")
space_time_photo = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/Voyager.jpg")
space_time.photo.attach(io:space_time_photo, filename:"Voyager.jpg")

dream = Sound.create({uploader_id: hexum.id, title: "Dream State", tag: "Rock", body: "311"})
dream_sound = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/05.+Dream+State.mp3")
dream.sound.attach(io:dream_sound, filename: '05.Dream State.mp3')
dream_photo = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/Voyager.jpg")
dream.photo.attach(io: dream_photo, filename: "Voyager.jpg")

charge = Sound.create!({uploader_id: hexum.id, title: "Charge It Up", tag: "Rock", body: "311"})
charge_sound = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/12.+Charge+It+Up.mp3")
charge.sound.attach(io: charge_sound, filename: "12.Charge It Up.mp3")
charge_photo = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/Voyager.jpg")
charge.photo.attach(io: charge_photo, filename: "Voyager.jpg")


