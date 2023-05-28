# Bash_Command

---

---

<br/>

---

## stdout

### wc(word count) : It showed you how lines(-l), words(-w) or bytes(-c).

---

<br/>

---

<br/>

## stdin, stdout, stderr

### |(pipe)/stdin : It can provide to pipe its output into loop like 'while'; And pipe(|) ran the command in a subshell or subprocess. It's another terminal instance within the one. So the next command of pipe(|) doesn't affect the variables you previously set.

### <command1> < <command2> (left bracket)/stdin : the command(<) uses <command2> as stdin.(A default stdin is keyboard.)

### <command1> >> <file_name> : append the output of the command to the file.

<br/>

### Example) cat courses.csv | while read MAJOR COURSE do <STATEMENTS> done

<br/>

---

<br/>

---

## Commands Related To File.

### grep '<pattern>' <filename> : the command searching for patterns in file. When you want to only pattern, add -o flag. And you can search many patterns by grep '<dog_words>|<woof_words>'. When you use regex, you add -E, --extended-regexp flag.

### sed 's/<pattern_to_replace>/<text_to_replace_it_with>/' <filename> : By default, it won't replace the text in the file. It will output it to stdout. When you want to replace all instances in a line or ignore the case of the pattern, you can add the flags(g,i) after the last / in the sed arguments. And add the regex flag(-r ,-E) for using regex.

#### When you want to use a capture group in a regex to capture the numbers, you can use them in the replacement area. Example)sed 's/([0-9]+)/\1/' <filename>

#### You can replace many patterns using sed like this: sed 's/<pattern_1>/<replacement_1>/; s/<pattern_2>/<replacement_2>/'. Note that you need the semi-colon between the two replacement patterns and they both need to be wrapped in the quotes.

### diff <file_1> <file_2>

#### A command to view the difference between two files.


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

<br/>

### When you use arithmetic operator in Bash, type it in double parenthesis. Also, it's good for changing variables or making comparisons. It doesn't provide no output. So if you want to make a result, add a $ in front. (help let) EX) echo $(( I++ )) , J=$(( I - 6)).

<br/>

### When you do arithmetic comparison and use double square brackets(help test), you have to type operators likes "-eq, -ne, -lt, -le, -gt, -ge", and when you use double parenthesis(help let), type operators likes "<, <=, >, >".

<br/>

### When you create array in bash shell, you declare it like ARR=("a" "b" "c"). And you can approach it as like echo ${ARR[1]} or echo ${ARR[@]}, echo ${ARR[*]}.

<br/>

#### Example) RESPONSES=("Yes" "No" "Maybe" "Outlook good" "Don't count on it" "Ask again later"); N=$(( $RANDOM % 6 )); echo ${RESPONSES[$N]}

<br/>

### `=~` operator is that the string to the right of the operator is matched as a regular expression(being included).

<br/>

#### Example) [[ hello =~ el ]]; echo $? OR [[ "hello world" =~ ^h.+d$ ]]; echo $?

<br/>

#### 


## NOTES IN SQL

### You cannot put LIMIT before ORDER BY, or either of them before WHERE.

### When using GROUP BY, any columns in the SELECT area must be included in the GROUP BY area. Other columns  must be used with any of the aggregate functions(MAX, AVG, COUNT, etc).

### GROUP BY has HAVING option. HAVING has conditions and the conditions must be an aggregate function with a test.

### There's shortcut keyword, USING to join tables if the foreign key column has the same name in both tables. Example) SELECT * FROM <table_1> FULL JOIN <table_2>(<column> FULL JOIN <table_3> USING(<column>)) 