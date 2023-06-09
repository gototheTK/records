#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"


SECRET_NUMBER=$(($RANDOM%1000 + 1))

echo -e "Enter your username: " 
read USERNAME



if [[ -z $USERNAME ]]
then

echo -e "Welcome, <username>! It looks like this is your first time here."

else

echo -e "Welcome back, <username>! You have played <games_played> games, and your best game took <best_game> guesses."

fi

echo -e "Guess the secret number between 1 and 1000:"
read GUESS_NUMBER

while ((GUESS_NUMBER!=SECRET_NUMBER))
do

  if [[ ! $GUESS_NUMBER =~ ^[0-9]+$ ]]
  then

    echo -e "That is not an integer, guess again:"
    read GUESS_NUMBER

  elif ((GUESS_NUMBER>SECRET_NUMBER))
  then

    echo -e "It's lower than that, guess again:"
    read GUESS_NUMBER

  elif ((GUESS_NUMBER<SECRET_NUMBER))
  then

    echo -e "It's higher than that, guess again:"
    read GUESS_NUMBER

  fi

done

if ((GUESS_NUMBER=SECRET_NUMBER))
then

  echo -e "You guessed it in $GUESS_NUMBER tries. The secret number was $SECRET_NUMBER. Nice job!"

fi

