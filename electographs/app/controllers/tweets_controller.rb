class TweetsController < ApplicationController

  def index
    @tweets = Tweet.all
    render json: @tweets
  end

  def show
    render json: @tweet, status: :ok
  end

  def create
    @tweet = Tweet.new(tweet_params)
    if @tweet.save
      render json: @tweet, status: :created
    else
      render json: @tweet.errors, status: :unprocessable_entity
    end
  end

  def update
    if @tweet.update(tweet_params)
      render json: @tweet, status: :ok
    else
      render json: @tweet.errors, status: :unprocessable_entity
    end
  end

  private
    def tweet_params
      params.require(:tweet).permit(:text, :postedAt, :twitterID, :favorCount, :retweetCount, :candidate_id)
    end
    
end

