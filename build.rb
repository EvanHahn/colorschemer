#!/usr/bin/env ruby

data = File.open('./src/rgb.csv')
  .read
  .split("\n")
  .map {|l| l.split(',#')[1] }
  .join ' '

js = "COLORS='#{data}'.split(' ')"

File.open('./src/colors.js', 'w').puts js
