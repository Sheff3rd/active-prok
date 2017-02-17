class ChangeTitleToName < ActiveRecord::Migration[5.0]
  def change
    rename_column :counterparties, :title, :name
    rename_column :counterparties, :type, :party_type
  end
end
