#!/bin/sh
# set up the two monitors for bspwm
# NOTE This is a simplistic approach because I already know the settings I
# want to apply.
# xrandr --output DP-0 --mode 2560x1440 --rate 165 --pos 0x0 --rotate normal --output DP-2 --primary --mode 3440x1440 --rate 120 --pos 2560x0 --rotate normal

# my_external_monitor=$(xrandr --query | grep 'DP-0')
# if [[ $my_external_monitor = *connected* ]]; then
#     xrandr --output DP-0 --mode 2560x1440 --rate 165 --pos 0x0 --rotate normal --output DP-2 --primary --mode 3440x1440 --rate 120 --pos 2560x0 --rotate normal
# fi


xrandr --output Virtual1--mode 2560x1440 --rate 60 --pos 0x0 --rotate normal --output Virtual2 --primary --mode 3440x1440 --rate 60 --pos 2560x0 --rotate normal

my_external_monitor=$(xrandr --query | grep 'Virtual1')
if [[ $my_external_monitor = *connected* ]]; then
    xrandr --output Virtual1 --mode 2560x1440 --rate 60 --pos 0x0 --rotate normal --output Virtual2 --primary --mode 3440x1440 --rate 60 --pos 2560x0 --rotate normal
fi
