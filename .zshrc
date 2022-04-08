export VOLTA_HOME="$HOME/.volta"
#path
export PATH="/usr/local/sbin:$PATH"
export PATH="/usr/local/bin:$PATH"
export PATH="$VOLTA_HOME/bin:$PATH"

#rust cargo
[[ -s $HOME/.cargo/env ]] && source $HOME/.cargo/env

#zsh

# fpath=(~/.zsh/zsh-completions/src $fpath)
# rm -f ~/.zcompdump; 
# autoload -Uz compinit
# compinit

[[ -s $HOME/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh ]] && source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh
[[ -s $HOME/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh ]] && source ~/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
[[ -s $HOME/.zsh/zsh-history-substring-search/zsh-history-substring-search.zsh ]] && source ~/.zsh/zsh-history-substring-search/zsh-history-substring-search.zsh


HISTFILE=~/.histfile
HISTSIZE=1000
SAVEHIST=1000
setopt INC_APPEND_HISTORY


[[ -s ~/.aliases ]] && source ~/.aliases

#z
[[ -s ~/.zsh/z/z.sh ]] && . $HOME/.zsh/z/z.sh



eval "$(starship init zsh)"
