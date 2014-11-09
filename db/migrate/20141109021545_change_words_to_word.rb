class ChangeWordsToWord < ActiveRecord::Migration
  def change
    rename_column :hangman, :words, :word
  end
end
