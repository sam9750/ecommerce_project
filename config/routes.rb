Rails.application.routes.draw do
  resources :accounts, only: [:index, :post]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # resources :users
  resources :items, only: [:index, :show]
  resources :sessions, only: [:create]
  resources :carts, only: [:index, :show]
  resources :cart_items, only: [:index]
  resources :orders, only: [:create]


  # root "articles#index"
  get "/users", to: "users#index"
  get "/items", to: "items#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  

  get "/authorized_user", to: "users#show"

 
 get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end