class OrdersController < ApplicationController

  before_action :authorize
  # def create
  #   order = Order.create!(order_params)
  #   render json: order, status: :created



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
      co = current_user.order
    co_order = co.update!(:checked_out => true)
    render json: co_order
      # current_order = current_user.order.update!(:checked_out => true)
      # render json: current_order
    end


    def charge
      Stripe.api_key = "sk_test_51LGmiQCkxGwbXGjyTMra4mvI6HBMn4PtyrZrxu1QxykkJZlPusNaSBOzjfWI242TXm0y4uvLjtxkmvylEidwoUId00RHhrfIWS"
      token = params[:token]
      amount = params[:amount]
      charge = Stripe::Charge.create({
        amount: amount,
        currency: "usd",
        description: "Example charge",
        source: token,
      })
      render json: charge
    end

    private

    def order_params
      params.permit(:checked_out, :user_id, :order_id, :cart_id)
    end
  end