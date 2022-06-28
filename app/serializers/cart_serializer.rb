class CartSerializer < ActiveModel::Serializer
  attributes :order_id
  has_many :cart_items
end
