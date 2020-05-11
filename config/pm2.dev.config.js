module.exports = {
  apps: [
    {
      name: "dnd-house-nodemon",
      script: "npm",
      args: "run dev:nodemon",
    },
    {
      name: "dnd-house-sass",
      script: "npm",
      args: "run dev:sass",
    },
    {
      name: "dnd-house-browser-sync",
      script: "npm",
      args: "run dev:browser-sync",
    },
    {
      name: "dnd-house-webpack",
      script: "npm",
      args: "run dev:webpack",
    },
  ],
};
