class User < ApplicationRecord
 has_many :orders 
 has_many :carts, through: :items 
end
