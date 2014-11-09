require 'bundler'
Bundler.require

ActiveRecord::Base.establish_connection({
  adapter: 'postgresql',
  database: 'two_gamez_db'
  })

require 'sinatra/activerecord/rake'
require 'csv'

namespace :db do
  desc "Create the 2_gamez_db database"
  task :create_db do
    conn = PG::Connection.open()
    conn.exec('CREATE DATABASE two_gamez_db')
    conn.close
  end


  desc "Drop database" 
    task :drop_db do
    conn = PG::Connection.open()
    conn.exec('DROP DATABASE two_gamez_db')
    conn.close
  end

  desc "Import csv"
  task :load_data do

  filename = 'words.csv'

  CSV.foreach(filename, headers: true) do |csv| # Part 1: load
    word = csv[0]
    
    Hangman.create!(
      word: word,
      ) # Part 3: store
    end
  end

end