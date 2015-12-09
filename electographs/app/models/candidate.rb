class Candidate < ActiveRecord::Base
  validates :handle, uniqueness: true, presence: true
  has_many :options, dependent: :destroy
end
