require 'bundler'
Bundler.require

ActiveRecord::Base.establish_connection({
  adapter: 'postgresql',
  database: 'two_gamez_db'
  })

require 'sinatra/activerecord/rake'
require './models/hangman'
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
  require 'csv'
  filename = 'words.csv'

  CSV.foreach(filename) do |line| # Part 1: load
    
    Hangman.create!(
      word: line[0]
      ) # Part 3: store
    end
  end

end