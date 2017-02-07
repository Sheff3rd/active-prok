set :stage, :production
set :node_env, 'production'

server '188.166.174.146', user: 'deploy', roles: %w(web app db)
