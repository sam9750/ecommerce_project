# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_06_24_070542) do
  create_table "cart_items", force: :cascade do |t|
    t.integer "cart_id"
    t.integer "item_id"
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "carts", force: :cascade do |t|
    t.integer "order_id", null: false
    t.boolean "checked_out"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["order_id"], name: "index_carts_on_order_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "location"
    t.string "image_url"
    t.string "description"
    t.string "category"
    t.integer "user_id"
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orders", force: :cascade do |t|
    t.integer "user_id_id", null: false
    t.integer "cart_id_id", null: false
    t.boolean "checked_out"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cart_id_id"], name: "index_orders_on_cart_id_id"
    t.index ["user_id_id"], name: "index_orders_on_user_id_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "dob"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "carts", "orders"
  add_foreign_key "orders", "cart_ids"
  add_foreign_key "orders", "user_ids"
end
