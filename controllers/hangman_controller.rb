class HangmanController < ApplicationController

  get '/' do
    @game = Hangman.create

    erb :'hangman/index'
  end

  patch '/letter' do
    content_type :json
    letter = params['letter']
    state = Hangman.last.swap(letter)
    mismatch = Hangman.last.incorrect(letter)
    
    Hangman.last.to_json
  end

end