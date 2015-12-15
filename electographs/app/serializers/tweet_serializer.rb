class TweetSerializer < ActiveModel::Serializer
  attributes :retweet_count, :text, :posted_at, :tweet_id, :candidate_id, :favorite_count


  def tweet
    object.tweets.order("retweet_count DESC")
  end

end