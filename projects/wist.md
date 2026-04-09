---
layout: project-page
pID: 1
title: Wist
description: Immersive memories
image: /assets/img/wist/couch2-low-poster.jpg
assetURL: /assets/img/wist/
modelURL: /assets/models/wist/

---

{% include media-video.html
   header="Take a video. Step inside. Enhance forever."
   url="temp/RELIVE.mp4"
   caption=""
   aspect="1by1"
   loop=false
   controls=true
   style="lg"
%}

{% include p-section.html
   header="Why immersive memories?"
   subheader=""
   content="**Immersive media is incredibly compelling, even more when it is your own memories.** I saw where the tech was going, in part from my time at Samsung, but no one was tacking the hard problem. Companies were going after high-end multi-camera rigs, or static photogrammetry, or wholly generated 2D video.

   Wist's unique perspective and challenges were

   1. **Dynamic content.** A memory must be as alive as the original moment.
   1. **Ease of use.** Work with what parents are already doing. Just take a video or import. The tech does the hard part. Then users can relive these moments on mobile or in VR by basically just pressing play.
   1. **Continuous improvement.** Every capture must be able to be reprocessed with our latest version to enhance the reconstruction.

   **And, I was about to have my first kid.** 
"
%}



{% include media-img-xl.html
   url="temp/vivaldi/birth.jpg"
   caption="Every moment is special."
%}


{% include p-section.html
   header="Accolades & praise"
   subheader="TK"
   url="temp/first-sight-sm.jpg"
   caption="Wist used in the production of \"First Sight\"."
   content="
- First Sight
- User notes
- Interviews (Vice, The Pitch, ...)
"
%}

{% include p-section.html
   header="A founder does everything"
   subheader="My role"
   content="
**I had four main roles.**

1. Founder + CEO.
1. Designer.
1. Engineer.

I led the company from my initial prototypes, through finding a cofounder, through product development and beta launches, and ultimately through dissolution. 

Responsibilities included

- Define product vision
- Leading team, hiring
- Raising ~$1M from angels and VCs
- Leading engineering & R&D
- Designing core product experience + tiny interactions
- Building/rebuilding most of the tech stack
- User research and metrics

We were a tiny team of four (at our height), all highly capable of jumping between design, engineering, R&D, and the product decisions that guide us.
"
%}

{% include p-section.html
   header="Product"
   subheader="It has to be easy and just work"
   content="
> Wist was an end-to-end spatial media platform for parents with young kids.<br><br>Take a video. Step inside. Enhance forever.

"
%}

{% include media-img-xl.html
   url="temp/first-sight-sm.jpg"
   caption="End to end experience. TK replace with new overall flow"
%}

{% include p-section.html
   header=""
   subheader=""
   content="

### Capture feels familiar

iOS app that feels like a native camera. Each capture records video + depth + camera pose + intrinsics, all at 30-60fps. We directly encoded into an internal format that preserves a higher depth range and helps playback.

Users could also import 2D video for a \"spatial upconversion\".
"
%}

{% include media-img.html
   url="capture2-low.mp4"
   caption="**Capturing** feels like taking a video, only possible with our encoding technique and user focus."
   url2="bento-sm/import.jpg"
   caption2="**Importing** is delightfully unremarkable. The output is what is special."
   style="lg"
%}


{% include p-section.html
   header=""
   subheader=""
   content="
### Processing enhances captures

It must feel automatic, easy, and out of the way of capturing and staying in the moment.

#### On device
"
%}

{% include media-img.html
   url="temp/feature-walkthrough-photos/exports/v0.7.0-sync.jpg"
   caption=""
   style="md"
%}

{% include p-section.html
   header=""
   subheader=""
   content="
- Directly encode into our internal formats during capture
- As \"backgroundable\" as possible
- Ready for immediate playback on iOS and, after syncing, headsets
- Auto-export 2D video to camera roll to decrease switching cost

#### Backend enhancement
"
%}

{% include media-img.html
   url="temp/importScanLayers.gif"
   caption=""
   style="md"
%}

