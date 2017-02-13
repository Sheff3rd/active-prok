class Workspace < ApplicationRecord
  belongs_to :user

  has_many :counterparties, dependent: :destroy

  validates :title, presence: true, uniqueness: { scope: :user_id, message: 'already exist' }
end
