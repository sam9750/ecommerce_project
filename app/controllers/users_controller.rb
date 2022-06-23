class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    skip_before_action :authorize, only: [:create]
    wrap_parameters format: []

    # def index
    #   users = User.all
    #   render json: users
    # end
  
    def show
      current_user = User.find_by(id: session[:user_id])
      if current_user 
         render json: current_user, status: :created 
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end
        
    
  
    def create
      user = User.create!(user_params)
      session[:current_user] = user.id
      render json: user, status: :created
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
  end
  