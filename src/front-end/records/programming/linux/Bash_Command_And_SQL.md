# Bash_Command

---

---

<br/>

---

<br/>

## Loop Commands

<br/>

### for [[ expression ]] ((  initialization; condition; step )) do statements done


<br/>

### while [[ expression ]] do statements done


<br/>

### sleep seconds

<br/>

### printenv : The command to view all environment variables.

<br/>

### declare -p : The command to view all variables that include all the environment variables, and have been created in the current shell.


<br/>

---

---

<br/>

## variables(environment and current shell)

### RANDOM : the variable that will generate a random number between 0 and 32767.

---

---

<br/>

## Notes

---

<br/>

### Bash sees everything as a string so it just printed the %75 part literally. In the terminal, create an I variable equal to 0(zero), so you can play with it and figure out how to do some calculations.

### When you use arithmetic operator in Bash, type it in double parenthesis. Also, it's good for changing variables or making comparisons. It doesn't provide no output. So if you want to make a result, add a $ in front. (help let) EX) echo $(( I++ )) , J=$(( I - 6)).