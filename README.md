# Halloween Quiz Game

Welcome to the Halloween Quiz game!
In this game, you'll be put to the test to see how well you know Halloween and every spooky thing that comes with it. Get ready to challenge your knowledge of all things spooky and Halloween-related!

![alt text](image.jpg)

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

**User Stories**

## Features

- Choose between 3 difficulty levels: Easy, Medium, or Hard.
- Click "Start Quiz" to begin the Halloween quiz.
- Select the correct answer from the options provided.
- The next question will appear within 2 seconds, but you can skip with the button anytime.
- Beware! Spooky sounds are present in the game! You can mute this with the mute button below.

# Full Testing Report

## Devices Tested

### Laptop
- **Asus Rog Strix laptop**
  - 15.6-inch screen

### Mobile Devices
- **iPhone 13**

## Browsers Used for Testing

- **Google Chrome**
- **Safari**
- **Firefox**

## Testing Details

Full testing was performed on the listed devices, with each device testing the site using the specified browsers. Additional testing was conducted by friends and family on various devices and screen sizes. The overall feedback was positive, with no reported issues during play.

## Specific Feedback

# Main Page
| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| ---------| ---------| ---------| ---------| ---------|
| Sound Mute button    |     When clicked the button should turn red and mute all game sounds & after clicked again it should return to its original state    |     Clicked on the button, checked isMuted state in console log and tested it on the questions     |     ![isMuted console log](media/testing/isMuted.png)     |     Pass     |
| Start Quiz Button    |     Display the game page and score container & change the button text to next question    |     Clicked on the button     |     Displayed the first question and turned the button text     |     Pass     |
| Difficulty Selector    |     It should show the 3 difficulty options and set the appropiate question array     |     Clicked on the dropdown     |     Displayed the first question and checked if it's from the right array     |     Pass     |

# Game
| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| ---------| ---------| ---------| ---------| ---------|
| Question populated  |     The question is displayed from the correct difficulty array     |    Checked manually the question shown is pulled from the right array     |     The right question is displaying      |     Pass     |
| Answers populated    |     The corresponding answer options are shown for the question     |     Checked manually the answers shown is pulled from the right array     |     The right answers are displaying     |     Pass     |
| Next Question Button    |     Text is showing next question text and finish quiz text on the last question & on clicking showing the next question/finish message    |     Clicked on the button     |     New question and answers were displayed, showed the finish message at the last question     |     Pass      |
| Correct answer - button color    |     When the correct answer is clicked the button background should turn green     |     Clicked a correct answer     |     Button background turned to green     |     Pass     |
| Inorrect answer - button color    |     When the incorrect answer is clicked the button background should turn red     |     Clicked an icorrect answer     |     Button background turned to red     |     Pass     |
| Correct answer - sound effect    |     When the correct answer is clicked the game should play "correct.wav"    |     Clicked a correct answer     |     The game played the "correct.wav" sound effect     |     Pass     |
| Inorrect answer - sound effect    |     When the incorrect answer is clicked the game should play "fail.wav"      |     Clicked an incorrect answer     |     The game played the "fail.wav" sound effect     |     Pass     |
| Score counter  |     The score counter should begin at 0. Each time a correct answer is selected the score should increase by 1. If an incorrect answer is selected the score should remain the same     |    Clicked a correct answer to check if the score increased. Clicked an incorrect answer to check the score stayed the same     |     When a correct answer was selected the score increased by 1. When an incorrect score was selected the score stayed the same      |     Pass     |



Updates:

- Questions with images
- Random spooky effects
- Plus effects on perfect score and 0 score