source /Users/Username/.zsh/aliases.zsh
source /Users/Username/.zsh/completion.zsh
source /Users/Username/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh
source /Users/Username/.zsh/history.zsh
source /Users/Username/.zsh/key-bindings.zsh
source $(brew --prefix nvm)/nvm.sh
eval $(thefuck --alias)

export PATH="/opt/homebrew/sbin:$PATH"

eval "$(oh-my-posh init zsh --config $(brew --prefix oh-my-posh)/themes/M365Princess.omp.json)"
