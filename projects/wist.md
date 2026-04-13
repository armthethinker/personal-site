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
   header="Why immersive memories?"
   subheader="Product thesis"
   url="temp/RELIVE.mp4"
   caption=""
   aspect="1by1"
   loop=false
   controls=true
   style="lg"
%}

{% include p-section.html
   content="
> Take a video. Step inside. Enhance forever.

**Immersive media is incredibly compelling, even more when it is your own memories.** I saw where the tech was going, in part from my time at Samsung, but no one was tacking the hard problem. Companies were going after high-end multi-camera rigs, or static photogrammetry, or wholly generated 2D video.

Wist's unique perspective and challenges were

1. **Dynamic, living memories.** A memory must be as alive as the original moment. Not static photogrammetry scans or flat media.
1. **As easy as taking a video.** Just capture or import. We must match what people already do. The tech does the hard part.
1. **Continuous improvement.** Every capture must be able to be reprocessed with our latest version to enhance the reconstruction.

**And, I was about to have my first kid.** 
"
%}



{% include media-img-xl.html
   url="temp/vivaldi/birth.jpg"
   caption="**Every moment is special**, from first heartbeats to first breaths to first laughs to first steps."
%}


{% include p-section.html
   header="Accolades & praise"
   url=""
   caption=""
   content="
**User feedback**
> \"It's much more immersive than watching the apple spatial videos.\"

> \"Even though it was something I had recorded only minutes ago, it nearly brought tears to my eyes.\"

**Covered in media**<br>Interviews in [Vice/Motherboard](https://www.vice.com/en/article/wist-app-relive-memories-vr/), [This Week in Startups](https://www.youtube.com/watch?v=TZlK7Ee84sI&t=1540s), [The Pitch](https://www.thepitch.show/122-wist-the-killer-use-case-for-vr), [Freethink](https://www.freethink.com/ar-vr/vr-app), [Upload VR](https://www.uploadvr.com/wist-delivers-minority-report-memory-replay/), and [XR AI Spotlight](https://www.xraispotlight.com/how-to-capture-and-relive-memories-in-3d-without-a-vision-pro/).
"
%}

{% include p-section.html
   url="temp/first-sight-sm.jpg"
   caption="Wist used in the production of \"First Sight\"."
   content="
**Used in short film**<br>
Worked with Andrew McGee (director) to create a version of Wist that could be used on set to replace some VFX work. [See the film.](https://www.youtube.com/watch?v=URDjsHupqUM)

"
%}

{% include p-section.html
   header="A founder does everything"
   content="
**My roles: Founder + CEO, Designer, Engineer.**

I led the company from research prototypes through product development, fundraising, and ultimately through shutdown. 

We grew to four at our height, a cross-functional team. I operated across design, engineering, product, and R&D, building the core tech while defining product direction.

**Key responsibilities**

- Defined product vision, roadmap
- Raised ~$1M from VCs and angels (lead: [Long Journey Ventures](https://www.longjourney.vc))
- Hired and led a small, highly technical team
- Led design, eng, product, and R&D across mobile, headsets, and backend systems
- Designed core UX + interaction models
- Built significant portions of the product across all surfaces
- User research and metrics

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
   url="temp/ux-flow.jpg"
   caption="**Wist flow.** Capture or import. Process on device and enhance in the cloud. Relive in headset or on mobile."
%}

{% include p-section.html
   header="Capture feels familiar"
   headerClassTag="h3"
   content="

<!-- ### Capture feels familiar -->

> A futuristic camera in our iOS app that feels like a native camera. 

Each capture records video + depth + camera pose + intrinsics, all at 30-60fps. We directly encoded into an internal format that preserves a higher depth range and helps playback.

Users could also import 2D video for a \"spatial upconversion\".
"
%}

{% include media-img.html
   url="capture2-low.mp4"
   caption="**Capturing** feels like video. We use a depth effect at camera init to hint at the difference between Wist and other camera apps."
   url2="bento-sm/import.jpg"
   caption2="**Importing** is delightfully unremarkable. The output is what is special."
   style="lg"
%}


{% include p-section.html
   header="Processing enhances captures"
   content="
<!-- ### Processing enhances captures -->

<!-- It must feel automatic, easy, and out of the way of capturing and staying in the moment. -->

> A mix of on device and cloud pipeline that reconstructs dynamic spatial scenes from in-the-wild videos.

Our system combined:
- Video
- LiDAR depth (if available)
- Camera pose + intrinsics (if available)
- ML and CV based depth estimation, segmentation, optical flow, +

into an internal format that could capture, encode, and play at 30+fps.

#### On device
"
%}

{% include media-img.html
   url="temp/feature-walkthrough-photos/exports/v0.7.0-sync.jpg"
   caption=""
   style="md"
%}

{% include p-section.html
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
   caption="Generating different channels of data (depth, flow, segmentation) allowed us to better rectify the final sequence."
   url2="temp/wall-temp/Screenshot 2024-06-26 163446.png"
   caption2="Visualization was critical to ensure our prototyping was improving the solve."
   style="lg"
%}

{% include p-section.html
   content="

We integrated multiple computer vision ML models (depth estimation, camera pose + intrinsics estimation, segmentation, optical flow). We created model and data specific rectification layers and traditional CV techniques to improve temporal coherence and reduce artifacts. 

One example: **LiDAR data is low resolution and highly flickery while ML depth estimation may be higher resolution, but lacks the same metric accuracy.** We figured out how to resolve the real world depth sequence from a plethora of data sources, including the two depth sources.

<!-- 

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

Each step had particular consideration for the qualities of our data (handheld, in-the-wild, monocular video) and the peculiarites of the model or CV technique. -->

<!-- ### Playback brings you back to a moment -->

"
%}
{% include media-video.html
   header="Playback brings you back to a moment"
   subheader="Quest, Vision Pro"
   url="relive-with-me-low.mp4"
   caption="**Video.** Really be there again in a headset for the most powerful experience. On Quest and Vision Pro."
   aspect="1by1"
   loop=true
   controls=true
   style="lg"
%}

{% include p-section.html
   content="

**Headset apps** reproject memories back into the user's space. We took a lot of care around:

**Focused UI** that prioritizes reliving moments over navigation

**Visual styling** that plays the moment vividly and leans into user notions of \"memory viewers\" from sci-fi media (including the artifacts)

**Space specific considerations** for how the reprojected media intersects a user's space and their varied intentions while using the app
    - Getting closer to the capture position fades in the culled edges
    - Grabbing the memory pauses it and crops in the boundaries of it
    - Fluid transitions and looping
"
%}
{% include media-img-wall.html
   data=site.data.imgwall.wist-playback
%}

{% include p-section.html
   header="iOS app playback"
   content="

**iOS app playback** looks like regular video at first. It was tricky to balance a feeling of \"this is familiar\" with \"this is giving me way more\".

"
%}
{% include media-video.html
   url="temp/wist-spatial-scrubbing.MOV"
   caption="**Spatial scrubbing**: scrubbing the playback position changes how the scene camera follows the original camera position, helping the user understand the depth of the scene."
   aspect="16by9"
   loop=true
   controls=false
   autoplay=true
   style="lg"
%}

{% include media-video.html
   url="temp/wist-v0.8.7-maintain-up.mp4"
   caption="**Always up**: with a known world orientation frame, a shaky camera gets correctly oriented each frame."
   aspect="16by9"
   loop=true
   controls=false
   autoplay=true
   style="lg"
%}

{% include p-section.html
   content="


**Smoothing details**: lots of tuning went into how the elements of the scene hierarchy follow each other smoothly, and how those intersect continuously with the user\'s actions.

**Modeless interaction**: users can drag-to-orbit or tilt their phone to see around a scene. Our camera system allows for continuous and softly constrained influence from various sources without locking the user into a mode.

**Remote play**: to help folks sharing their content in the same space. One user can trigger a memory from their phone while a second user is in the headset.

"
%}


{% include media-img-xl.html
   url="temp/vivaldi/living-room.jpg"
   caption="Spatial playback allows for perfect realignment with the real world."
%}



{% include p-section.html
   header="Tradeoffs & challenges"
   content="

**My critical responsibility was figuring out what can we do today that gets us to tomorrow.**

With a tiny team, each item we worked on meant not working on 20 others. We had to be intentional about what we pursued, which fires we left burning, and what would get us to the next step.

**Easy**, relatively, to know our unique angle: dynamic memories, captured from a phone (optionally with LiDAR), feels like taking a video, just works. 

**Hard**, building the 1,000 parts that lives up to that vision.

My cofounder and I built the scaffolding early (core UX, encoding format, backend processing pipeline), allowing us to improve without changing our architecture. 

"
%}

{% include wist-year-challenges.html %}

{% include p-section.html
   content="


#### Trials

Each of these could be its own talk.

- How can you express depth on a flat screen in an additive way, not distracting from the content?
- How can you encode depth and other data into the video stream in a way that maintains quality?
- How can you market a real spatial app in a world of generated videos?
- Should we increase quality or go after more users?
- Should we focus on one headset or multiple? How do we balance consistency with experimentation?
- Should we hire a CV lead or continue as a smaller team? Which gets us more traction and runway?
- Should we focus on one media type (video) or many (photo, scans, audio, text)?
- How do we present viewing options that allow for specific use cases without distracting from the core experience of reliving memories?

"
%}


{% include media-img-wall.html
   data=site.data.imgwall.wist
%}

