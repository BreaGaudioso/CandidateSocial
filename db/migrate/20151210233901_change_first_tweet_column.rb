class ChangeFirstTweetColumn < ActiveRecord::Migration
  def change
    rename_column :candidates, :firstTweet, :first_tweet
  end
end
