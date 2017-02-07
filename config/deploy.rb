
branch = ENV['BRANCH'] || 'master'

set :application, 'active-prok'
set :repo_url, 'git@github.com:Sheff3rd/active-prok.git'
set :passenger_restart_with_touch, true
set :deploy_to, '/home/deploy/apps/active-prok'
set :linked_files, %w(config/database.yml config/secrets.yml)
set :linked_dirs, %w(bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system node_modules)

# puma
set :puma_rackup, -> { File.join(current_path, 'config.ru') }
set :puma_state, "#{shared_path}/tmp/pids/puma.state"
set :puma_pid, "#{shared_path}/tmp/pids/puma.pid"
set :puma_bind, "unix://#{shared_path}/tmp/sockets/puma.sock"
set :puma_conf, "#{shared_path}/puma.rb"
set :puma_access_log, "#{shared_path}/log/puma_error.log"
set :puma_error_log, "#{shared_path}/log/puma_access.log"
set :puma_role, :app
set :puma_env, fetch(:rack_env, fetch(:rails_env, 'production'))
set :puma_threads, [0, 16]
set :puma_workers, 0
set :puma_init_active_record, true
set :puma_preload_app, true
set :branch, branch

set :workers, default: 2, mailers: 1

namespace :puma do
  desc 'Create Directories for Puma Pids and Socket'
  task :make_dirs do
    on roles(:app) do
      execute "mkdir #{shared_path}/tmp/sockets -p"
      execute "mkdir #{shared_path}/tmp/pids -p"
    end
  end

  before :start, :make_dirs
end

namespace :npm do
  task :install do
    on roles :app do
      within release_path do
        execute :npm, :install
      end
    end
  end
end

namespace :npm do
  task :start do
    on roles :app do
      within release_path do
        execute :npm, :start
      end
    end
  end
end

namespace :deploy do
  desc 'Initial Deploy'
  task :initial do
    on roles(:app) do
      before 'deploy:restart', 'puma:start'
      invoke 'deploy'
    end
  end

  after  :finishing,    :compile_assets
  after  :finishing,    :cleanup
  after  :finishing,    :restart
end

after 'deploy:updating', 'npm:install'

