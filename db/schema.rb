# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151231214050) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "candidates", force: :cascade do |t|
    t.string   "handle"
    t.string   "name"
    t.string   "party"
    t.string   "picture"
    t.string   "location"
    t.string   "description"
    t.integer  "followers_count"
    t.integer  "friends_count"
    t.integer  "statuses_count"
    t.string   "acct_created_at"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "first_tweet"
    t.string   "most_recent_tweet"
    t.string   "facebook_link"
    t.string   "instagram_link"
  end

  create_table "tweets", force: :cascade do |t|
    t.string   "text"
    t.string   "posted_at"
    t.string   "tweet_id"
    t.integer  "favorite_count"
    t.integer  "retweet_count"
    t.integer  "candidate_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

end
