class TweetSerializer < ActiveModel::Serializer
  attributes :text, :posted_at, :tweet_id, :candidate_id, :favorite_count, :retweet_count

end