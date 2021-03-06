#bundle exec forman run rake update_candidates

config = {
  consumer_key: ENV["CONSUMER_KEY"],
  consumer_secret: ENV["CONSUMER_SECRET"]
}

p config


task update_candidates: :environment do
  client = Twitter::REST::Client.new(config)

  bearer_token = client.token
  Candidate.all.each do |c|
    client.search("from:#{c.handle}", result_type: "recent").take(1).each do |tweet|  
      candidate = Candidate.find(c.id)
      candidate.name = tweet.user.name
      candidate.most_recent_tweet = tweet.text
      candidate.description = tweet.user.description
      candidate.followers_count = tweet.user.followers_count
      candidate.friends_count = tweet.user.friends_count
      candidate.statuses_count = tweet.user.statuses_count
      candidate.acct_created_at = tweet.user.created_at
      candidate.save
    end
  end
end

task popular_tweet_search: :environment do
  client = Twitter::REST::Client.new(config)

  bearer_token = client.token
  Candidate.all.each do |candidate|
    client.search("from:#{candidate.handle}", result_type: "popular").each do |tweet|
      Tweet.all.each do |saved_tweet|
        if tweet.id == saved_tweet.tweet_id
          updateTweet = Tweet.find(saved_tweet.tweet_id)      
          updateTweet.favorite_count = tweet.favorite_count
          updateTweet.retweet_count = tweet.retweet_count
          updateTweet.save
        end
      end
      t = Tweet.new
      t.text = tweet.text
      t.posted_at = tweet.created_at
      t.tweet_id = tweet.id
      t.favorite_count = tweet.favorite_count
      t.retweet_count = tweet.retweet_count
      t.candidate = candidate
      t.save
    end
  end
end



task updates_database: [:update_candidates, :popular_tweet_search] do
  puts "running"
end
