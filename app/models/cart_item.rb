class CartItem < ApplicationRecord
    belongs_to :cart
    belongs_to :item


# def unit_price
#     # If there is a record
#     if persisted?
#       self[:unit_price]
#     else
#       item.price
#     end
#   end

#   def total
#     unit_price * quantity
#   end

#   private

#   def set_unit_price
#     self[:unit_price] = unit_price
#   end

#   def set_total
#     self[:total] = total * quantity
#   end
end
