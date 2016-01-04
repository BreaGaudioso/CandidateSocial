class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.string "text"
      t.string "postedAt"
      t.string "twitterID"
      t.integer "favorCount"
      t.integer "retweetCount"
      t.integer "candidate_id"
      t.timestamps null: false
    end
  end
end
