---
layout: project-page
pID: 3
title: Humane Virtuality
assetURL: /assets/img/hv/
---
<h1>Table of contents</h1>

{% include p-section.html
   header="Context"
   subheader="My master's program had a summer off to do an internship"
   content="
When I was in my dual-degree master’s program at Carnegie Mellon University (CMU) and Madeira Interactive Technologies Institute (M-ITI), we spent a semester at CMU, then two semesters in Portugal, separated by a one semester internship.

**I didn't find an internship that would let me explore what I needed to, so I decided to create my own. I spent a few months researching core VR UX challenges in shorter, focused design sprints.**
"
   url="program-breakdown2x.png"
   caption="The timeline and various locations of my master's program."
%}

{% include p-section.html
   header="Problems & goals"
   content="
**The big question: \"What are the best practices for UX design in VR and how should we prototype our designs?\".** I went about answering it with one to two week long sprint starting with a question, followed by a design exploration, prototyping, and user testing. I needed to also allocate time and resources efficiently, to ensure I got what I needed out of my internship.

In my process, I had four goals:

1. **Learn more software to help me express my ideas.** <br>This was primarily A-Frame (JavaScript) and a touch of Unity.
1. **Focus on creating humane designs.** <br>I mean, this is really my role as a UX designer anyway, but it’s important to emphasize. As we move into humanity's next dominant medium (spatial interfaces), we should do everything we can to make it a good one. (Inspired by Bret Victor.)
1. **Design through rapid, interactive prototypes.** <br>While apps and websites can easily be expressed on paper, spatial interfaces require prototypes that match its dimensionality. Additionally, I needed to get better at producing many prototypes to explore an idea. (Inspired by Linda Dong.)
1. **Regularly share and interact with my greater communities.** <br>Experimentation done in a vacuum is largely worthless. My own work has been informed from other early explorers. Because of my public efforts, others can start their work more easily. And, sharing regularly gives me a chance to refine my documentation skills.

I ended up publishing weekly journals and a few case studies under my <a href='https://medium.com/humane-virtuality' target='_blank'>Humane Virtuality Medium publication</a>.
"
%}

{% include media-img-wall.html
   data=site.data.imgwall.humanevirtuality
%}

{% include p-section.html
   header="My role"
   content="
   - 👨🏻‍🎨 **UX Designer**: think, sketch, and define each experience/experiment.
   - 👨🏻‍💻 **Prototyper**: build the prototypes in JS using A-Frame, create tools that can be used in the future to speed up the prototyping process.
   - 🤔 **User Researcher**: getting feedback is incredibly important, but given the experimental nature and “earliness” of many of the prototypes, a few user interviews is all I need.
   - ✍️ **Writer**: accurately convey my work and insights to the greater design and development community.
   "
%}

{% include p-section.html
   header="Head tracked transformations"
   subheader="Experiment 1"
   content="**How can a user see around an object if their headset doesn't have positional tracking (e.g. Google Cardboard)?**

I build an environment with togglable elements and various interaction methods:

1. Rotate target with head rotation
1. Rotate target with head rotation _and_ scale the input (letting a user move a small amount to see behind the target)
1. Rotate target _inversely_ with head rotation and scale the input
1. For each abover method, toggle the target to be locked to the world or to a relative position from the user's head
"
   url="00-demo-1.gif"
   caption="With this interaction mode, turning your head to the left, rotates the right side of the boxes towards you so that you may see the yellow doughnut otherwise hidden behind them."
%}

{% include media-img.html
   url="ex6-sidebyside-direct-inverse.gif"
   caption="Two scaled interaction methods."
   style="lg"
   captionSide=false
%}

{% include media-img.html
   url="diagram-ut-setup1600w.png"
   caption="How I had to setup my devices to get meaningful data from user studies."
%}

{% include p-section.html
   content="Overall, users appreciated the interaction and scaling function, but didn't notice the difference between direct and inverse manipulation.

   <a href='https://medium.com/humane-virtuality/head-tracked-transformations-e7102d3c9789' target='_blank'>Case Study</a> • <a href='http://armthethinker.github.io/webVR-experiments/#6-head-tracked-transformations' target='_blank'>Experiment</a>"
%}

{% include p-section.html
   header="Product selection & customization"
   subheader="Experiment 2"
   content="**What can be learned by taking a design from the web and translating it into VR? Which design elements make it through the transition?**"
   url="ex7-1.gif"
   caption="
A 3D-ified mockup of a flat Dribbble mockup I ran across.
"
%}

{% include media-img.html
   url="ex7-grid.png"
   caption="A grid I used to test a helper function that would draw an image on a partial cylinder"
   style="lg"
   captionSide=false
   url2="diagram-binocular-disparity.png"
   caption2="A diagram I made to illustrate binocular disparity in my case study."
%}

{% include media-img.html
   url="diagram-cylinder-scale-position.png"
   caption="A diagram I made to illustrate how a feeling of depth can be constructed from a set of planes or cylinders."
   style="lg"
   captionSide=false
%}

{% include p-section.html
   content="Curved mockups can be more pleasant than planar mockups because each point is equidistant to the user's eye. Additionally, minor depth cues can make an interface \"pop\". However, when viewing the scene from the monoscopic perspective of your development laptop screen, you can easily miss depth cues seen only with stereoscopic vision.

   <a href='https://medium.com/humane-virtuality/product-presentation-in-virtual-reality-28f98ca2eb9' target='_blank'>Case Study</a> • <a href='http://armthethinker.github.io/webVR-experiments/#7-product-selection-customization' target='_blank'>Experiment</a>"
%}

{% include p-section.html
   header="Environmental traversal"
   subheader="Experiment 6"
   content="**What are the best ways to move in VR (especially if you only have a 3dof headset)?**"
   url="ex11-animate-medium.gif"
   caption="**Linear animation without easing.** Here, a user goes through all points between the start and end."
%}