{% include p-section.html
   header=""
   subheader=""
   content="

We built a concert of methods that would decompose the video into \"channels\" of data that could then be used together to refine the overall reconstruction and improve playback.

High level processing stack

1. **Prepare data.** Download video and data files, decompose into frames, retime to ensure temporal alignment.
1. **Fill any dropped frames.** Model: RIFE.
1. **Estimate if the capture is static or not.** Changes downstream processing. Model: MapAnything.
1. **Semantic segmentation & SDFs.** Helps identify people and dynamic objects. Model: Mask2Former.
1. **Optical flow.** Model: RAFT.
1. **Infer per-frame camera pose, intrinsics, and depth.** Model: MapAnything.
1. If the capture is not static, **run photogrammetry techniques to stabilize and rectify the static portions of the scene** with RealityScan and TSDF integration in Open3D.
1. **Infer additional depth reference.** Model: DepthPro. Reasonably metric with higher resolution local gradients.
1. **Optimize full capture sequence to rectify depth** in a test-time PyTorch optimization loop. Loss functions and tunings were set from (1) the qualities of each data source and (2) how those qualities intersect. This was the critical step that increased accuracy and decreased flicker.
1. **Generate additional data to support playback.** Depth metrics for the iOS viewer and pre-rendered blurred color.
1. **Generate depth-edge maps** for reduced-artifact playback.
1. **Render new playback video and build data files.** 

The complexities of each step are not well captured in this tiny list.

Each step had particular consideration for the qualities of our data (handheld, in-the-wild, monocular video) and the peculiarites of the model or CV technique.

### Playback brings you back to a moment

"
%}
{% include media-video.html
   header=""
   url="relive-with-me-low.mp4"
   caption="**Video.** Really be there again in a headset for the most powerful experience. On Quest and Vision Pro."
   aspect="1by1"
   loop=true
   controls=true
   style="lg"
%}
{% include p-section.html
   header=""
   subheader=""
   content="

**Headset apps** reproject memories back into the user's space. We took a lot of care around

- Styling artifacts as part of the \"look\"
- Visual styling that both represents the moment vividly and leans into user notions of \"memory viewers\" from sci-fi
- An interface that is out of the way of the meaningful content
- So many specific considerations for how the reprojected media intersects a user's space and their varied intentions while using the app
    - Getting closer to the capture position fades in the culled edges
    - Grabbing the memory pauses it and crops in the boundaries of it
    - Fluid transitions and looping
    - Toggleable \"person highlighting\" that hides everything other than the people in the capture
    - Expandable menus that blur the line between \"browsing/searching\" and \"skimming\"

TK - show don't tell

"
%}
{% include media-img-wall.html
   data=site.data.imgwall.wist-playback
%}
{% include media-video.html
   header=""
   url="temp/wist-spatial-scrubbing.MOV"
   caption="**Video.** A viewer that feels familiar yet extends to highlight the full depth of the moment."
   aspect="16by9"
   loop=true
   controls=false
   autoplay=true
   style="lg"
%}

{% include media-video.html
   header=""
   url="temp/wist-v0.8.7-maintain-up.mp4"
   caption=""
   aspect="16by9"
   loop=true
   controls=false
   autoplay=true
   style="lg"
%}

{% include p-section.html
   header=""
   subheader=""
   content="

### Secondary features that make the product

- Remote play
- Playback at any angle, always up
- Spatial scrubbing
- Grab

"
%}


{% include media-img-xl.html
   url="temp/vivaldi/living-room.jpg"
   caption="Every moment is special."
%}



{% include p-section.html
   header="Tradeoffs & challenges"
   subheader=""
   content="

**My most critical responsibility was figuring out what can we do today that gets us to tomorrow?**

The easist thing was figuring out our unique angle: dynamic, captured from a phone (possibly with LiDAR), feels like taking a video, just works. 

Living up to that took years of trials.

My cofounder and I built the scaffolding early (core UX, encoding format, backend processing pipeline). That allowed us to improve without changing our architecture. In the last two years, we got to a point where more people were gravitating to the product  TK unfinished thought
"
%}

{% include wist-year-challenges.html %}

{% include p-section.html
   header=""
   subheader=""
   content="


- 



- Bringing 3D to a flat screen
- Encoding for processing and playback and preservation
- Staging larger features, which fires can burn
- Processing forever and ever and ever
- Communicating this future
"
%}


{% include media-img-wall.html
   data=site.data.imgwall.wist
%}

