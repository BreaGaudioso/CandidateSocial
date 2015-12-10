class AddRecentTweetColumn < ActiveRecord::Migration
  def change
    add_column :candidates, :most_recent_tweet, :string
  end
end
