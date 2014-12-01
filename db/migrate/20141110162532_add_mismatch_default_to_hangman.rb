class AddMismatchDefaultToHangman < ActiveRecord::Migration
  def change
    change_column_default(:hangmen, :mismatch, "")
  end
end
