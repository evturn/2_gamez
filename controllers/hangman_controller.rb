class HangmanController < ApplicationController

  get '/' do

    erb :'hangman/index'
  end

end