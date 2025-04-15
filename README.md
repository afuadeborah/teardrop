# Tear(Drop)

This project is a multiscreen experience in which users are encouraged to interact with the Control form and reflect on impactful experiences in their lives and their visualization in the Display.

Each form input manipulates the display in some way that's relevant to the elements of the user's experience.

This is an MVP iteration, I'd like to add other interactive elements in the future. This is an interactive/visual compliment that came to me while working on a written piece.

[Tear(Drop) Homepage](teardrop/src/assets/images/teardrop-homepage.png)

[Tear(Drop) Control Form](teardrop/src/assets/images/teardrop-form.png)

[Tear(Drop) Display](teardrop/src/assets/images/teardrop-display.png)

## Stack

-   React, React Router
-   [particle.js](https://github.com/VincentGarreau/particles.js) library by Vincent Garreau for the display
-   SASS + Bootstrap
-   Firebase for real-time updating of the display based on the user's input

### Planning

[Tear(Drop) Diagram in Figjam](teardrop/src/assets/images/teardrop-planning.png)

The usage goal was:

-   User enters data into input (text, radio, range)
-   Value gets passed into state in order to be used across pages and in Firebase
-   Particles display updates config json object to pass in values entered in as per config settings
    -   This was initially in its own file, but because I wanted this to be a real-time update, I moved the config into the Display component for Firebase to listen to any changes
-   Each config had its own intention and meaning which is reflected in how the display changes (more intense experiences increase the density and speed of the particles, events experienced alone see individual particles vs particles connected with lines etc.)

## What's Next?

-   I'd like to include a projection mapping addition that tracks the user's eye movement via webcam functionality
-   Writing tests to ensure inputs expect and accept the correct input
