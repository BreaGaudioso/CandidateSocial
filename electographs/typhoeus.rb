#!/usr/bin/env ruby

require 'rubygems'
require 'bundler/setup'
Bundler.require

config = {
  consumer_key: ENV["CONSUMER_KEY"],
  consumer_secret: ENV["CONSUMER_SECRET"],
}

client = Twitter::REST::Client.new(config)


bearer_token = client.token


#this is how I can update candidates info
#take their last tweet and get all of the user info from it to make sure nothing has changed
#NEED TO FIGURE OUT HOW TO ITERATE OVER ALL CANDIDATES AND UPDATE THIS

# client.search("from:SPECIFIC CANDIDATE", result_type: "recent").take(1).each do |tweet|  
#     t.name = tweet.user.name
#     t.picture = tweet.user.profile_image_url
#     t.location = tweet.user.location
#     t.description = tweet.user.description
#     t.followers = tweet.user.followers_count
#     t.following = tweet.user.friends_count
#     t.totalTweets tweet.user.statuses_count
#     t.dateCreated = tweet.user.created_at
# end



#This is how I can save tweets.
#I will iterate over all of the candidates and get their most popular tweets, then save all of it to the database.


# client.search("from:jebbush", result_type: "popular").each do |tweet|
#   puts tweet.text
#   puts tweet.created_at
#   puts tweet.user.name
#   puts tweet.id
#   puts tweet.favorite_count
#   puts tweet.retweet_count
# end


# client.search("from:jebbush", result_type: "popular").each do |tweet|
  # t = Tweet.new()
  # t.text = tweet.text
  # t.postedAt = tweet.created_at
  # t.twitterID = tweet.id
  # t.favorCount = tweet.favorite_count
  # t.retweetCount = tweet.retweet_count
  # t.candidate_id @candidate.id
  # t.save()
#end


client.search("from:jebbush", result_type: "recent").take(1).each do |tweet|
  puts tweet.user.name
  puts tweet.user.description
  puts tweet.user.location
  puts tweet.user.created_at
  puts tweet.user.followers_count
  puts tweet.user.friends_count
  puts tweet.user.profile_image_url
end


