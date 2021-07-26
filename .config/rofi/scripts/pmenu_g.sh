#!/bin/bash

## Created By Aditya Shakya

MENU="$(rofi -sep "|" -dmenu -i -p '' -location 3 -yoffset 55 -xoffset -15  -margin 0 -hide-scrollbar -line-padding 0 -padding 0 -width 6 -lines 4 -font "Dank Mono 13" <<< "Lock|Logout|Reboot|Shutdown")"
            case "$MENU" in
                *Lock) bash ~/.config/i3lock/i3lock.sh;;
                *Logout) bspc quit;;
                *Reboot) sudo reboot ;;
                *Shutdown) sudo poweroff
            esac
