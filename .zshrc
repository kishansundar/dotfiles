export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"

export PATH="/usr/local/sbin:$PATH"
export PATH="/usr/local/bin:$PATH"
export HAXE_STD_PATH="/usr/local/lib/haxe/std"

[[ -s ~/.aliases ]] && source ~/.aliases
source $HOME/.cargo/env

eval "$(starship init zsh)"

source /usr/local/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source /usr/local/share/zsh-history-substring-search/zsh-history-substring-search.zsh
