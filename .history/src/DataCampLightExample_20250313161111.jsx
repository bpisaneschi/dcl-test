// DataCampLightExample.js
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

      {/* Add additional exercises as needed */}
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
      {/* ...other exercise sections */}
    </div>
  );
};

export default DataCampLightExample;