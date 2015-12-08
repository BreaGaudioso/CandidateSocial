class CreateCandidates < ActiveRecord::Migration
  def change
    create_table :candidates do |t|
      t.string "handle"
      t.string "name"
      t.string "party"
      t.string "picture"
      t.string "location"
      t.string "description"
      t.integer "followers"
      t.integer "following"
      t.integer "totalTweets"
      t.string "dateCreated"
      t.timestamps null: false
    end
  end
end
