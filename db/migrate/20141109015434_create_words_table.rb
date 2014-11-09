class CreateWordsTable < ActiveRecord::Migration
  def change
    create_table :hangman do |t|
      t.string :words
    end
  end
end