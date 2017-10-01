#!/bin/bash
# 使用browser-sync 启动
cd /Users/lucas/lucaslz/front-end-examples/ottergram
browser-sync start --server --browser "Google Chrome" --files "stylesheet/*.css, *.html"
