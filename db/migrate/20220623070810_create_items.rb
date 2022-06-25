class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :location
      t.string :image_url
      t.string :description
      t.string :category
      t.string :title

      t.timestamps
    end
  end
end
