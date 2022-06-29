class Item < ApplicationRecord
    # belongs_to :item
    # belongs_to :cart
    belongs_to :order, optional: true
    # has_many :cart_items
    # has_many :carts, through: :cart_items
end
