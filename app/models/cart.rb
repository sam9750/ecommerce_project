class Cart < ApplicationRecord
    has_many :cart_items, dependent: :destroy
    has_many :items, through: :cart_items
    # has_one :user, through: :order
    # has_many :orders
    # belongs_to :user
    # belongs_to :order
    has_one :user, through: :order
    has_many :orders

    def add_item(item_params)
        current_item = cart_items.find_by(item_id: item_params[:item][:item_id])
        if current_item
          current_item.quantity += item_params[:item][:quantity].to_i
        current_item.save
        else
        new_item = cart_items.create(item_id: item_params[:item][:item_id],
          quantity: item_params[:item][:quantity],
          cart_id: self.id)
        end
        new_item
      end
    end