{% include media-img-xl.html
   url="transition20-color.png"
   caption="I created an ontology of ~20 ways to traverse environments in VR. This early sketch allowed me to make better decisions about which methods I wanted build."
%}

{% include media-img.html
   url="ex11-jump.gif"
   caption="**Jump cut.** The user is instantly transfering between the start and end point. These are straightforward and comfortable, but can make the user lose context."
   style="md"
   captionSide=false
   url2="ex11-micromovements.gif"
   caption2="**Micromovements.** If jump cuts are the most comfortable, but make you lose context, what if the user went through a series of `n` jump cuts between the start and end points? I thought it was nifty, but the few people I tried it on thought the prototype was lagging."
%}

{% include p-section.html
   content="Four and a half of these I prototyped: three simple methods (jump, fade, and animate) and one and a half complex methods (micromovements, and a partially implemented rotate-into)."
%}

{% include p-section.html
   content="<a href='https://medium.com/humane-virtuality/environment-traversal-in-vr-bebc10417761' target='_blank'>Case Study</a> • <a href='http://armthethinker.github.io/webVR-experiments/#11-transitions' target='_blank'>Experiment</a>"
%}



{% include p-section.html
   header="Other experiments"
   subheader="The less interesting and/or unfinished works"
   content="
### Video controls
#### Experiment 3

**How do video controls change when the content is all around you (i.e. spherical videos)?**
"
%}

{% include media-img.html
   url="hero-8.jpg"
   caption="We moved from physical controls on television sets, to remotes, to UIs in our browser windows. Now we need to explore what comes next."
   style="md"
   captionSide=true
%}
{% include media-img.html
   url="critique-spherical@2x.jpg"
   caption="Cricially examining @oscarmarinmiro's video controls layout."
   style="md"
   captionSide=false
   url2="Screen Shot 2016-06-30 at 7.36.17 AM.png"
   caption2="My first pass put the controls right in fron of the user. This is uncomfortable because (1) the relaxed human eyeline is a few degrees down from horizontal and (2) it immediately gets in between you and the content (especially uncomfortable if you accidentally brought up the controls)."
%}

{% include p-section.html
   content="
This experiment continued my exploration of differences between a planar mockup, a curved mockup, and a volumetric mockup while also exploring designs for spherical video controls."
%}

{% include p-section.html
   content="
Inspired by @oscarmarinmiro.

<a href='https://medium.com/humane-virtuality/hv-weekly-journal-3-8f25815711d6' target='_blank'>Journal</a> • <a href='http://armthethinker.github.io/webVR-experiments/#8-video-controls' target='_blank'>Experiment</a>

### Solar system & SpaceVR simulator
#### Experiment 4 & 5

**What does it feel like to see earth from a satellite point-of-view?**
"
%}

{% include media-img.html
   url="hero-10.gif"
   caption="The Earth from just above."
   style="md"
   captionSide=true
%}

{% include media-img.html
   url="earth-3.png"
   caption="Before I applied the atmospheric effect to the Earth."
   style="md"
   captionSide=false
   url2="ex-9.gif"
   caption2="I started by trying to make the whole solar system, before I realized I should scope down more to just the Earth."
%}

{% include p-section.html
   content="
After hearing a podcast on SpaceVR, I was inspired to create an experience based on their project. Their goal is to send a satellite into space which would capture spherical video people on the Earth could experience in VR.

I started by building a model solar system where I had a lot of control over where I could place the camera, yielding a set of viewpoints. However, I realized I was building something more complicated than I set out to do. So, I wrapped it up and re-started. For my second attempt, I had a clearer project in-mind: less robust, more to the point.

<a href='https://medium.com/humane-virtuality/hv-weekly-journal-4-6e8984a57d79' target='_blank'>Journal</a> • <a href='http://armthethinker.github.io/webVR-experiments/#10-spacevr-simulator' target='_blank'>Experiment</a>

### Reality Editor
#### Experiment 7
"
%}

{% include media-img.html
   url="Screen Shot 2016-08-11 at 8.38.31 PM.png"
%}

{% include p-section.html
   content="
I concluded my internship by researching what was needed to create an effective and approachable VR creation tool – something between Sketch, Framer, and Unity.
"
%}

{% include p-section.html
   header="Overall learnings"
   content="Each experiment looked at a very particular VR UX problem. After working with enough specifics, I can generalize my design insights and prototyping expertise.

**Design**
- The world wraps around the user. Utilize all of it.
- Text with too much depth hurts legibility.
- Sketch in 20 directions before choosing one to build.
- Volumetric design tools geared towards UX work are highly limited, but opening quickly. Figure out your own best-practices.
- Small cursors on screens with low-pixel density tend to jump around.
- A few techniques used in different industries are starting to come together: cinematography, theater (especially stage design), and traditional UX.
- You have a community. Use it and let them use you.

**Prototyping**
- Like other prototypes, have a good idea of what you’re building before you build. Go ahead and shift direction as you learn though.
- 3D models, especially ones from hand-written code, take time to make.
- Not all prototypes need 3D models.
- It’s über useful to have working knowledge of spherical and cylindrical coordinate systems.
- It’s useful to build a personal library of helper functions.

**User studies**
- User testing interaction experiments is more open-ended than testing robust apps. Think-alouds work well.
- Users get distracted. Let them know they were heard, then push them in the direction you are interested in.
- Given the state of consumer-awareness and experience, it’s likely you’re the first person to give your test users access to VR. Let them be amazed.
- Focus on what you’re testing. If the visual design isn’t important, use someone else’s work there.
- A few settings variables and keyboard shortcuts exponentially speed up personal testing during development.
"
%}
