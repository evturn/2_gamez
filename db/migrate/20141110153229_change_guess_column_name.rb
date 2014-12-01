class ChangeGuessColumnName < ActiveRecord::Migration
  def change
    rename_column :hangmen, :guess, :mismatch
  end
end
