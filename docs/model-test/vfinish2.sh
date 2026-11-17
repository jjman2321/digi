#!/bin/bash
# $1 in.mp4  $2 out.mp4 : 2005-digicam video finish v2 ($0): 15 fps, light CCD noise, soft+oversharp, MJPEG blockiness, flash pop, LCD stamp. No extra darkening.
in=$1; out=$2; tmp=$(mktemp -d)
ffmpeg -v error -y -i "$in" -vf "fps=15,scale=600:800:force_original_aspect_ratio=increase:flags=lanczos,crop=600:800,eq=contrast=1.04:saturation=1.05,gblur=sigma=0.5,unsharp=5:5:0.7,vignette=PI/6,noise=c0s=7:c1s=9:c2s=9:allf=t" -c:v mjpeg -q:v 7 -an "$tmp/a.avi"
ffmpeg -v error -y -i "$tmp/a.avi" -i stamp_720x960.png -filter_complex "[0:v]scale=720:960:flags=bicubic,fade=t=in:st=0:d=0.3:color=white[v];[v][1:v]overlay=0:0,format=yuv420p" -r 15 -c:v libx264 -crf 22 -movflags +faststart -an "$out"
rm -rf "$tmp"
