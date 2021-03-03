module.exports = {
  apps: [
    {
      name: "pre-processor-translator",
      script: "npm",
      args: "run prod",
      watch: "./src",
      // instances: "max",
      // exec_mode: "cluster",
      env: {
        PORT: "3005",
        HOST: "localhost",
      },
    },
    // {
    //   name: "test-translator-error",
    //   script: "dist/checkError/app.js",
    //   watch: "./src/checkError",
    //   watch_delay: 5000,
    //   // instances: "max",
    //   // exec_mode: "cluster",
    //   log_file: "./logs/test-translator-combined.log",
    //   out_file: "./logs/test-translator-out.log",
    //   error_file: "./logs/test-translator-error-err.log",
    //   autorestart: false,
    // },
  ],
};
