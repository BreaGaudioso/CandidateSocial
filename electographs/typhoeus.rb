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


client.search("from:jebbush", result_type: "recent").take(1).each do |tweet|  
  puts tweet.user.statuses_count
end


def popular_tweet_search
  Candidate.all.each do |candidate|
    client.search("from:#{candidate.handle}", result_type: "popular").each do |tweet|
      t = Tweet.new
      t.text = tweet.text
      t.postedAt = tweet.created_at
      t.twitterID = tweet.id
      t.favorCount = tweet.favorite_count
      t.retweetCount = tweet.retweet_count
      t.candidate_id = candidate.id
      t.save
    end
  end
end