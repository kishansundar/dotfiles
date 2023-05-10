export PATH="/usr/local/sbin:/usr/local/bin:$PATH"


#rust cargo
[[ -s $HOME/.cargo/env ]] && source $HOME/.cargo/env

#zsh

 fpath=(~/.zsh/zsh-completions/src $fpath)
 rm -f ~/.zcompdump; 
 autoload -Uz compinit
 compinit

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

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

eval "$(starship init zsh)"
fpath+=${ZDOTDIR:-~}/.zsh_functions

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/usr/local/anaconda3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/usr/local/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/usr/local/anaconda3/etc/profile.d/conda.sh"
    else
        export PATH="/usr/local/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<