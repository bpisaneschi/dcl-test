import React from 'react';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DataCamp Light | Standalone example</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://www.datacamp.com/assets/favicon.ico"
        />
        <style>{`
          .exercise {
            margin: 50px;
          }
          [data-datacamp-exercise] {
            visibility: hidden;
          }
        `}</style>
        <script async src="https://cdn.datacamp.com/dcl-react-dev.js.gz"></script>
      </Helmet>

      {/* First exercise – Python with packages */}
      <div className="exercise">
        <div className="title">
          <h2>Python in DataCamp Light 3</h2>
          <p>
            In the HTML code for this exercise you can specify the packages to import and the Python version you want to use.
          </p>
        </div>
        <div
          data-datacamp-exercise
          data-lang="python"
          data-lang-version="3.6"
          data-packages="pandas==0.24.1, alabaster==0.7.12"
          data-height="auto"
        >
          <code data-type="pre-exercise-code"></code>
          <code data-type="sample-code">{`
import pandas, sys

# Check that the packages are correctly imported
print("PANDAS VERSION:", pandas.__version__)

# Check that the correct version of Python is used
print("PYTHON VERSION:", sys.version)

# Print all packages available to use
print_packages()
          `}</code>
          <code data-type="solution"></code>
          <code data-type="sct"></code>
          <div data-type="hint">Just press 'Run'.</div>
        </div>
      </div>

      {/* Second exercise – Python with a plot */}
      <div className="exercise">
        <div className="title">
          <h2>This is a python exercise with a plot</h2>
        </div>
        <div data-datacamp-exercise data-lang="python" data-height="auto">
          <code data-type="pre-exercise-code"></code>
          <code data-type="sample-code">{`
import numpy as np
import matplotlib.pyplot as plt

x = np.arange(0, 5, 0.1)
y = np.sin(x)
plt.plot(x, y)
plt.show()
          `}</code>
          <code data-type="solution"></code>
          <code data-type="sct"></code>
          <div data-type="hint">Just press 'Run'.</div>
        </div>
      </div>

      {/* Third exercise – How it works (R exercise) */}
      <div className="exercise">
        <div className="title">
          <h2>How it works</h2>
        </div>
        <div data-datacamp-exercise data-lang="r" data-height="500">
          <code data-type="pre-exercise-code"># no pec</code>
          <code data-type="sample-code">{`
# Calculate 3 + 4
3 + 4

# Calculate 6 + 12
          `}</code>
          <code data-type="solution">{`
# Calculate 3 + 4
3 + 4

# Calculate 6 + 12
6 + 12
          `}</code>
          <code data-type="sct">{`
test_output_contains("18", incorrect_msg = "Make sure to add \`6 + 12\` on a new line. Do not start the line with a \`#\`, otherwise your R code is not executed!")
success_msg("Awesome! See how the console shows the result of the R code you submitted? Now that you're familiar with the interface, let's get down to R business!")
          `}</code>
          <div data-type="hint">
            <p>
              Just add a line of R code that calculates the sum of 6 and 12, just like the example in the sample code!
            </p>
          </div>
        </div>
      </div>

      {/* Fourth exercise – Shell Exercise */}
      <div className="exercise">
        <div className="title">
          <h2>Shell Exercise</h2>
        </div>
        <div
          data-datacamp-exercise
          data-lang="shell"
          data-height="500"
          id="shell-example"
        >
          <div data-type="hint">
            Type <code>cd [directory]</code> to go to [directory].
          </div>
          <code data-type="sct">{`
Ex() >> test_student_typed(r'\\s*cd(\\s+(\\.\\.|\\~))?\\s*',
                          fixed=False,
                          msg='Use \`cd ..\` to go up a level or \`cd ~\` to return home.')
          `}</code>
        </div>
      </div>

      {/* Additional exercises would be similarly converted */}
    </>
  );
}

export default App;