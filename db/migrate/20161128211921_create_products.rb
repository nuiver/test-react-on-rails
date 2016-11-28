class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name
      t.decimal :price
      t.boolean :stocked
      t.string :category

      t.timestamps
    end
  end
end
