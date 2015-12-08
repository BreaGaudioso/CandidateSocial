class Candidate < ActiveRecord::Base
  validates :handle, uniqueness: true, presence: true
end
