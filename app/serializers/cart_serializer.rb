class CartSerializer < ActiveModel::Serializer
  attributes :order_id, :cart_items
  # has_many :cart_items, serializer: CartItemsSerializer
end
