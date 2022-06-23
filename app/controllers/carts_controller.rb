class CartsController < ApplicationController
    def index
      carts = Cart.all
      render json: carts
    end
  
    def show
      order = Order.find_by(checked_out: false)
      if order
       
        render order.items 
      else
        render "Cart Empty"
      end
    end
  end