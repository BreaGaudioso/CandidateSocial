class Tweet < ActiveRecord::Base

validates :candidate_id, presence: :true
belongs_to :candidate_id
end
