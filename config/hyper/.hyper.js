// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    shell: '/opt/homebrew/bin/zsh',

    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: 'stable',

    // default font size in pixels for all tabs
    fontSize: 16,

    // font family with optional fallbacks
    fontFamily: '"Hack Nerd Font", Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

    // default font weight: 'normal' or 'bold'
    fontWeight: 'normal',

    // rest of the config
    webGLRenderer: false,
    activeTab: '🦄',

  },
  // rest of the file
  plugins: [
    "hyper-font-ligatures",
    "hyper-search",
    "hyper-pane",
    "hypercwd",
    "hyper-active-tab",
    "hyperpower",
    "hyper-one-dark",
    "hyperborder"
  ],
}
