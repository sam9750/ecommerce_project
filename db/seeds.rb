# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


require 'faker'

15.times do
    User.create([{
      name: Faker::Name.unique.name,
      dob: Faker::Date.birthday(min_age: 18, max_age: 110),
      email: Faker::Internet.email,
      password_digest: Faker::Internet.password(min_length: 10, max_length: 20),
      username: Faker::Internet.username(specifier: 5..10)
  
  
    }])
  end




  10.times do 
    Item.create!(title: Faker::Avatar.image, description: Faker::Lorem.sentence(5), image_url: Faker::LoremFlickr.unique.image)
  end
   
puts "Done Seeding Listings!"

puts "Seeding Favorites....."
    f1 = Favorite.create(user_id: u1.id, listing_id: l20.id)
    f2 = Favorite.create(user_id: u2.id, listing_id: l13.id)
    f3 = Favorite.create(user_id: u2.id, listing_id: l14.id)
    f4 = Favorite.create(user_id: u4.id, listing_id: l3.id)
    f5 = Favorite.create(user_id: u5.id, listing_id: l4.id)
    
    f6 = Favorite.create(user_id: u1.id, listing_id: l3.id)
    f7 = Favorite.create(user_id: u2.id, listing_id: l10.id)
    f8 = Favorite.create(user_id: u3.id, listing_id: l13.id)
    f9 = Favorite.create(user_id: u4.id, listing_id: l1.id)
    
    f10 = Favorite.create(user_id: u1.id, listing_id: l3.id)
    f11 = Favorite.create(user_id: u2.id, listing_id: l12.id)
    f12 = Favorite.create(user_id: u3.id, listing_id: l2.id)
    f13 = Favorite.create(user_id: u3.id, listing_id: l14.id)
puts "Done Seeding Favorites!"

