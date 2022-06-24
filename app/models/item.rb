class Item < ApplicationRecord
    # belongs_to :item
    # belongs_to :cart
    # belongs_to :order
    has_many :cart_items
end
