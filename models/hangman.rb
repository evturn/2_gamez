class Hangman < ActiveRecord::Base
  before_create :setup_words


  def setup_words
    self.word = random_word
    self.state = self.word.gsub(/[\w]/, "_")
  end

  def swap(letter)
    state_will_change!
    word.chars.each_with_index do |l, idx|
      if l == letter.downcase
        state[idx] = word[idx]
      end
    end
    self.save!
    self.state
  end


  def incorrect(letter)
    mismatch_will_change!
    unless word.chars.include?(letter)
      self.mismatch += letter
      self.save!
    end
  end

  def random_word
    ["southside", "yam", "ocean", "burrito", "finance", "apron", "calories", "butter", "potato", "cream", "ribs"].sample
  end

end