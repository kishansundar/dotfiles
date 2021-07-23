eval "$(starship init zsh)"

#path
export PATH="/usr/local/sbin:$PATH"
export PATH="/usr/local/bin:$PATH"

#rust cargo
[[ -s $HOME/.cargo/env ]] && source $HOME/.cargo/env

#zsh
[[ -s /usr/local/share/zsh-autosuggestions/zsh-autosuggestions.zsh ]] && source /usr/local/share/zsh-autosuggestions/zsh-autosuggestions.zsh
[[ -s /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh ]] && source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

fpath=(~/.zsh/zsh-completions/src $fpath)
rm -f ~/.zcompdump; compinit

source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh
source ~/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source ~/.zsh/zsh-history-substring-search/zsh-history-substring-search.zsh

[[ -s ~/.aliases ]] && source ~/.aliases



#z
. $HOME/.zsh/z/z.sh

#nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"
