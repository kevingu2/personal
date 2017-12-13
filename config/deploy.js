/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {
      environment: deployTarget
    },
    'revision-data': {
      type: 'git-commit'
    },
    'ssh-index': {
      remoteDir: "/usr/local/www/personal",
      username: "pi",
      host: "192.168.1.67",
      privateKeyFile: "~/.ssh/id_rsa",
      allowOverwrite: true,
      passphrase: "dragonmaster1"
    },
    rsync: {
      dest: "/usr/local/www/personal",
      host: "pi@192.168.1.67",
      delete: false
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
