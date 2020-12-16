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

guestUser = User.create!({email: 'test@user.com', password: 'testuser'})

sound1 = Sound.create!(uploader_id: guestUser.id, title:"Mammoth Life", tag: "Dreampop", body:"Baycataion from Mammoth Life")
sound1_photo = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/Baycation+Cover.jpg")
sound1.photo.attach(io: sound1_photo, filename:'baycationcover.jpg')
sound1_sound = open("https://app-timbrehaar-seed.s3-us-west-2.amazonaws.com/04+Baycation.mp3")
sound1.sound.attach(io:sound1_sound, filename:'Baycation.mp3')

