class CandidateSerializer < ActiveModel::Serializer
  attributes :id, :handle

  has_many :tweets

end
