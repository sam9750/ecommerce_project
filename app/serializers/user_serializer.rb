class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :dob, :email, :password_digest
  has_one :cart
end
