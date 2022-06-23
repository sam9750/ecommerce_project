class CartItemsController < ApplicationController
    
    def index
        render json: CartItems.all
    end
end
