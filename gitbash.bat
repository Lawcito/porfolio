@echo off
setlocal enabledelayedexpansion
set gitbash="C:\Program Files\Git\git-bash.exe"
set current_dir=%cd%
start "" %gitbash% --cd="%current_dir%"
