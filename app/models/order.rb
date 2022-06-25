class Order < ApplicationRecord
    # has_one :cart 
    has_one :cart
    belongs_to :user
    # has_many :orders, through: :cart
end


