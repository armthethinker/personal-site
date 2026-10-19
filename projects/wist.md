---
layout: project-page
pID: 1
title: Wist
description: Founded a spatial computing company that turned video into immersive, replayable memories across iOS, Quest, and Vision Pro. Raised ~1M. Built the team. Designed and developed the volumetric capture, processing, and playback stack that processed over 8,800 memories and 18,600+ waitlist sign ups.
image: /assets/imgopt/wist/couch2-low-poster.jpg
assetURL: /assets/imgopt/wist/
modelURL: /assets/models/wist/

---


{% include text-big.html
   primary="Capture & relive memories spatially"
   secondary="just by taking a video"
%}




{% include cards.html
   data= site.data.wist.flow
   col="col-12 col-lg-4"
   colsub="col-12 col-md-6 col-lg-12"
   fullWidth=true
%}

<!-- 
{% include card-big.html
   fullWidth=true
   emoji="🤳"
   title="Take a video"
   subtitle="Capture immersive moments easily in Wist, just by taking or importing a video."
   url="capture2-low.mp4"
   aspect="1by1"
   skip=true
%} -->



{% include text-big.html
   secondary="Stop watching. Start reliving."

%}



{% include media-video.html
   url="temp/RELIVE-sm.mp4"
   caption="**Press play ⤴**"
   aspect="9by16"
   loop=false
   autoplay=false
   controls=true
   style="xl"
   maxHeight="70vh"
%}

{% include p-section.html
   header="Why immersive memories?"
   subheader="Product thesis"
   content="
<!-- > Take a video. Step inside. Enhance forever. -->
> \"Even though it was something I had recorded only minutes ago, it nearly brought tears to my eyes.\" – User

**Immersive media is incredibly compelling, even more when it is your own memories.** I saw where the tech was going, in part from my time at Samsung, but no one was tacking the hard problem. Companies were going after high-end multi-camera rigs, or static photogrammetry, or wholly generated 2D video.

Wist's unique perspective and challenges were

1. **Dynamic, living memories.** A memory must be as alive as the original moment. Not static photogrammetry scans or flat media.
1. **As easy as taking a video.** Just capture or import. We must match what people already do. The tech does the hard part.
1. **Continuous improvement.** Every capture must be able to be reprocessed with our latest version to enhance the reconstruction.

**And, it was personal: I was about to have my first kid.** 
"
%}

{% include media-img-xl.html
   url="temp/vivaldi/birth.jpg"
   caption="**Every moment is special**, from first heartbeats to first breaths to first laughs to first steps."
%}

