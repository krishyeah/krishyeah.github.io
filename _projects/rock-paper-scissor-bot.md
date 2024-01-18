---
title: "Rock Paper Scissor Bot"
excerpt: "Bot that uses AI to try and beat you in Rock Paper Scissor"
collection: projects
permalink: /projects/rps_bot/
---

# Rock Paper Scissors Bot
## Info
This bot predicts your next rock paper scissors move and attempts to beat you. The boilerplate starter code is from [freecodecamp](https://www.freecodecamp.org/learn/machine-learning-with-python/machine-learning-with-python-projects/rock-paper-scissors).

The bot stores previous move history in order to predict future moves. It stores sets of 5 moves and then finds the most likely move to follow the last 4 moves that the opponent plays. For example, if you played: `Rock`, `Rock`, `Paper`, `Scissors`, the bot will look at your previous move history and will guess your next move based on your most frequent follow up move to the shown sequence. This of course means that the bot performs best against opponents who use a pattern as opposed to an opponent who picks truly randomly.

The bot also requires a large history to increase its win percentage. Against the other bots it has played, which can be seen in [RPS_game.py](https://github.com/krishyeah/rock-paper-scissor-bot/blob/master/RPS_game.py), after 1000 rounds of rock-paper-scissors and discarding draws, it typically has a win percentage greater than 60%. In essence, if on a tie, the game was going to be replayed, the bot will win 3 out of 5 decisive rounds. Note: It does occasionally perform worse than 60%.

## Usage
Play against the bot by running `python main.py` from within this directory.

## Link
Check [my github repo](https://github.com/krishyeah/rock-paper-scissor-bot/tree/master) for the source to begin playing or to check out the bot!