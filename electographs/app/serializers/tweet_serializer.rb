class TweetSerializer < ActiveModel::Serializer
  attributes :retweet_count, :text, :posted_at, :tweet_id, :candidate_id, :favorite_count, :candidate


end