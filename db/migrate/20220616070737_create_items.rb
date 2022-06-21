class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :location
      t.string :image_url
      t.string :type
      t.string :category
      t.string :description

      t.timestamps
    end
  end
end
