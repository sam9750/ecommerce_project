class CartItemsSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :cart_id
  belongs_to :item
  belongs_to :cart
end
