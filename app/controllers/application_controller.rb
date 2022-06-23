class ApplicationController < ActionController::API
    include ActionController::Cookies
        rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
        rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    

    before_action :authorize
   
    def current_user
      @current_user = User.find_by(id: session[:user_id])
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
  end
  