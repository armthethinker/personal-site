---
layout: project-page
pID: 4
title: Moral Decisions & Haptics in VR
---

<h1>TABLE OF CONTENTS</h1>

FEATURED IN WALL STREET JOURNAL

{% include p-section.html
   header="Problem"
   subheader=""
   content="The Trolley Problem is a classic thought experiment in philosophy. Imagine a trolley or train car is speeding down a hill, out of control, towards a group of five people. You, standing near the tracks, see a lever that would switch the trolley onto new tracks where one person would die.

The “fat man” variant has a similar setup. Instead of a lever to flip, you are standing on a bridge over the tracks next to a sufficiently large man. If you push this man over the railing, he will fall on the tracks, stop the train, and die. Pushing and killing him would save five people.

Our experiment, the Elevator Problem, uses a worker on an elevator dropping towards an electrified floor. If the participant pushes a worker that is standing in front of them, the workers on the elevator won’t die. This is an isomorph of the Trolley Problem: a scenario that is categorically equivalent, but looks different. We specifically explored the different moral and physiological response between a haptic and non-haptic group. Haptic participants feel the person they are pushing with their hands whereas non-haptic participants do not. Additionally, we had a third group whose scenario used a two buttons to control the decent of an elevator with four workers and one with one worker (more similar to the lever-based Trolley Problem)."
%}

{% include media-youtube.html
   header="Results"
   urlCode="D4AIKfFNS3c"
   caption="This video shows our setup process as well as our experience. (The poor recording quality is due to our laptop’s limited resources. Participants saw a higher resolution version.)"
   aspect="16by9"
%}

{% include p-section.html
   content="Non-haptic participants pushed the worker 55% of the time. Conversely, haptic participants pushed the worker 30% of the time. Using Fisher’s exact test, we find the difference between the haptic and non-haptic groups to be significant at p≤.05 (p=.0014). **Thus, participants were significantly more likely to push a person to their death if they did not feel that person against their hands.**"
%}

{% include p-section.html
   url="https://source.unsplash.com/1600x900/?neon"
   caption="Moral decisions across groups."
   content="Participants in the haptic and non-haptic groups both experienced an increasing heart rate as the experiment progressed (data was normalized in-group). Lever group participants’ heart rate did not change to the same degree, though this may be due to other factors."
%}

{% include media-img-xl.html
   url="https://source.unsplash.com/1600x900/?neon"
   caption="On this subject, you can see the abundance of the required technology: the Oculus DK2 on his face with the positional tracker on a tripod, headphones for sound, the Leap Motion on the Oculus DK2 to track his hands, a skin conductance monitor on his fingers, and a heart rate monitor on his ear."
%}

{% include media-img.html
   url="https://source.unsplash.com/1600x900/?neon"
   caption="To fake haptic feedback for the buttons used in the first phase of the experiment, we used a plastic container lid."
   url2="https://source.unsplash.com/1600x900/?neon"
   caption2="A common reaction of hesitation and terror."
%}

{% include p-section.html
   content="We also ran into difficulties while performing the experiment:

- There was a high degree of variability and device failure in our electrodermal response data (skin conductance). As such we had to throw it out.
- Our lever group accurately controlled the two elevators in the training section of their scenario. However, when the floor becomes electrified and an elevator starts falling, participants were not able to remember how the system operated.
- Many participants were deeply immersed. Some walked away emotionally struck by the scenario. However, there were also some who never became immersed or they became immersed, but lost that immersion when our hardware failed.

Ultimately, we hold our findings from the haptic and non-haptic groups to be more valid. Our initial findings can be found on a Carnegie Mellon project showcase site. It is our aim to publish our findings more formally."
%}

{% include p-section.html
   header="My role"
   content="
- With a bachelors degree in philosophy, I helped the team with any philosophical points and clarifications. This was especially important as we tried to create an easily understandable scenario that looked different from the initial thought experiment.
- I was the user experience designer on the team, clarifying usability and interaction issues. The rest of the team consisted of programmers and artists.
- I had worked and led more research projects than my counterparts. As such, I designed our research methodology and statistical analysis.
"
%}

{% include p-section.html
   header="Process"
   content="We refined our work over six weeks with weekly playtests, class feedback, and feedback from class guests. We used the feedback to clarify our designs. This lead to our final research experiment and written report.

### Research Decision Process

Each person in the Research Issues in Game Development class had to submit an idea for a research project that included the required teammates and goals for success. The professor, Tom Corbett from Electronic Arts, narrowed the submissions down and those went on to present in front of the class. Collectively the class voted on which projects they would like to see succeed."
%}

