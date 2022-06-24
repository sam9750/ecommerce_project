class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.references :user_id, null: false, foreign_key: true
      t.references :cart_id, null: false, foreign_key: true
      t.boolean :checked_out

      t.timestamps
    end
  end
end
