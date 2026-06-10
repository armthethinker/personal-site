---
layout: project-page
pID: 2
title: Samsung
description: Almost all of my work is under NDA. Here I share my general approach to spatial computing challenges (some of which is at Samsung) and personal 3D design work.
image: /assets/imgopt/samsung/orb-1.jpg
assetURL: /assets/imgopt/samsung/
modelURL: /assets/models/samsung/

---

{% include p-section.html
   content="<div class='alert alert-warning'>The work is obfuscated enough to comply with my NDA. Some personal work is shown that is characteristic of work done at Samsung.</div>
"
%}


{% include text-big.html
   primary="What should AR glasses be?"
   secondary="What, How, Why"
%}


{% include p-section.html
   header="The challenge"
   content="
> Make spatial computing work for real humans in an environment with rapidly changing constraints.


At the time, Samsung was figuring out what kinds of products could exist. Many teams were focused on semi-isolated technical problems. 

My group focused on finding real value and validating that with prototypes, across interactions, apps, and the operating system. 

**Our work shaped the trajectory of Samsung's spatial products, a precursor to Galaxy XR.**

#### Core focus
**A new \"responsive design\"** where spatial content is responsive to a user's distance and the user's context.

**How to cohesively unite interaction and representation systems like:**
   - Mixed user representations: avatar, volumetric video, flat video
   - Mixed content: meshs, flat windows, flat stickers, interactive
   - Mixed and extensible device interaction systems: AR glasses (with varying capabilities), mobile phones

**Extensible/flexible designs that adapt to hardware and OS capabilities.** \"The device\" was actually a slew of potential devices, internally and with external partners.

**Spatial design systems that are cohesive, opinionated, and extensible.** For instance, we may define a default behavior at the OS that can be modified by an app or user settings. This becomes more complex when the computing environment is also the user's real world, expected to have multiple apps running at once.

And generally, **finding the details that must be solved for true everyday use**, not just the surface level work seen in marketing. What can we only do with spatial computers?




<!-- **I created novel interactions and product strategies.** I think beyond our current black rectangles. I figure out how to meet or overcome our constraints. I design for moving targets and design for various device capabilities simultaneously.

**It's a new medium and I have a moral duty to help make it a good one.** There are few opportunities – if any – in your career to help shape the direction of a new medium. Each new medium presents new opportunities and challenges to humanity. I do what I can to create more opportunities in spatial computing than challenges.

**Everything is challenging and ambiguous.** While the high-level design principles are the same in spatial computing, there aren't clear answers for any particular problem. Each decision requires investigation. And, I've had to learn new tools to ideate and build spatial products. -->
"
%}





{% include p-section.html
   header="Patents"
   subheader="The work was mysterious & important"
   content="

> Patents hint at the product work I was tackling.

10+ submitted. 9 granted.



"
%}
{% include patents.html
   data=site.data.samsung.patents
   col="col-12 col-lg-6"
%}

