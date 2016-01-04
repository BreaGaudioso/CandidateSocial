class AddSocial < ActiveRecord::Migration
  def change
        add_column :candidates, :facebook_link, :string
        add_column :candidates, :instagram_link, :string
  end
end
