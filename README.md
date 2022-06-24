# reusable-functions

The idea of the project is to create and collect functions that 
solve recurrent problems and can be reused and extended if needed.

## convert-time-format-12to24h

This function converts time input from 12h time format to 24h time 
format. It checks the input for validity and returns a message which states the correct format of the input, gives an example and returns the invalid input value.

The format accepted by the function is HH:MM plus AM or PM suffix (case insensitive). The output is a string in the following format: HH:MM.

The function can be changed to display different error messages to speciify exactly what is wrong with the input.
