class Order < ApplicationRecord
    has_one :cart 
    belongs_to :user
    has_many :items, through: :cart
end
