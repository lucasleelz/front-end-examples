#!/bin/bash
# 使用 browser-sync 启动
cd ~/lucaslz/front-end-examples/coffeerun
browser-sync start --server --browser "Google Chrome" --files "stylesheet/*.css, *.html, scripts/*.js"