{% include blockquote.html
   quote="Can tactile feedback in virtual reality impact emotional response?"
   source="Ivan Wang"
%}

{% include p-section.html
   content="
Ivan’s pitch was for a recreation of a variant of the Trolley Problem, the “fat man” version, in a virtual environment. He proposed when the participant reaches out to push the man off of a bridge to his certain death, the participant actually feels a human actor. Ivan suggested the group examine regret and emotional feedback.

When the groups were formed, I voted to be (and was) put on Ivan’s team as I have a background in philosophy, UX, and experiment design. And, what could be cooler than creating experiential thought experiments?

###Initial Designs

The first week of work focused on (1) how we would translate the trolley problem variant into virtual reality and (2) which research questions to ask. From our earlier work in the class, we understood some of the limitations of our devices (laptop, Oculus DK2, and Leap Motion). Previous iterations of the thought experiment relied on the question-asker to force the question-answerer into either pushing the “fat man” or not. When faced with the decision, people often look for a way out. Presenting the decision in a game-like environment therefore did not lend itself to a realistic decision. It was our task to create an environment that was believable enough for the user to jump in, believe, and make a realistic decision.

The visual setup of the original problem requires the user to look in two extreme directions (left and right), put together that the trolley won’t stop, and what the available decisions are. To simplify the visual complexity, I suggested that we brainstorm isomorphs of the trolley problem (i.e. different setups that had the same salient features). We went through lasers, machine-gear deaths, conveyor belts, and gas chambers before we began to settle around our final “elevator problem”.
"
%}

{% include media-img.html
   url="https://source.unsplash.com/1600x900/?neon"
   url2="https://source.unsplash.com/1600x900/?neon"
   caption="Early versions of the “Elevator Problem”. Here, we’ve settled on electricity as the death mechanism."
%}

{% include p-section.html
   content="
### Visual Implementation & Refinement
After we had settled on our scenario and setup, we spent a few weeks refining the visuals in two ways: (1) visual design and (2) performance. On the visual design side, we worked to create an environment that was industrial and sufficiently different from Portal. Due to our hardware limitations (a laptop running the Oculus DK2), we also did what we could to keep the game performant (e.g. lowering the polygon count on objects that are further away from the subject). The rest of the team had vastly more experience creating games and as such they did the performance work."
%}

{% include media-img.html
   url="https://source.unsplash.com/1600x900/?neon"
   caption="Two low poly versions of our worker model. Since we were severely limited with our graphics capability, low polygon counts were important to a high frame rate and thus decreased motion sickness."
   captionSide=true
%}

{% include media-img.html
   url="https://source.unsplash.com/1600x900/?neon"
   caption="Environment after the programmers started implementing the design in Unity."
   style="lg"
   url2="https://source.unsplash.com/1600x900/?neon"
   caption2="After much refinement."
%}

{% include p-section.html
   content="
### Scripting & Audio
   We went through several iterations of our script. Like much of the visual and interaction design, we wanted to tread the thin line between pushing the participant to a decision and being entirely un-emotional.

   Tom Corbett, our professor and one of the people who gave weekly feedback, pushed us away from our initial idea of an AI describing the scenario for the participant. He suggested that we use a scientist in our virtual facility to speak to the participant. A fellow human voice, he posited, would help the participant feel immersed because both the participant and voice-over scientist have a similar base for human morality (whereas an AI might remind them of Portal).

### Research Methodology
   We set out to measure regret using an EEG (a device that non-invasively measures brainwaves). Shortly after researching how we might achieve this, we shifted to instead measuring physiological factors (heart rate and skin conductance), how they changed overtime and between groups. Additionally, we measured decision making time and had the participants fill out a post-experiment survey.
   "
%}

{% include p-section.html
   url="https://source.unsplash.com/1600x900/?neon"
   caption="Image of our handmade galvanic skin response and heart rate sensors."
   content="We tested 60 participants. While all participants completed the scenario, 4 datasets were thrown out due to technical issues. All participants were students or recent graduates of Carnegie Mellon University. A more detailed description of our methodology found on a <a href='http://ideate.xsead.cmu.edu/gallery/projects/virtual-trolley' target='_blank'>Carnegie Mellon project showcase site</a>."
%}
