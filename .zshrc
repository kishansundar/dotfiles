eval "$(starship init zsh)"

#path
export PATH="/usr/local/sbin:$PATH"
export PATH="/usr/local/bin:$PATH"



#rust cargo
source $HOME/.cargo/env

#zsh
source /usr/local/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source /usr/local/share/zsh-history-substring-search/zsh-history-substring-search.zsh
[[ -s ~/.aliases ]] && source ~/.aliases


#haxe
export HAXE_STD_PATH="/usr/local/lib/haxe/std"

#z
export _Z_CMD=zd
. $HOME/.config/z.sh

#nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"
