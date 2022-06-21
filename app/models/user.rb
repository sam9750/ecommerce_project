class User < ApplicationRecord
    has_many :carts
    has_secure_password
     # Validations: username
     validates :username, presence: true
     validates :username, uniqueness: true
     # Validations: password
     validates :password, presence: true, on: :create 
     validates :password, length: { minimum: 2 }, on: :create
     
     
end
