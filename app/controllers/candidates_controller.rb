class CandidatesController < ApplicationController
  def index
    @candidates = Candidate.all
    render json: @candidates
  end
  
  def show
    @candidate = Candidate.find_by(id: params[:id])
    render json: @candidate, status: :ok
  end

  def update
    if @candidate.update(candidate_params)
        render json: @candidate, status: :ok
    else
      render json: @candidate.errors, status: :unprocessable_entity
    end
  end


private
  def candidate_params
    params.require(:candidate).permit(:handle, :name, :picture, :facebook_link, :instagram_link, :first_tweet, :most_recent_tweet, :location, :description, :followers, :following, :totalTweets, :acct_created_at)
  end
end