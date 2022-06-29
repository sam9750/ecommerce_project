class UsersController < ApplicationController
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    # skip_before_action :authorize, only: [:create]
    # wrap_parameters format: []

    # def index
    #   users = User.all
    #   render json: users
    # end
  
    def show
      user = User.find_by(id: session[:user_id])
      if user 
         render json: user
        #  status: :created 
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end

    def user_order
      # debugger
      i = Item.find_by(id: params[:id])
      ci = current_user.cart.items << i
      render json: i
    end
  
    def total_price
      total = current_user.cart.items.sum(:price)
      
      render json: total
    end
  
    def destroy
      # debugger
      current_item = current_user.cart.cart_items
      i = current_item.find_by(item_id: params[:id])
      if i
        i.destroy
        head :no_content
      else
        render json: { error: "item not found" }, status: 404
      end
    end
    
  
    def create
      user = User.create!(user_params)
      if user
        session[:user_id] = user.id 
          render json: {
              status: :created,
              user: user
          }
      else
        render json: { error: user.errors.messages }, status: 422
      end
    end
  


    def update
      user = User.find(params[:id])
      if user.update!(user_params)
        render json: user
      else
        render json: { error: user.errors.messages }, status: 422
      end
    end
  
    def destroy
      user = User.find(params[:id])
      if user.destroy
        head :no_content
      else
        render json: { error: "User not found" }, status: 422
      end
    end
  
    private
  
    def render_unprocessable_entity(invalid)
      render json: { error: invalid.record.errors }, status: :unprocessable_entity
    end
  
    def user_params
        params.permit(:id, :username, :name, :dob, :email, :password, :password_confirmation, :password_digest, :created_at, :updated_at)
    end

    def order_params
      params.permit(:checked_out, :user_id)
    end
    
  end
  