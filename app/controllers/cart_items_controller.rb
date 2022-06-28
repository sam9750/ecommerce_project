class CartItemsController < ApplicationController
  
    # before_action :set_order

    def index
      render json: CartItem.all
    end
  
def create
    @cart.add_item(params)
     
    if @cart.save
      redirect_to cart_path
    else
      flash[:error] = 'There was a problem adding this item to your cart.'
      redirect_to @item
    end
  end


  # def destroy
  #   @cart_item.destroy
  #   redirect_to cart_path
  # end


  def destroy
    cart_item = CartItem.find(params[:id])
    cart_item.destroy
    head :no_content
  end

  
  private 

  def cart_item_params 
      params.permit(:title, :description, :quantity, :price)
  end


end





#     def create
#       @order_item = @order.order_items.new(order_params)
#       @order.save
#       session[:order_id] = @order.id
#     end
  
#     def update
#       @order_item = @order.order_items.find(params[:id])
#       @order_item.update_attributes(order_params)
#       @order_items = current_order.order_items
#     end
        
#     def destroy
#       @order_item = @order.order_items.find(params[:id])
#       @order_item.destroy
#       @order_items = current_order.order_items
#     end
  
#     private
  
#     def order_params
#       params.require(:order_item).permit(:product_id, :quantity)
#     end
  
#     def set_order
#       @order = current_order
#     end
#   end
  #     def index
#         render json: CartItems.all
#     end
# end