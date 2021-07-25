eval "$(starship init zsh)"



#path
export PATH="/usr/local/sbin:$PATH"
export PATH="/usr/local/bin:$PATH"

#rust cargo
[[ -s $HOME/.cargo/env ]] && source $HOME/.cargo/env

#zsh

fpath=(~/.zsh/zsh-completions/src $fpath)
rm -f ~/.zcompdump; 
autoload -Uz compinit
compinit

source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh
source ~/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source ~/.zsh/zsh-history-substring-search/zsh-history-substring-search.zsh


HISTFILE=~/.histfile
HISTSIZE=1000
SAVEHIST=1000
setopt INC_APPEND_HISTORY


[[ -s ~/.aliases ]] && source ~/.aliases

#z
. $HOME/.zsh/z/z.sh

#nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"
