class CreateCounterparties < ActiveRecord::Migration[5.0]
  def change
    create_table :counterparties do |t|
      t.belongs_to :workspace, index: true
      t.string :title
      t.datetime :date
      t.string :type

      t.timestamps
    end
  end
end
