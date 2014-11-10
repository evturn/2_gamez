class AddStatusAndGuessColumns < ActiveRecord::Migration
  def change
    add_column :hangmen, :state, :string
    add_column :hangmen, :guess, :string



  end
end
