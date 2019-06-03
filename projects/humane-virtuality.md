---
layout: project-page
pID: 3
title: Humane Virtuality
assetURL: /assets/img/humane-virtuality/
---
<h1>Table of contents</h1>

{% include p-section.html
   header="Problems"
   content="
   - **Big problem**: what are the best practices for UX design in VR and how should we prototype our designs?
   - **Small problems**: each one to two week long sprint starts with a question and follows with a design exploration, prototyping, and user testing.
   - Since I was the head of this experience, I had to allocate time and resources efficiently, ensuring that I got what I needed out of the internship.
   "
%}

{% include p-section.html
   header="My role"
   content="
   - **Captain of the ship**: 👨🏻‍✈️.
   - **UX Designer**: think, sketch, and define what each experience/experiment will be.
   - **Prototyper**: build the prototypes in JS using A-Frame, create tools that can be used in the future to speed up the prototyping process.
   - **User Researcher**: getting feedback is incredibly important, but given the experimental nature and “earliness” of many of the prototypes, a few user interviews is all I need.
   - **Writer**: accurately convey my work and insights to the greater design and development community.
   "
%}

{% include p-section.html
   header="Solutions & links to process work"
   content="I have since created six unique prototypes, most with available variations. Brief descriptions of each experiment are here, with links to either their case studies or journal entries for deeper explanations."
%}

{% include p-section.html
   header="Head tracked transformations"
   subheader="Experiment 1"
   content="**Guiding Question**: For headsets without positional tracking (e.g. Google Cardboard), can head rotations translate into position-like movements?

In this set of experiments, there are blocks in front of the user which transform based on the user’s head rotation.

<a href='https://medium.com/humane-virtuality/head-tracked-transformations-e7102d3c9789' target='_blank'>Case Study</a> \| <a href='http://armthethinker.github.io/webVR-experiments/#6-head-tracked-transformations' target='_blank'>Experiment</a>"
   url="00-demo-1.gif"
   caption="With this interaction mode, turning your head to the left, rotates the right side of the boxes towards you so that you may see the yellow doughnut otherwise hidden behind them."
%}

{% include p-section.html
   header="Product selection & customization"
   subheader="Experiment 2"
   content="**Guiding Question**: What can be learned by taking a design from the web and translating it into VR?

Here, I am looking at the prototyping differences with a mockup on a plane, a curved mockup, and a three dimensional mockup. Which method gives me the largest results with the smallest work?

<a href='https://medium.com/humane-virtuality/product-presentation-in-virtual-reality-28f98ca2eb9' target='_blank'>Case Study</a> \| <a href='http://armthethinker.github.io/webVR-experiments/#7-product-selection-customization' target='_blank'>Experiment</a>"
   url="ex-7-1.gif"
   caption="Curved mockups can be more pleasant than planar mockups because each point is equidistant to the user's eye. Additionally, minor depth cues can make an interface \"pop\". However, when viewing the scene from the monoscopic perspective of your development laptop screen, you can easily miss depth cues seen only with stereoscopic vision."
%}

{% include p-section.html
   header="Video controls"
   subheader="Experiment 3"
   content="**Guiding Question**: How do video controls change when the content is all around you in spherical videos?

This experiment continues the exploration of prototyping differences between a planar mockup, a curved mockup, and a volumetric mockup while also exploring designs for spherical video controls. Inspired by @oscarmarinmiro.

<a href='https://medium.com/humane-virtuality/hv-weekly-journal-3-8f25815711d6' target='_blank'>Journal</a> \| <a href='http://armthethinker.github.io/webVR-experiments/#8-video-controls' target='_blank'>Experiment</a>"
   url="hero-8.jpg"
   caption="We moved from physical controls on television sets, to remotes, to UIs in our browser windows. Now we need to explore what comes next."
%}

{% include p-section.html
   header="Solar system & SpaceVR simulator"
   subheader="Experiment 4 & 5"
   content="**Guiding Question**: What does it feel like to see earth from a satellite point-of-view?

After hearing a podcast on SpaceVR, I was inspired to create an experience based on their project. Their goal is to send a satellite into space which would capture spherical video people on the Earth could experience in VR.

I started by building a model solar system where I had a lot of control over where I could place the camera, yielding a set of viewpoints. However, I realized I was building something more complicated than I set out to do. So, I wrapped it up and re-started. For my second attempt, I had a clearer project in-mind: less robust, more to the point. It’s easier to build after you have a clear direction.

<a href='https://medium.com/humane-virtuality/hv-weekly-journal-4-6e8984a57d79' target='_blank'>Journal</a> \| <a href='http://armthethinker.github.io/webVR-experiments/#10-spacevr-simulator' target='_blank'>Experiment</a>"
   url="hero-10.gif"
   caption="The Earth from just above."
%}

