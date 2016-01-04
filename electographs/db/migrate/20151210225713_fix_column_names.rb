class FixColumnNames < ActiveRecord::Migration
  def change
    rename_column :tweets, :postedAt, :posted_at
    rename_column :tweets, :twitterID, :tweet_id
    rename_column :tweets, :favorCount, :favorite_count
    rename_column :tweets, :retweetCount, :retweet_count

    rename_column :candidates, :followers, :followers_count
    rename_column :candidates, :following, :friends_count
    rename_column :candidates, :totalTweets, :statuses_count
    rename_column :candidates, :dateCreated, :acct_created_at
  end
  
end
