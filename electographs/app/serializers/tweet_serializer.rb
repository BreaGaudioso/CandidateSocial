class TweetSerializer < ActiveModel::Serializer
  attributes :text, :twitterID, :favorCount, :retweetCount
end