{% include p-section.html
   header="Environmental traversal"
   subheader="Experiment 6"
   content="**Guiding Question**: What are the best ways to move in VR without position controls?

I created an ontology of over 20 ways to traverse environments in VR. Four and a half of these I prototyped: three simple methods (jump, fade, and animate) and one and a half complex methods (micro-movements, and a partially implemented rotate-into).

<a href='https://medium.com/humane-virtuality/environment-traversal-in-vr-bebc10417761' target='_blank'>Journal</a> \| <a href='http://armthethinker.github.io/webVR-experiments/#11-transitions' target='_blank'>Experiment</a>"
   url="ex11-animate-medium.gif"
   caption="My testing environment. The active traversal method is a smooth, linear animation between two points."
%}

{% include p-section.html
   header="Overall learnings"
   subheader=""
   content="It was my desire to use each experiment as a specific exploration, such that after many specifics, I may be able to generalize my design insights and prototyping expertise. In no specific order, they are as follows:

- Like other prototypes, have a good idea of what you’re building before you build. Go ahead and shift direction as you learn though.
- 3D models, especially ones from hand-written code, take time to make.
- Not all prototypes need 3D models.
- It’s über useful to have working knowledge of spherical and cylindrical coordinate systems.
- It’s useful to build a personal library of helper functions.
- User testing interaction experiments is more open-ended than testing robust apps. Think-alouds work well.
- Users get distracted. Let them know they were heard, then push them in the direction you are interested in.
- Given the state of consumer-awareness and experience, it’s likely you’re the first person to give your test users access to VR. Let them be amazed.
- Focus on what you’re testing. If the visual design isn’t important, use someone else’s work there.
- The world wraps around the user. Utilize all of it.
- A few settings variables and keyboard shortcuts exponentially speed up personal testing during development.
- You have a community. Use it and let them use you.
- Text with too much depth hurts legibility.
- Volumetric design tools geared towards UX work are highly limited, but opening quickly. Figure out your own best-practices.
- Small cursors on screens with low-pixel density tend to jump around.
- A few techniques used in different industries are starting to come together: cinematography, theater (especially stage design), and traditional UX.
- Sketch in 20 directions before choosing one to build."
%}

{% include p-section.html
   header="Why this?"
   subheader=""
   content="I’m a dual-degree master’s student at Carnegie Mellon University in the Human-Computer Interaction Institute. The specific program I’m in has a partnership with the Madeira Interactive Technologies Institute. We spend a semester at CMU, then two semesters in Portugal, separated by a one semester internship."
   url="program-breakdown2x.png"
   caption="The timeline and various locations of my master's program."
%}

{% include p-section.html
   content="I originally looked for UX design internships at VR companies and internships at R&D labs. It turns out that most VR companies are looking for full-time designers, not interns. I applied anyway, but to no avail. As the summer neared, I could either start applying for general and traditional UX design positions or I could forge my own path.

I decided that to get what I need out of an internship, it would be better for me to create my own."
%}

{% include p-section.html
   header="My four goals"
   url="learn-design-prototype-share2x-1.png"
   caption="Icons by Icon Island from the Noun Project."
   content="
**First, I will learn more software to help me express my ideas.** This was primarily JavaScript and a touch of Unity. Code in particular allows for a higher degree of flexibility than designed tools (though it is not without downsides). At this stage in the game, there are not better tools to work with for VR.

**Second, I will focus on creating humane designs.** I mean, this is really my role as a UX designer anyway, but it’s important to put some emphasis here. As we move into what is potentially the new dominant medium (spatial interfaces), and as we do this in the design-focused movement of the last few years, we should force great human design into our new applications (inspired by Bret Victor).

**Third, I will design through rapid interactive prototypes.** While apps and websites can easily be expressed on paper, spatial interfaces require prototypes that match its dimensionality. Additionally, I needed to get better at producing many prototypes to explore an idea (inspired by Linda Dong).

**Fourth, I will regularly share and interact with my greater communities.** Experimentation done in a vacuum is largely worthless. I’ve spent the last few months absorbing a great deal of knowledge from others working in the VR space. Because of their work, I start mine on more solid footing. Hopefully because of my efforts, others can start their work more easily. And, sharing regularly gives me a chance to refine my documentation skills."
%}
