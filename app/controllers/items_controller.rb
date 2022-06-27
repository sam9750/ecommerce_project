class ItemsController < ApplicationController
    # skip_before_action :index

    def index
        items = Item.all
        render json: items
    end

    def show 
        item = item.find(params[:id])
        render json: item
    end

    def create
        item = item.create!(item_params)
        render json: item, status: :created 
    end


    def destroy
        item = item.find(params[:id])
        if item.destroy
          head :no_content
        else
          render json: { error: "item not found" }, status: 422
        end
    end

    private 

    def item_params 
        params.permit(:title, :description, :price, :image_url, :category, :location)
    end
end