{% include p-section.html
   header="What I built & led"
   subheader="Forest & the trees"
   url="team/team-together.jpg"
   caption="**Core team.** From left, me (Andrew), cofounder Mike Oder, and engineer Mark Kinoshita."
   content="

I led the company from research prototypes through product development, fundraising, and ultimately through shutdown. 

We grew to four at our height, a cross-functional team. I operated across design, engineering, product, and R&D, building the core tech while defining product direction.

<!-- ## 🙋🏻‍♂️
As a **founder+CEO**
- Defined product vision, roadmap
- Raised ~$1M from VCs and angels (lead: [Long Journey Ventures](https://www.longjourney.vc))
- Hired and led a small, highly technical team
- User research and metrics

## 👨🏻‍🎨
As a **designer**
- Crafted new paradigms for interacting with spatial media
- Tuned interaction systems that were tuned to platform expectations (iOS, Quest, Vision Pro)

## 👨🏻‍💻
As an **engineer**
- Led CV/ML model and rectification methods implementation and orchestration 
- Led and built depth video sequence optimization, video encoding, shader development, user data backend, performance optimization, and interaction systems - across mobile, headsets, and multiple backends -->

<!-- > This kind of product requires someone who can jump between roles, understanding the complex system of constraints. -->

<!-- > Jump into _any_ problem and either solve it or find new contraints. -->

I wore many hats and used all the tools in my toolbox.

#### Founder+CEO 🙋🏻‍♂️
- **Defined** product vision, roadmap
- **Raised** ~$1M from VCs and angels (lead: Long Journey Ventures)
- **Hired** and led a small, highly technical team
- **Led** user research and metrics
- **Filmed** and edited content for social media

#### Designer 👨🏻‍🎨
- **Crafted novel UI paradigms** for spatial content on headsets and on mobile
- **Created** beautiful experiences, focused on what matters
- **Tuned implementations** to run smoothly without sacrificing vision

#### Engineer 👨🏻‍💻
- **Built novel UI paradigms** for spatial content on headsets and on mobile
- **Built and led** video encoding, shader development, user data backend, performance optimization, and interaction systems - across mobile, headsets, and multiple backends

#### CV/ML Researcher 👨‍🔬
- **Researched** novel ways of rectifying temporal depth data
- **Built and led** dynamic volumetric reconstruction pipeline, integrating sensor and ML data sources
- **Tested and deployed** constellations of open source CV/ML models
- **Invented** data encoding method

#### Tools 🧰
"
%}



<!-- 
{% include cards.html
   data= site.data.wist.roles
   col="col-12 col-lg-6"
   markdownify=true
%} -->


{% include skills.html 
   section=true
%}



{% include media-video.html
   url="Couch2-lowbitrate.mp4"
   caption=""
   aspect="16by9"
   loop=true
   autoplay=true
   controls=false
   style="xl"
   header=""
%}

{% include p-section.html
   header="Product"
   subheader="It has to be easy and just work"
   content="

> Wist was a spatial media platform that turned video into relivable, dynamic, volumetric moments.

My guiding vision was that Wist **must be as easy as taking a video and putting on a headset**. We must work with existing capture/viewing patterns, especially for our key users: parents. Anything spatial or novel must be additive, not distracting or gimmicky.

**Wist has four parts**
1. **iOS app** for capturing, importing, browsing, and reliving memories (in spatial viewer or augmented reality)
2. **Quest, Vision Pro apps** for browsing and reliving memories volumetrically.
3. **Cloud enhancement pipeline** for improving capture sequence reconstruction quality.
4. **Data backend** for user data, metrics, syncing, auth.

"
%}

{% include media-img.html
   style="lg"
   url="temp/ux-flow.jpg"
   caption="**Wist flow.** Capture or import. Process on device and enhance in the cloud. Relive in headset or on mobile."
   extraImgClasses="img-xl-contained"
%}

{% include media-img.html
   style="lg"
   url="temp/ux-flow-ios.jpg"
   header="iOS"
   subheader="Capture, browsing, & playback"
%}



{% include p-section.html
   content="

#### Spatial capture that feels like video

Each capture records video + depth + camera pose + intrinsics, all at 30-60fps. We directly encoded into an internal format that preserves a higher depth range and helps playback.

Users could also import 2D video for a \"spatial upconversion\".
"
%}

{% include media-img.html
   url="capture2-low.mp4"
   caption="**Capturing** feels like video. We use a depth effect at camera init to hint at the difference between Wist and other camera apps. Dismissable. Hints at depth capture. Surfaces most important camera performance notices (e.g. phone is hot)."
   video=true
   aspect="1by1"
   url2="bento-sm/import.jpg"
   caption2="**Importing** is delightfully unremarkable. The output is what is special."
   style="lg"
%}



{% include p-section.html
   content="

#### Beyond 2D playback on flat screens
It was tricky to balance \"this is familiar\" and \"this is giving me way more\". My design principle was that **any effects, including depth, must be additive**.

"
%}



{% include media-video.html
   url="temp/wist-spatial-scrubbing.MOV"
   caption="**Spatial scrubbing**: scrubbing the playback position changes how the scene camera follows the original camera position, helping the user understand the depth of the scene. Smoothness comes from our work on smoothing our 3D camera positioning math."
   aspect="16by9"
   loop=true
   controls=false
   autoplay=true
   style="lg"
%}

{% include media-img.html
   style="md"
   captionSide=true
   url="temp/features/player-details/layers.jpg"
   caption="**Re-rendering the 3D scene.** By rendering from a new camera position, smartly coupled to the capture position, I was able to create smoother playback; enhance parallax perception; and blend inputs from device orientation, touch events, and the original camera poses."
   aspect="1by1"
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


#### Other iOS details

"
%}

{% include media-img.html
   style="lg"
   captionSide=false
   url="temp/features/your-memories.jpg"
   caption="**Feed.** Elevation is used to give prominence to memories and capture button, communicated via soft shadow layers. Swipe to featured or favorites. "
   aspect="1by1"
   url2="temp/features/auto-export.jpg"
   aspect2="4by3"
   caption2="**Auto export.** To decrease switching costs, Wist automatically exported 2D videos to the user's camera roll."

%}


{% include media-img.html
   style="md"
   captionSide=true
   url="temp/features/player-details/ui.jpg"
   caption="**Viewing UI details.** Feels like regular video player until playing shows depth parallax. UI is available, though muted against content. Menus fade without interaction. Content blurs near device bounds via variable blur shader."
   aspect="1by1"
%}


{% include media-img.html
   style="lg"
   url="temp/onboarding/onboarding-combined-stacked.jpg"
   caption="**Reduced time to magic during onboarding.** Onboarding flow included skimmable feature cards, trying the 3D viewer with one of our featured memories, capturing or importing their first memory, and a instant camera inspired printing animation (and more). This helped users immediately feel the magic and ease of Wist. Then, when they sign in on a headset, their first memory is ready."
%}




{% include media-video.html
   header="Headsets bring you closer to a moment"
   subheader="Quest, Vision Pro"
   url="relive-with-me-low.mp4"
   caption="**Video.** Really be there again in a headset for the most powerful experience. On Quest and Vision Pro."
   aspect="1by1"
   loop=true
   style="lg"
   autoplay=true
%}


{% include p-section.html
   content="
   
There is an interplay between what we can build, what is performant, and what users expect from sci-fi media.

**Headset apps** reproject memories back into the user's space, and if the user is in the same place as the capture, they can realign the virtual content with their real world.

**Playback-focused UI** prioritizes reliving moments over navigation and viewer options.

**Sci-fi insipired, but not distracting visual styling.** Critical that we play the memory vividly, lean into user notions of \"memory viewers\" from sci-fi media (including the artifacts), but we cannot let the styling get in the way of the moment.

**Space specific considerations** for how the reprojected media intersects a user's space and their varied intentions while using the app:
   - Getting closer to the capture position fades in the culled edges
   - Grabbing the memory pauses it and crops in the boundaries of it
   - Fluid transitions and looping

#### Other headset details

"%}


{% include media-img.html
   style="lg"
   captionSide=false
   url="details-menu-platform.jpg"
   caption="**Platform experimentation.** We shipped different interfaces to test interface variations, partially inspired by platform user expectations. Both had the core concepts: a focus on the memory itself; a small, grabbable player that expands to browse all memories; and deeper options hidden away."
%}


{% include media-img.html
   style="lg"
   captionSide=false
   url="temp/feature-walkthrough-photos/quest/icon-closeup.jpg"
   caption="**Quest UI soft shadows.** I pre-rendered the icon and a blurred version, which allowed us to fake realistic icon shadows. "
   aspect="16by9"
   aspect2="16by9"
   url2="temp/feature-walkthrough-photos/avp/browse-collapsed-closeup2.jpg"
   caption2="**Blur glow.** With the extra compute of the Vision Pro and ease of SwiftUI, the playing memory's card generates a blurred version of the thumbnail and blends it in as a glow behind the card."
%}

{% include media-img.html
   style="md"
   captionSide=true
   url="temp/feature-walkthrough-photos/quest/grab2.jpg"
   caption="**Grabbable memories.** Distinct yet intuitive gestures allow for quick, accurate, and forgiving repositioning. Grabbing pauses and fades the memory for a better mix of real and virtual content."
   aspect="4by3"
%}


{% include media-img.html
   style="md"
   captionSide=true
   url="temp/feature-walkthrough-photos/exports/featuresHighlights/person-highlighting@1x.jpg"
   caption="**Person highlighting.** A view option that hides non-person content, making it feel like the people are back in your space."

%}
{% include media-img.html
   style="md"
   captionSide=true
   url="details-expandable-menu.jpg"
   caption="**Collapsable browsing.** Skim captures in the player or expand the browsable area for more focused browsing."

%}



{% include p-section.html
   header="Processing enhances captures"
   subheader="On device & in the cloud"
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
   caption="**Background sync.** Syncing starts as soon as possible to reduce user wait times. Given privacy concerns with personal media, sync card is tappable with additional information about how media is synced across devices."
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
   caption="**Multi-source informed rectification.** Generating different channels of data (depth, flow, segmentation) allowed us to better rectify the final sequence."
   aspect="16by9"
%}
   <!-- url2="temp/visualization-merge.jpg"
   caption2="Visualization was critical to ensure our prototyping was improving the solve."
   style="lg" -->

{% include p-section.html
   content="

We integrated multiple computer vision ML models (depth estimation, camera pose + intrinsics estimation, segmentation, optical flow). We created model and data specific rectification layers and traditional CV techniques to improve temporal coherence and reduce artifacts. Models included Map Anything, Depth Pro, RAFT, FiLM, and more. 
"%}

{% include media-img.html
   style="lg"
   url="decks/enhance.jpg"
   caption="**Raw LiDAR depth to our enhanced output.** More detail is present without losing metric accuracy, and it is more temporally stable."
   url2="temp/frame_encoding.jpg"
   caption2="**Data packing into video frames.** We experimented with many frame encodings, including this where we pack many \"channels\" of data into a single frame of video. This unlocked higher quality playback by balancing compute and texture lookups, as well as preserving data fidelity through compression."
%}

{% include p-section.html
   content="
One example: **LiDAR data is low resolution and highly flickery while ML depth estimation may be higher resolution, but lacks the same metric accuracy.** We figured out how to resolve the real world depth sequence from a plethora of data sources, including the two depth sources.


I built a PyTorch-based optimization function that integrated the various data sources based on their unique qualities (e.g. far field LiDAR is low quality) and physical realism (e.g. 3D point movement 3D should have smooth acceleration).

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
   url="temp/rerun/rerun-ba-solve-trimmed-sm.mp4"
   caption="**Rerun visualization.** I frequently used Rerun to visually validate our pipeline modules. This is my pass at a bundle adjustment solver, an unfinished component I was developing at the end."
   aspect="16by9"
   loop=true
   autoplay=true
   controls=false
   style="lg"
   maxHeight="70vh"
%}




{% include media-img-xl.html
   url="temp/vivaldi/living-room.jpg"
   caption="Spatial playback allows for perfect realignment with the real world."
%}



{% include p-section.html
   header="Prototypes"
   content="
> Everything was a prototype until it shipped.
"
%}


{% include media-img-wall.html
   data=site.data.imgwall.wist
%}





{% include p-section.html
   header="Tradeoffs & challenges"
   content="

<!-- > The only way to navigate tradeoffs in a highly technical and experiential product like Wist is to know the opportunities and constraints across design, eng, product, and R&D. <br>**That's what makes me special.** -->

**My critical responsibility was figuring out what can we do today that gets us to tomorrow.** I used my background across design, eng, and product to find our way forward.

With a tiny team, each item we worked on meant not working on 20 others. We had to be intentional about what we pursued, which fires we left burning, and what would get us to the next step.

**Easy**, relatively, to know our unique angle: dynamic memories, captured from a phone (optionally with LiDAR), feels like taking a video, just works. 

**Hard**, building the 1,000 parts that lives up to that vision.

My cofounder and I built the scaffolding early (core UX, encoding format, backend processing pipeline), allowing us to improve without changing our architecture. 

"
%}



<!-- {% include wist-year-challenges.html %} -->

<!-- {% include p-section.html
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
%} -->

{% include challenges-knew.html %}


{% include p-section.html
   header="Accolades & praise"
   url=""
   caption=""
   content="
**User feedback**
> \"It's much more immersive than watching the apple spatial videos.\"

> \"Even though it was something I had recorded only minutes ago, it nearly brought tears to my eyes.\"

**Traction**
- 18,600+ waitlist sign ups
- 1,700+ users
- 8,800+ memories captured
<!-- - WoW traction TK -->

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



{% include media-img-xl.html
   url="temp/vivaldi/wife-son.jpg"
%}



{% include p-section.html
   content="
> The only way to navigate tradeoffs in a highly technical and experiential product like Wist is to know the opportunities and constraints across design, eng, product, and R&D. <br>**That's what makes me special.**
"
%}