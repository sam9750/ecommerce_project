class CartsController < ApplicationController
    def index
      carts = Cart.all
      render json: carts
      # include: [:cart_items]
    
  
    def show
      order = Order.find_by(checked_out: false)
      if order
       
        render order.items 
      else
        render "Cart Empty"
      end
    
  end
  

  
  #   def show
  #     @order_items = current_order.order_items
  #   end
  # end
