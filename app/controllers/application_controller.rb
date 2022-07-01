class ApplicationController < ActionController::API
    
        rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
        rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
        include ActionController::Cookies
    

    before_action :authorize
    # skip_before_action :authorize
    # protect_from_forgery with: :exception
    # before_action :set_cart
   
    def current_user
      User.find_by(id: session[:user_id])
    end


    private 

    def logged_in?
      !!current_user
    end



    def authorize
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless logged_in?

    end

    


    # def current_user
    #   @current_user ||= User.find(session[:user_id]) if session[:user_id]
    # end
    # helper_method :current_user
  
    # def authorize
    #   redirect_to '/login' unless current_user
    # end

    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
  
    def render_not_found_response(invalid)
      render json: { errors: invalid }, status: :not_found
    end


    # def set_cart
    #   @cart = Cart.find(session[:cart_id])
    #   rescue ActiveRecord::RecordNotFound
    #   @cart = Cart.create
    #   session[:cart_id] = @cart.id
    # end



  end
  