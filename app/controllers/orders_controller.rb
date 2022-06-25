class OrdersController < ApplicationController

  def create
    order = Order.create!(order_params)
    render json: order, status: :created



    def index
      orders = Order.all
      render json: orders
    end
  
    def show
      
      render json: current_user.cart.items
    end
  
    def cart_items
      if (order[checked_out: false])
        order = Order.find(params[checked_out: false])
        render json: order.cart.items
      else
        order = Order.create(order_params)
        render json: order.cart.items
      end
    end
  
    def checkout
      
      current_user_order = current_user.update!(:checked_out => true)
      render json: current_user_order
    end
  
    
    def charge
      Stripe.api_key = "sk_test_51L7ny5BqFuEnTEglwRQwAa7tgWXKEJaoT0bzJo6okb7EJAeMbKnZgkOdUwlTPDDH1J2pCD6bYQg7mvj2Jq7pC3yZ0086dwKylo"
      token = params[:stripeToken]
      charge = Stripe::Charge.create({
        amount: 100,
        currency: "usd",
        description: "Example charge",
        source: token,
      })
    end
  
    private
  
    def order_params
      params.permit(:checked_out, :user_id, :order_id, :cart_id)
    end
  end