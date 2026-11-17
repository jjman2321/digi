#!/bin/bash
# $1 in.mp4  $2 out.mp4 : 2005-digicam video finish ($0, on device): 15 fps, CCD noise, soft+oversharp, vignette, MJPEG blockiness, flash pop, LCD stamp
in=$1; out=$2; tmp=$(mktemp -d)
ffmpeg -v error -y -i "$in" -vf "fps=15,scale=480:640:force_original_aspect_ratio=increase,crop=480:640,eq=contrast=1.08:brightness=-0.02:saturation=0.92,colorbalance=bs=0.04:rs=-0.02,gblur=sigma=0.6,unsharp=5:5:0.8,vignette=PI/4.5,noise=c0s=10:c1s=14:c2s=14:allf=t" -c:v mjpeg -q:v 9 -an "$tmp/a.avi"
ffmpeg -v error -y -i "$tmp/a.avi" -i stamp_720x960.png -filter_complex "[0:v]scale=720:960:flags=bicubic,fade=t=in:st=0:d=0.35:color=white[v];[v][1:v]overlay=0:0,format=yuv420p" -r 15 -c:v libx264 -crf 20 -movflags +faststart -an "$out"
rm -rf "$tmp"
