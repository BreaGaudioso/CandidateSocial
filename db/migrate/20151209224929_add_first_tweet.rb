class AddFirstTweet < ActiveRecord::Migration
  def change
    add_column :candidates, :firstTweet, :string
  end
end
