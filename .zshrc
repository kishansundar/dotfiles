#path
export PATH="/usr/local/sbin:$PATH"
export PATH="/usr/local/bin:$PATH"

#rust cargo
[[ -s $HOME/.cargo/env ]] && source $HOME/.cargo/env

#zsh
[[ -s /usr/local/share/zsh-autosuggestions/zsh-autosuggestions.zsh ]] && source /usr/local/share/zsh-autosuggestions/zsh-autosuggestions.zsh
[[ -s /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh ]] && source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh
source ~/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source ~/.zsh/zsh-history-substring-search/zsh-history-substring-search.zsh

fpath=(~/.zsh/zsh-completions/src $fpath)
rm -f ~/.zcompdump; compinit

[[ -s ~/.aliases ]] && source ~/.aliases


#haxe
# export HAXE_STD_PATH="/usr/local/lib/haxe/std"

#z
# export _Z_CMD=zd
. $HOME/.zsh/z/z.sh

#nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"

eval "$(starship init zsh)"
