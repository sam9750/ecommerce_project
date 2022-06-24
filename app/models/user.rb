class User < ApplicationRecord
    # has_many :carts
    has_many :orders
    has_one :cart

    has_secure_password
     # Validations: username
     validates :username, presence: true
     validates :username, uniqueness: true
     # Validations: password
     validates :password, presence: true, on: :create 
     validates :password, length: { minimum: 2 }, on: :create
     
     def order
        self.orders.find_by(checked_out: false)
      end
    
      def cart 
        orde = self.order
        if orde
          return o.cart 
        else 
          o = Order.new
          o.checked_out = false
          c = Cart.new
          o.cart = c
          self.orders << o 
          return c 
        end
    
      end




end
