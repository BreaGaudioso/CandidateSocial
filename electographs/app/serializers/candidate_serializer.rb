class CandidateSerializer < ActiveModel::Serializer
  attributes :id, :handle, :name, :party, :picture, :location, :description, :followers_count, :friends_count, :most_recent_tweet, :first_tweet, :statuses_count, :acct_created_at


  has_many :tweets

  def tweets
    object.tweets.order("favorite_count DESC")
  end
end



