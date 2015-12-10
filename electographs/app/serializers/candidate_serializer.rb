class CandidateSerializer < ActiveModel::Serializer
  attributes :id, :handle

  has_many :tweets

  def tweets
    object.tweets.order("favorite_count DESC")
  end
end
