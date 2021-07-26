#!/usr/bin/env sh

polybar Virtual1 -c ~/.config/polybar/config.ini &

# Launch bar1 and bar2
my_external_monitor=$(xrandr --query | grep 'Virtual2')
if [[ $my_external_monitor = *connected* ]]; then
   polybar Virtual2 -c ~/.config/polybar/config.ini &
fi
