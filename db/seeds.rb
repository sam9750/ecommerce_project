
    # User.destroy_all
    # Item.destroy_all
    # Order.destroy_all
    # Cart.destroy_all
    # CartItem.destroy_all
    

    puts "Seeding Users...."

        u1 = User.create(username: 'joe' , email: "example0@gmail.com", password: '123' , dob: "11-08-1990", name: "Joe")
        u2 = User.create(username: 'sam' , email: "example1@gmail.com", password: '123' , dob: "11-09-1992", name: "Sam")
        u3 = User.create(username: 'david' , email: "example2@gmail.com", password: '123' , dob: "11-10-1994", name: "David")

    puts "Done Seeding Users"

    puts "Seeding Items...."

        i1 = Item.create(location: "Address1", image_url: "https://m.media-amazon.com/images/I/71xNX+HQrAL._AC_UX679_.jpg", title: "Funcle Shirt", category: "Uncle", description: "Faker::Lorem.paragraph", price: 10 )

        i2 = Item.create(location: "Address2", image_url: "https://m.media-amazon.com/images/I/A1ntnF3PJOL._CLa%7C2140%2C2000%7C71mT4TQux8L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679._SX._UX._SY._UY_.png", title: "Cheesy Shirt", category: "Cheese", description: "Faker::Lorem.paragraph", price: 20)

        i3 = Item.create(location: "Address3", image_url: "https://ctl.s6img.com/society6/img/C931lpQ2OzPDyEVSZ1v4facuX2g/w_700/tshirts/men/greybg/black/~artwork,bg_FFFFFFFF,fw_3302,fh_5096,fx_-407,fy_-46,iw_3900,ih_3409/s6-original-art-uploads/society6/uploads/misc/325c18d3eebc4376b9cb3a5d23e33965/~~/punny-pineapples-tshirts.jpg", title: "Pineapple Shirt", category: "Fruit", description: "Faker::Lorem.paragraph", price: 30)

        i4 = Item.create(location: "Address4", image_url: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C61zt9K4Cw4L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png", title: "Tangerine", category: "Fruit", description: "Faker::Lorem.paragraph", price: 40)

        i5 = Item.create(location: "Address5", image_url: "https://i0.wp.com/shirts-n-giggles.com/wp-content/uploads/2017/01/mockup-f7821e65.jpg?fit=600%2C600&ssl=1", title: "Chemistry Shirt", category: "Science", description: "Faker::Lorem.paragraph", price: 50 )

    puts "Done Items...."

    puts "Seeding Orders"
    o1 = Order.create(user_id: u1.id,  checked_out: false)
    o2 = Order.create(user_id: u2.id, checked_out: false)
    o3 = Order.create(user_id: u2.id,  checked_out: false)
    puts "Done Seeding Orders"


    puts "Seeding Carts ...."
        c1 = Cart.create(order_id: o1.id)
        c2 = Cart.create(order_id: o2.id)
        c3 = Cart.create(order_id: o3.id)
    puts "Done Seeding Carts "

  

    

    puts "Seeding Cart Items ...."
        ci1 = CartItem.create(cart_id: c1, item_id: i1, quantity: 1)
        ci2 = CartItem.create(cart_id: c2, item_id: i4, quantity: 1)
        ci3 = CartItem.create(cart_id: c3, item_id: i3, quantity: 1)
    puts "Done Seeding Cart Items"
        
        
    

    
    

  

    # puts "Seeding Carts ...."
    # c1 = Cart.create(order_id: o1.id)
    # c2 = Cart.create(order_id: o2.id)
    # puts "Done Seeding Carts "
    




    