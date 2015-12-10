class Candidate < ActiveRecord::Base
  validates :handle, uniqueness: true, presence: true
  has_many :tweets, dependent: :destroy
end
