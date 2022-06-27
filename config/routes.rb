Rails.application.routes.draw do
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # resources :users
  resources :items, only: [:index, :show]
  resources :sessions, only: [:create]
  resources :carts, only: [:index, :show]
  resources :cart_items, only: [:index]
  resources :orders, only: [:create, :show, :index]


  # root "articles#index"
  get "/users", to: "users#index"
  get "/items", to: "items#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  

  post "/cartorder", to: "users#user_order"
  get "/cart", to: "orders#show"
  get "/totalPrice", to: "users#total_price"



  get "/authorized_user", to: "users#show"


  # Stripe 
  post "/charges", to: "charges#create"
  

  delete "/cart_items/:id", to: "users#delete_cart_item"
  
  patch "/checkout", to: "orders#checkout"

  #Stripe Controller
  post "/charge", to: "orders#charge"


 
 get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }





end