class HangmanController < ApplicationController

  get '/' do
    @game = Hangman.create

    erb :'hangman/index'
  end

  patch '/letter' do
    content_type :json
    letter = params['letter']
    state = Hangman.last.swap(letter)
    
    {
      state: state
    }.to_json


  end

end