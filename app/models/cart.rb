class Cart < ApplicationRecord
    has_many :cart_items, dependent: :destroy
    has_many :items, through: :cart_items
    has_one :user, through: :order
    belongs_to :order
end