{% include p-section.html
   header="My role"
   content="

I was a Team Lead and Senior Designer. I worked in and led the XR Design Group (XRDG), a group of designers and engineers who worked to understand what could be created with AR glasses and how.

**As an AR/VR Team Lead:**
- Demonstrated vision to executives, partners, and visiting dignitaries through conversations, presentations, and demos.
- Created and managed the process that let us quickly explore the possibility space going from ideas, rapid prototypes, high production prototypes, and video documentation. 
- Led and supported hiring process.

**As a spatial designer & prototyper:** 
- Led investigations across operating system, apps, and interactions.
- Collaborated on prototypes (Unity/C#) and user studies, de-risking explorations.
- Bridge design and engineering in a context where device capabilities were often changing.
- Built internal documentation to catalog our work.
- Submitted 10+ patents.

<!-- **As a Team Lead**
- **Priorities & vision**: Through my years of work before and at Samsung, I've developed specific principles for what AR and VR can and should be. These guide my decisions and help to set the team's vision. I work with my manager to set priorities for the team, arguing for directions that would have the highest returns on investment.
- **Set/negotiate scope**: What we should continue to explore, what's ready to prototype, which trade offs should be made so we can meet our deadlines, and working with engineering to figure out implementation details.
- **Presenting & collaborating**: I talk about our work to other teams and external partners. I also present to a number of lab heads, VPs, SVPs, Presidents, and once I presented to a group of Korean Congresspeople.
- **Mentoring**: I'm there for my teammates when they are thinking through spatial design problems or figuring out how to navigate Samsung.

**As a Senior Designer**
- **Design & prototype**: Ideation, mockups, prototypes, and user research. I used any tool that helps us answer core questions quickly and effectively.
- **Documentation**: I lead our documentation efforts (writing, editing, crafting the story, presenting). This also makes me a go to person for any of our historical work. Before our switch to a more collaborative tool, I created a custom website to showcase our documentation, design decisions, and ideations.
- **Patents**: I've produced at least 10 patents around spatial computing. -->
"
%}

{% include p-section.html
   header="Exploration process"
   subheader="Or, how to find diamonds"
   content="
**One of my largest contributions was creating a new rapid iteration process that let us experiment both wide and deep**, as part of our partnership with a group in HQ and external partners.

It had three goals
1. **Give the team time to explore wide.** Narrow focus too early will trap us in a local optimum.
1. **Give the team time to explore deep.** Shallow work risks giant unknowns.
1. **Jointly answer UX, engineering, and product questions.** Isolated tracks will never find the true opportunities and constraints.


#### Process components
Depending on the timeline and problem we were addressing, we could shift time between components.
"
%}

{% include cards.html
   data=site.data.samsung.typesOfWork
   col="col-12 col-md-6 col-xl-4"
   aspect="16by9"

%}




{% include media-youtube.html
   header="Characteristic work"
   subheader="A mix of Samsung & personal work"
   urlCode="cmkxEeIM2Sc"
   caption="With spatial displays and the proper imaging pipeline, sonograms could look like x-rays. (Personal work that is representitive of early concepting I would do at Samsung.)"
   style="md"
   aspect="16by9"
   content="
> Almost everything shown in these patent images were built by me and the team.   
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
   header="Tools used"
   content="

> Whatever answers critical questions at the right fidelity to de-risk our next steps.

I might render an idea quickly in Blender or spend a few days tuning an interaction system to feel just right. 

Most projects ended with very high fidelity multi-device prototypes and a video showcasing the what and why.

**UX design**
- Maquette, Tvori, Tilt Brush, Blocks, Quill (AR/VR design tools)
- Sketch, Figma, Adobe Creative Suite, Framer Classic, Procreate (2D design)
- User research (design, facilitate, analyze, largely qualitative)

**AR/VR Prototyping, 3D Modeling**
- Blender (modeling, texturing, procedural materials/shaders, 3D VFX compositing)
- Unity (interactions, MRTK)
- Depthkit, Meshroom, Polycam, Record3D (volumetric capture, photogrammetry)
- A-Frame (webVR)

[(My current stack →)](/#how)

"
%}

{% include media-youtube.html
   header="Other work"
   urlCode="Mtff419uLe8"
   caption="**XD Immersive presentation**: From 2D to 3D product design. What changes and what stays the same in a spatial context? (~25min)"
   style="md"
   aspect="16by9"
%}

{% include p-section.html
   content="

<!-- **First**, this talk showed how high level design principles don't change when working on spatial computing problems (e.g. Neilson's usability heuristics, Case's principles of calm technology, Rams' principles for good design, Maeda's laws of simplicity).

**Second**, I walk through the new constraints and a sample critique of an AR mockup.

**Lastly**, I close with a few pointers on how to transition from 2D design into a 3D design career. -->

For other examples of my spatial computing work, you can look at [Humane Virtuality](/projects/humane-virtuality.html) and [Moral Decisions & Haptics in VR](/projects/moral-decision-making-haptic-feedback-in-virtual-environments.html) as well as my sporadic [YouTube uploads](https://www.youtube.com/user/arm156291/videos).
"
%}

<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<script nomodule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>