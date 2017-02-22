class User < ActiveRecord::Base
  include DeviseTokenAuth::Concerns::User
  devise :database_authenticatable, :registerable,
         :rememberable, :trackable, :omniauthable,
         :validatable # ,:recoverable,:confirmable

  has_many :workspaces, dependent: :destroy
  has_many :counterparties, through: :workspaces
  after_create :create_default_workspace

  def create_default_workspace
    workspaces.create(title: 'Default')
  end
end
