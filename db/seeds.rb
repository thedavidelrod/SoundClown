# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

User.create!([
    {email: 'test@user.com', password: 'testuser'},
    {email: 'nickhexum@311.com', password:'311s got the boom'},
    {email: 'lilrollie@bestdog.com', password:'imissyou'}
    {email: 'cool@dude.com', password:'cooldude'}

])

