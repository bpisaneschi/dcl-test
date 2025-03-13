import React, { useEffect } from 'react';

const DataCampLightExample = () => {
  // Append external script to load DataCamp Light functionality
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.datacamp.com/dcl-react-dev.js.gz";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {/* Inline styles can also be moved to a CSS file */}
      <style>{`
        .exercise {
          margin: 50px;
        }
        [data-datacamp-exercise] {
          visibility: hidden;
        }
      `}</style>

      <div className="exercise">
        <div className="title">
          <h2>This is an python exercise with a plot</h2>
        </div>
        <div data-datacamp-exercise data-lang="python" data-height="auto">
          <code data-type="pre-exercise-code"></code>
          <code data-type="sample-code">
            {`import numpy as np
import matplotlib.pyplot as plt

x = np.arange(0, 5, 0.1);
y = np.sin(x)
plt.plot(x, y)
plt.show()`}
          </code>
          <code data-type="solution"></code>
          <code data-type="sct"></code>
          <div data-type="hint">Just press 'Run'.</div>
        </div>
      </div>

      <div className="exercise">
        <div className="title">
          <h2>How it works</h2>
        </div>
        <div data-datacamp-exercise data-lang="r" data-height="500">
          <code data-type="pre-exercise-code">{`# no pec`}</code>
          <code data-type="sample-code">
            {`# Calculate 3 + 4
3 + 4

# Calculate 6 + 12`}
          </code>
          <code data-type="solution">
            {`# Calculate 3 + 4
3 + 4

# Calculate 6 + 12
6 + 12`}
          </code>
          <code data-type="sct">
            {`test_output_contains("18", incorrect_msg = "Make sure to add \`6 + 12\`
on
a new line. Do not start the line with a \`#\`, otherwise your R code is not executed!")
success_msg("Awesome! See how the console shows the result of the R code you
submitted? Now that you're familiar with the interface, let's get down to R
business!")`}
          </code>
          <div data-type="hint">
            <p>
              Just add a line of R code that calculates the sum of 6 and 12, just like the example
              in the sample code!
            </p>
          </div>
        </div>
      </div>

      <div className="exercise">
        <div className="title">
          <h2>Shell Exercise</h2>
        </div>
        <div data-datacamp-exercise data-lang="shell" data-height="500" id="shell-example">
          <div data-type="hint">
            Type <code>cd [directory]</code> to go to [directory].
          </div>
          <code data-type="sct">
            {`Ex() >> test_student_typed(r'\\s*cd(\\s+(\\.\\.|\\~))?\\s*',
                                    fixed=False,
                                    msg='Use \`cd ..\` to go up a level or \`cd ~\` to return home.')`}
          </code>
        </div>
      </div>

      <div className="exercise">
        <div className="title">
          <h2>Arithmetic with R</h2>
        </div>
        <div data-datacamp-exercise data-lang="r" data-height="350">
          <code data-type="pre-exercise-code">{`# no pec`}</code>
          <code data-type="sample-code">
            {`# An addition
5 + 5

# A subtraction
5 - 5

# A multiplication
3 * 5

# A division
(5 + 5) / 2

# Exponentiation


# Modulo`}
          </code>
          <code data-type="solution">
            {`# An addition
5 + 5

# A subtraction
5 - 5

# A multiplication
3 * 5

# A division
(5 + 5) / 2

# Exponentiation
2 ^ 5

# Modulo
28 %% 6`}
          </code>
          <code data-type="sct">
            {`msg = "Do not remove the other arithmetic examples!"
test_output_contains("2^5", incorrect_msg = "The exponentiation
example
is not correct. Write \`2 ^ 5\` on a new line.")
test_output_contains("28 %% 6", incorrect_msg = "There seems to be an
issue with the modulo example. Write \`28 %% 6\` on a new line.")
success_msg("Great! Head over to the next exercise.")`}
          </code>
          <div data-type="hint">
            <p>
              Another example of the modulo operator:
              <code>9 %% 2</code> equals <code>1</code>.
            </p>
          </div>
        </div>
      </div>

      <div className="exercise">
        <div className="title">
          <h2>Variable assignment</h2>
        </div>
        <div data-datacamp-exercise data-lang="r" data-height="350">
          <code data-type="pre-exercise-code">{`# no pec`}</code>
          <code data-type="sample-code">
            {`# Assign the value 42 to x
x <-

# Print out the value of the variable x
x`}
          </code>
          <code data-type="solution">
            {`# Assign the value 42 to x
x <- 42

# Print out the value of the variable x
x`}
          </code>
          <code data-type="sct">
            {`test_object("x", undefined_msg = "Make sure to define a variable \`x\`.", incorrect_msg = "Make sure that you assign the correct value to \`x\`.")
success_msg("Good job! Have you noticed that R does not print the value of a variable to the console when you did the assignment? \`x <- 42\` did not generate any output, because R assumes that you will be needing this variable in the future. Otherwise you wouldn't have stored the value in a variable in the first place, right? Proceed to the next exercise!")`}
          </code>
          <div data-type="hint">
            <p>
              Look at how the value 4 was assigned to <code>my_variable</code> in the exercise's assignment.
              Do the exact same thing in the editor, but now assign 42 to the variable <code>x</code>.
            </p>
          </div>
        </div>
      </div>

      <div className="exercise">
        <div className="title">
          <h2>Variable assignment (2)</h2>
        </div>
        <div data-datacamp-exercise data-lang="r" data-height="350">
          <code data-type="pre-exercise-code">{`# no pec`}</code>
          <code data-type="sample-code">
            {`# Assign the value 5 to the variable my_apples


# Print out the value of the variable my_apples`}
          </code>
          <code data-type="solution">
            {`# Assign the value 5 to the variable my_apples
my_apples <- 5

# Print out the value of the variable my_apples
my_apples`}
          </code>
          <code data-type="sct">
            {`test_object("my_apples",
    undefined_msg = "Please make sure to define a variable \`my_apples\`.",
    incorrect_msg = "Make sure that you assign the correct value to \`my_apples\`.")
test_output_contains("my_apples", incorrect_msg = "Have you explicitly told R to print out the \`my_apples\` variable to the console?")
success_msg("Great! Continue to the next exercise!")`}
          </code>
          <div data-type="hint">
            <p>
              Remember that if you want to assign a number or an object to a variable in R, you can
              make use of the assignment operator <code>&lt;-</code>. Alternatively, you can use <code>=</code>,
              but <code>&lt;-</code> is widely preferred in the R community.
            </p>
          </div>
        </div>
      </div>

      <div className="exercise">
        <div className="title">
          <h2>Variable assignment (3)</h2>
        </div>
        <div data-datacamp-exercise data-lang="r" data-height="350">
          <code data-type="pre-exercise-code">{`# no pec`}</code>
          <code data-type="sample-code">
            {`# Assign a value to the variables my_apples and my_oranges
my_apples <- 5


# Add these two variables together


# Create the variable my_fruit`}
          </code>
          <code data-type="solution">
            {`# Assign a value to the variables my_apples and my_oranges
my_apples <- 5
my_oranges <- 6

# Add these two variables together
my_apples + my_oranges

# Create the variable my_fruit
my_fruit <- my_apples + my_oranges`}
          </code>
          <code data-type="sct">
            {`test_object("my_apples", incorrect_msg = "Keep the line that assigns 5 to \`my_apples\`.")
test_object("my_oranges", incorrect_msg = "Keep the line that assigns 6 to \`my_oranges\`.")
test_output_contains("my_apples + my_oranges", incorrect_msg = "Make sure to print out the result of adding \`my_apples\` and \`my_oranges\`. The code example in the description already gives away the answer to this instruction!")
msg <- "Have you used \`my_fruit <- my_apples + my_oranges\` to create the \`my_fruit\` variable?"
test_object("my_fruit", undefined_msg = msg, incorrect_msg = msg)
success_msg("Nice one! The great advantage of doing calculations with variables is reusability. If you just change \`my_apples\` to equal 12 instead of 5 and rerun the script, \`my_fruit\` will automatically update as well. Continue to the next exercise.")`}
          </code>
          <div data-type="hint">
            <p>
              <code>my_fruit</code> is just the sum of <code>my_apples</code> and <code>my_oranges</code>.
              You can use the <code>+</code> operator to sum the two and <code>&lt;-</code> to assign that value to the variable <code>my_fruit</code>.
            </p>
          </div>
        </div>
      </div>

      <div className="exercise">
        <div className="title">
          <h2>Apples and oranges</h2>
        </div>
        <div data-datacamp-exercise data-lang="r" data-height="350">
          <code data-type="pre-exercise-code">{`# no pec`}</code>
          <code data-type="sample-code">
            {`# Assign a value to the variable my_apples
my_apples <- 5

# Fix the assignment of my_oranges
my_oranges <- "six"

# Create the variable my_fruit and print it out
my_fruit <- my_apples + my_oranges
my_fruit`}
          </code>
          <code data-type="solution">
            {`# Assign a value to the variable my_apples
my_apples <- 5

# Fix the assignment of my_oranges
my_oranges <- 6

# Create the variable my_fruit and print it out
my_fruit <- my_apples + my_oranges
my_fruit`}
          </code>
          <code data-type="sct">
            {`test_error(incorrect_msg = "You can do this by setting the \`my_oranges\` variable to a numeric value, not a string!")
test_object("my_apples", incorrect_msg = "Make sure that \`my_apples\` still contains \`5\`.")
test_object("my_oranges", incorrect_msg = "Make sure that \`my_oranges\` is equal to \`6\`.")
test_object("my_fruit", incorrect_msg = "The value of \`my_fruit\` is not correct. It should be 11, the sum of \`my_apples\` and \`my_oranges\`.")
test_output_contains("my_fruit", incorrect_msg = "Don't remove the line that prints out \`my_fruit\`.") 
success_msg("Awesome, keep up the good work! Continue to the next exercise.")`}
          </code>
          <div data-type="hint">
            <p>
              You have to assign the numeric value <code>6</code> to the <code>my_oranges</code> variable instead of the character value <code>"six"</code>.
              Note how the quotation marks are used to indicate that <code>"six"</code> is a character.
            </p>
          </div>
        </div>
      </div>

      <div className="exercise">
        <div className="title">
          <h2>Basic data types in R</h2>
        </div>
        <div data-datacamp-exercise data-lang="r" data-height="350">
          <code data-type="pre-exercise-code">{`# no pec`}</code>
          <code data-type="sample-code">
            {`# Change my_numeric to be 42
my_numeric <- 42.5

# Change my_character to be "universe"
my_character <- "some text"

# Change my_logical to be FALSE
my_logical <- TRUE`}
          </code>
          <code data-type="solution">
            {`# Change my_numeric to be 42
my_numeric <- 42

# Change my_character to be "universe"
my_character <- "universe"

# Change my_logical to be FALSE
my_logical <- FALSE`}
          </code>
          <code data-type="sct">
            {`test_object("my_numeric", incorrect_msg = "Have you correctly changed the declaration of \`my_numeric\` so it contains the value 42?")
test_object("my_character", incorrect_msg = "Have you correctly changed \`my_character\` to \"universe\"? Don't forget the quotes!")
test_object("my_logical", incorrect_msg = "Have you correctly changed \`my_logical\` to FALSE? All letters of \`FALSE\` should be capitalized!")
success_msg("Great work! Continue to the next exercise.")`}
          </code>
          <div data-type="hint">
            <p>
              Replace the values in the editor with the values that are provided in the exercise.
              For example: <code>my_numeric <- 42</code> assigns the value 42 to the variable <code>my_numeric</code>.
            </p>
          </div>
        </div>
      </div>

      <div className="exercise">
        <div className="title">
          <h2>What's that data type?</h2>
        </div>
        <div data-datacamp-exercise data-lang="r" data-height="350">
          <code data-type="pre-exercise-code">{`# no pec`}</code>
          <code data-type="sample-code">
            {`# Declare variables of different types
my_numeric <- 42
my_character <- "universe"
my_logical <- FALSE

# Check class of my_numeric
class(my_numeric)

# Check class of my_character


# Check class of my_logical`}
          </code>
          <code data-type="solution">
            {`# Declare variables of different types:
my_numeric <- 42
my_character <- "universe"
my_logical <- FALSE

# Check class of my_numeric
class(my_numeric)

# Check class of my_character
class(my_character)

# Check class of my_logical
class(my_logical)`}
          </code>
          <code data-type="sct">
            {`msg <- "Do not change the declaration of the variables!"
lapply(c("my_numeric", "my_character", "my_logical"),
  test_object, undefined_msg = msg, incorrect_msg = msg)
patt <- "Have you included \`class(%1$s)\` to print out the data type of \`%1$s\`?"
test_output_contains("class(my_numeric)", incorrect_msg = "Do not remove the code that prints out the type of \`my_numeric\`.")
test_output_contains("class(my_character)", incorrect_msg = sprintf(patt, "my_character"))
test_output_contains("class(my_logical)", incorrect_msg = sprintf(patt, "my_logical"))
success_msg("Congratulations! This was the last exercise for this chapter. Head over to the next chapter to get immersed in the world of vectors!")`}
          </code>
          <div data-type="hint">
            <p>
              The code that prints the data type of <code>my_numeric</code> is already included; do a similar thing for <code>my_character</code> and <code>my_logical</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCampLightExample;