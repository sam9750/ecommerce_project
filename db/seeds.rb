# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


require 'faker'

User.destroy_all
Item.destroy_all
Cart.destroy_all
CartItem.destroy_all
Order.destroy_all





puts "Seeding Users...."
# 50.times do
#     User.create(username: 'xXCharlie420Xx' , password: '123' , age: 19, name: "Charlie")
# end
    u1 = User.create(username: 'joe' , email: "example0@gmail.com", password: '123' , dob: "20-05-1990", name: "Joe")
    u2 = User.create(username: 'sam' , email: "example1@gmail.com", password: '123' , dob: "10-01-1980", name: "Sam")
    u3 = User.create(username: 'david' , email: "example2@gmail.com", password: '123' , dob: "30-03-1987", name: "David")
puts "Done Seeding Users!"

puts "Seeding Items...."




    l1 = Item.create(location: "Faker::Address.city", image_url: "https://m.media-amazon.com/images/I/71xNX+HQrAL._AC_UX679_.jpg", description: "Funcle Shirt", category: "Uncle", description: "Faker::Lorem.paragraph", user_id: u1.id)

    l2 = Item.create(location: "Faker::Address.city", image_url: "https://m.media-amazon.com/images/I/A1ntnF3PJOL._CLa%7C2140%2C2000%7C71mT4TQux8L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679._SX._UX._SY._UY_.png", description: "Cheesy Shirt", category: "Cheese", description: "Faker::Lorem.paragraph", user_id: u1.id)

    l3 = Item.create(location: "Faker::Address.city", image_url: "https://ctl.s6img.com/society6/img/C931lpQ2OzPDyEVSZ1v4facuX2g/w_700/tshirts/men/greybg/black/~artwork,bg_FFFFFFFF,fw_3302,fh_5096,fx_-407,fy_-46,iw_3900,ih_3409/s6-original-art-uploads/society6/uploads/misc/325c18d3eebc4376b9cb3a5d23e33965/~~/punny-pineapples-tshirts.jpg", description: "Pineapple Shirt", category: "Fruit", description: "Faker::Lorem.paragraph", user_id: u2.id)

    l4 = Item.create(location: "Faker::Address.city", image_url: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C61zt9K4Cw4L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png", description: "Tangerine", category: "Fruit", description: "Faker::Lorem.paragraph", user_id: u2.id)

    l5 = Item.create(location: "Faker::Address.city", image_url: "https://i0.wp.com/shirts-n-giggles.com/wp-content/uploads/2017/01/mockup-f7821e65.jpg?fit=600%2C600&ssl=1", description: "Chemistry Shirt", category: "Science", description: "Faker::Lorem.paragraph" , user_id: u3.id)

    puts "Done Items...."
    

    puts "Seeding Carts ...."
    Cart.create(order_id: 1)
    Cart.create(order_id: 2)
    puts "Done Seeing Cart! "
    
    # Order.create(user_id: 1, checked_out: false)
    puts "Seeing Carts ...."
    CartItem.create(cart_id: 1, item_id: 1, quantity: 1)
    CartItem.create(cart_id: 1, item_id: 4, quantity: 1)
    puts "Done Seeing Cart Items!"
    



# puts "Seeding Favorites....."
#     f1 = Favorite.create(user_id: u1.id, item_id: l20.id)
#     f2 = Favorite.create(user_id: u2.id, item_id: l13.id)
#     f3 = Favorite.create(user_id: u2.id, item_id: l14.id)
#     f4 = Favorite.create(user_id: u4.id, item_id: l3.id)
#     f5 = Favorite.create(user_id: u5.id, item_id: l4.id)
    
#     f6 = Favorite.create(user_id: u1.id, item_id: l3.id)
#     f7 = Favorite.create(user_id: u2.id, item_id: l10.id)
#     f8 = Favorite.create(user_id: u3.id, item_id: l13.id)
#     f9 = Favorite.create(user_id: u4.id, item_id: l1.id)
    
#     f10 = Favorite.create(user_id: u1.id, item_id: l3.id)
#     f11 = Favorite.create(user_id: u2.id, item_id: l12.id)
#     f12 = Favorite.create(user_id: u3.id, item_id: l2.id)
#     f13 = Favorite.create(user_id: u3.id, item_id: l14.id)
# puts "Done Seeding Favorites!"

