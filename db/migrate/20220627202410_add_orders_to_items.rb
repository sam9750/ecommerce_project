class AddOrdersToItems < ActiveRecord::Migration[7.0]
  def change
    add_reference :items, :order, null: false, foreign_key: true
  end
end
