class User < ActiveRecord::Base
  has_many :sent_requests, class_name: "FriendRequest", foreign_key: :sender_id
  has_many :received_requests, class_name: "FriendRequest", foreign_key: :recipient_id
  has_many :libraries
  has_many :movies, through: :library_movies

  has_secure_password

  def friends
    all_friends= []
    self.sent_requests.each do |req|
      all_friends << User.find(req.recipient_id) if req.status == true
    end
    self.received_requests.each do |req|
      all_friends << User.find(req.sender_id) if req.status == true
    end
    all_friends
  end

end
