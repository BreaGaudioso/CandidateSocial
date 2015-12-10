class Tweet < ActiveRecord::Base
  validates :candidate_id, presence: :true
  validates :tweet_id, uniqueness: true 
  belongs_to :candidate
end

