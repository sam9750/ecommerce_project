class CreateOrder < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.belongs_to :user_id, null: false, foreign_key: true
      t.boolean :checked_out
      t.string :user_id

      t.timestamps
    end
  end
end
