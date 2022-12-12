Rails.application.routes.draw do
  namespace :api do
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # resources :users
  resources :items, only: [:index, :show]
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  resources :carts, only: [:index, :show]
  resources :cart_items, only: [:index, :show, :destroy, :create]
  resources :orders, only: [:create, :show, :index]

  root "items#index"
  get "/users", to: "users#index"
  # get "/items", to: "items#index"
  post "/signup", to: "users#create"
  # get "/me", to: "users#create"

  patch 'user/update', to: "users#update"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/authorized_user", to: "users#show"
  

  post "/cartorder", to: "users#user_order"
  get "/cart", to: "orders#show"
  get "/totalPrice", to: "users#total_price"


  post "/charges", to: "charges#create"
  

  delete "/cart_items/:id", to: "cart_items#destroy"
  
  patch "/checkout", to: "orders#checkout"

  post "/charge", to: "orders#charge"

 
 get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end