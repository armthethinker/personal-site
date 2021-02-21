---
layout: project-page
pID: 1
title: Samsung
description: Almost all of my work is under NDA. Here I share my general approach to spatial computing challenges (some of which is at Samsung) and personal 3D design work.
image: /assets/img/samsung/orb-1.jpg
assetURL: /assets/img/samsung/
modelURL: /assets/models/samsung/

---

{% include p-section.html
   header=""
   subheader=""
   content="<div class='alert alert-warning'>Since my NDA prohibits me from talking about what I do exactly, this page shares high level details about my Samsung work plus more details about my personal spatial computing work.</div>
"
%}

{% include p-section.html
   header="The general problem I solve"
   subheader=""
   content="> Spatial computing is an entirely new medium. I figure out how to make it more human.

   **I create novel interactions and product strategies.** I think beyond our current black rectangles. I figure out how to meet or overcome our constraints. I design for moving targets and design for various device capabilities simultaneously.

   **It's a new medium and I have a moral duty to help make it a good one.** There are few opportunities – if any – in your career to help shape the direction of a new medium. Each new medium presents new opportunities and challenges to humanity. I do what I can to create more opportunities in spatial computing than challenges.

   **Everything is challenging and ambiguous.** While the high-level design principles are the same in spatial computing, there aren't clear answers for any particular problem. Each decision requires investigation. And, I've had to learn new tools to ideate and build spatial products.
"
%}

{% include media-youtube.html
   header="XD Immersive talk"
   subheader="A pretty good overview of what I work on and how I think about spatial design"
   urlCode="Mtff419uLe8"
   caption="From 2D to 3D product design: a kinda personal journey. (~25min)"
   style="md"
   aspect="16by9"
%}

{% include p-section.html
   content="
**First**, this talk showed how high level design principles don't change when working on spatial computing problems (e.g. Neilson's usability heuristics, Case's principles of calm technology, Rams' principles for good design, Maeda's laws of simplicity).

**Second**, I walk through the new constraints and a sample critique of an AR mockup.

**Lastly**, I close with a few pointers on how to transition from 2D design into a 3D design career.
"
%}

{% include p-section.html
   header="My team"
   subheader=""
   content="
**My team is the XR Design Group (XRDG).** We work under MPS Lab under Samsung Research America (SRA). Together, we find meaningful ways to build future facing technologies.

**Our core team consists of around eight designers and engineers** (though we collaborate with teams across Samsung). We all participate in the entire design and development process, but focus on own specialties. Our tight collaboration leads us to better solutions.

**I am the most senior product designer**, though not the most senior designer (that honor would go to one of the two artist-engineers on our team from the games industry).
"
%}

{% include media-youtube.html
   header="My role"
   subheader="And characteristic work"
   urlCode="cmkxEeIM2Sc"
   caption="With spatial displays and the proper imaging pipeline, sonograms could look like x-rays."
   style="lg"
   aspect="16by9"
%}

{% include p-section.html
   content="
Sometimes AR examples are limited to things we can already do well on flat devices. My work tries to go beyond these simple examples – into experiences we can only have with spatial computers.

Here's the process my team usually goes through for a project:
"
%}

{% include cards.html
   data=site.data.samsung.typesOfWork
   col="col-12 col-md-6 col-lg-4"
   imgBottom=true
%}

{% include p-section.html
   header=""
   subheader=""
   content="

### Responsibilities

> There are many ways to create bad spatial computing experiences. My responsibility is to figure out what will resonate with users – while guiding and with my team.

**Priorities & vision**: Through my years of work before and at Samsung, I've developed specific principles for what AR and VR can and should be. These guide my decisions and help to set the team's vision.

I work with my manager to set priorities for the team, arguing for directions that would have the highest returns on investment.

**Design & process**: I'm still an individual contributor, so I work on ideation, mockups, prototypes, and user research.

I guide the team to produce high quality work from the design side. This means contributions to what we should continue to explore, what's ready to prototype, which tradeoffs should be made so we can meet our deadlines, and working with engineering to figure out implementation details.

**Documentation**: I lead our documentation efforts (writing, editing, crafting the story, presenting). This also makes me a go to person for any of our historical work. Before our switch to a more collaborative tool, I created a custom website to showcase our documentation, design decisions, and ideations.

**Presenting & collaborating**: I talk about our work to other teams and external partners. I also present to a number of lab heads, VPs, SVPs, Presidents, and once I presented to a group of Korean Congresspeople.

**Patents**: I've produced [four+ spatial design patents](#patents) that are working their way through the USPTO.

**Mentoring**: I'm there for my teammates when they a hand thinking about a spatial design problem or how to navigate Samsung.
"
%}



{% include media-img-wall.html
   data=site.data.imgwall.samsung
%}

{% include media-video.html
   url="tent-photogrammetry-5Mbps.mp4"
   caption="**Video.** When a project needed a tent model and I happened to be learning photogrammetry, I captured and processed my tent for use."
   aspect="16by9"
   loop=true
   controls=true
%}

{% include model-viewer.html
   model="tent-photogrammetry/tent-photogrammetry.glb"
   modeliOS="tent-photogrammetry/tent-photogrammetry.usdz"
   caption="**Model.** The final processed tent."
   cameraControls=true
   cameraOrbit="8deg 70deg 80%"
   cameraOrbitMax="auto 89deg auto"
   cameraTarget="0m .3m 0m"
   arPlacement="floor"
   interactionPrompt="auto"
%}

{% include p-section.html
   header="Tools & skills for spatial prototyping"
   subheader=""
   content="
**UX design**
- Maquette, Tvori, Tilt Brush, Blocks, Quill (AR/VR design tools)
- Sketch, Figma, Adobe Creative Suite, Framer Classic, Procreate (2D design)
- User research (design, facilitate, analyze)

**AR/VR Prototyping, 3D Modeling**
- Blender (modeling, texturing, procedural materials/shaders, 3D VFX compositing)
- Unity (interactions, MRTK)
- Depthkit, Meshroom, Polycam, Record3D (volumetric capture, photogrammetry)
- A-Frame (webVR)

**Other**
- Identifying key opportunities through design experimentation and prototyping
- Design+prototyping team management
- Video production showcasing XR prototypes and use cases
- HTML, CSS, JS
- Familiar with most AR/VR HMDs and their UX patterns
"
%}

{% include patents.html
   data=site.data.samsung.patents
   header="Patents"
   subheader="All while at Samsung Research America"
   col="col-12 col-sm-6"
%}

{% include p-section.html
   header="Other work"
   subheader=""
   content="
For other examples of my spatial computing work, you can look at [Humane Virtuality](/projects/humane-virtuality.html) and [Moral Decisions & Haptics in VR](/projects/moral-decision-making-haptic-feedback-in-virtual-environments.html) as well as my sporadic [YouTube uploads](https://www.youtube.com/user/arm156291/videos).
"
%}
