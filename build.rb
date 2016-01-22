#!/usr/bin/env ruby

puts File.open('./src/rgb.csv')
  .read
  .split("\n")
  .map {|l| l.split(',#')[1] }
  .join ' '
