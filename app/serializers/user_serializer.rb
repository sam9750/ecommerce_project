class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :dob, :email, :password_digest, :cart
  has_one :cart, serializer: CartSerializer
end
