<p align="center">
  <img src="./screenshots/genome_cards_300.png"/>
</p>

Genome Cards
---


Uncover facts about your Genome in a friendly format!

Genome Cards helps users Play to their Strengths by uncovering facts that can help them better understand their personal traits.

Running the project
---
Start the ReactJS web app 
<pre>
  yarn && yarn start
</pre>
Start the python server (after installing dependencies):
<pre>
  python server.py
</pre>

The server will forward web app genome API requests through the server on behalf of the user.

That's it.

Inspiration
----

The Genome is still poorly understood by the vast majority of people. I wanted to create a simple application that would make facts about their personal genome's more accessible and fun - thus genome cards was born.


What it does
----
Users can log in with their Genome and instantly get access to cards of data representing their personal genome.

How I built it
----
This project uses a basic react app with an express server to fetch information about the authenticated user's personal genome.

Challenges I ran into
----
Fetching all the information about the user's genome in real time.

Accomplishments that I'm proud of
----
It works.

What I learned
----
How to create an app that can pull in information about the user's genome in a fun format.

What's next for Genome Cards?
----

Genome cards is an open source project that could be extended for other applications. The cards could be gamified, and learning about the genome and help individual's maximize their life effectiveness based on their personal traits.

