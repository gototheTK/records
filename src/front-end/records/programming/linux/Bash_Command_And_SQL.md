# Bash_Command

---

---

<br/>

---

<br/>

## | : It can provide to pipe its output into loop like 'while';
### Example) cat courses.csv | while read MAJOR COURSE do <STATEMENTS> done


<br/>

---

<br/>


## Loop Commands

<br/>

### for [[ expression ]] ((  initialization; condition; step )) do STATEMENTS done

### until [[ CONDITION ]] do STATEMENTS done


<br/>

### while [[ expression ]] do statements done


<br/>

## sleep seconds

## type <name> : Display information about command type. For each Name, it indicates how it would be interpreted if used as a command name.

<br/>

### printenv : The command to view all environment variables.

<br/>

### declare -p : The command to view all variables that include all the environment variables, and have been created in the current shell.

### function : FUNCTION_NAME() { STATEMENTS } (When you call function, you don't need $)


<br/>

---

---

<br/>

## variables(environment and current shell)

### RANDOM : the variable that will generate a random number between 0 and 32767.

### IFS(Internal Field Separator) : It's variable to be used to determine word boundaries. It defaults to spaces, tabs, and new lines.

---

---

<br/>

## Notes

---

<br/>

### Bash sees everything as a string so it just printed the %75 part literally. In the terminal, create an I variable equal to 0(zero), so you can play with it and figure out how to do some calculations.

### When you use arithmetic operator in Bash, type it in double parenthesis. Also, it's good for changing variables or making comparisons. It doesn't provide no output. So if you want to make a result, add a $ in front. (help let) EX) echo $(( I++ )) , J=$(( I - 6)).

### When you do arithmetic comparison and use double square brackets(help test), you have to type operators likes "-eq, -ne, -lt, -le, -gt, -ge", and when you use double parenthesis(help let), type operators likes "<, <=, >, >".

### When you create array in bash shell, you declare it like ARR=("a" "b" "c"). And you can approach it as like echo ${ARR[1]} or echo ${ARR[@]}, echo ${ARR[*]}.


#### Example) RESPONSES=("Yes" "No" "Maybe" "Outlook good" "Don't count on it" "Ask again later"); N=$(( $RANDOM % 6 )); echo ${RESPONSES[$N]}

#### `=~` operator is that the string to the right of the operator is matched as a regular expression(being included).

#### Example) [[ hello =~ el ]]; echo $? OR [[ "hello world" =~ ^h.+d$ ]]; echo $?

#### 