// Style the body as requested
document.body.style.backgroundColor = '#333';
document.body.style.color = 'lightcyan';
document.body.style.opacity = '0.33';

// Create a frame for logging at the bottom of the page
const logFrame = document.createElement('div');
logFrame.style.position = 'fixed';
logFrame.style.bottom = '0';
logFrame.style.width = '100%';
logFrame.style.height = '20vh'; // 20% of the viewport height
logFrame.style.backgroundColor = '#111';
logFrame.style.color = 'white';
logFrame.style.overflow = 'auto'; // Ensure it's scrollable
document.body.appendChild(logFrame);

// Function to log messages to the frame
function logMessage(message) {
  const p = document.createElement('p');
  p.textContent = message;
  logFrame.appendChild(p);
  logFrame.scrollTop = logFrame.scrollHeight; // Auto-scroll to the latest message
}

// Fuzzer object to generate input elements with random attributes
class InputFuzzer {
  constructor() {
    this.attributes = [
      'type="text"', 'type="password"', 'type="email"', 'placeholder="Enter something..."',
      'required', 'disabled', 'maxlength="10"', 'size="20"', 'autofocus', 'readonly',
      'autocomplete="off"', 'pattern="[A-Za-z]{3}"', 'spellcheck="false"', 'dir="ltr"',
      'list="datalist-options"', 'min="1"', 'max="100"', 'step="1"', 'multiple', 'name="username"',
      'value="default"', 'checked', 'src="image.png"', 'alt="input"', 'title="Tooltip"',
      'accesskey="p"', 'tabindex="1"', 'contenteditable', 'draggable="true"', 'hidden',
      // Add more attributes as desired
    ];
    this.inputs = [];
    this.generateInputs();
  }

  // Generate 50 input elements with up to 3 random attributes
  generateInputs() {
    for (let i = 0; i < 50; i++) {
      try {
        const attrCombination = this.randomAttributes();
        const input = `<input ${attrCombination.join(' ')}>`;
        this.inputs.push(input);
      } catch (e) {
        logMessage(`Error generating input #${i}: ${e.message}`);
      }
    }
    this.displayInputs();
  }

  // Get up to 3 random attributes
  randomAttributes() {
    const shuffled = this.attributes.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3); // Adjust number for more or fewer attributes
  }

  // Display inputs in the DOM
  displayInputs() {
    const ul = document.createElement('ul');
    this.inputs.forEach(inputHtml => {
      const li = document.createElement('li');
      li.innerHTML = inputHtml;
      ul.appendChild(li);
    });
    document.body.appendChild(ul);
  }
}

// Instantiate and use the fuzzer
const fuzzer = new InputFuzzer();




 there is a a logFrame div fixed to the bottom of the viewport, taking up 20% of the viewport height, with a background color of
   #111 and text color of white. Messages, including any caught exceptions from generating the <input> elements, are logged 
    this frame. The logMessage function appends messages to this frame and automatically scrolls to the latest message.

       the attributes array within the InputFuzzer class to include 20 more attributes, providing a wider range of options for fuzzing the <input> elements. 
      This  list includes attributes for input validation (min, max, step), multimedia (src, alt), accessibility (title, accesskey, tabindex), and more, 
      allowing for extensive experimentation with different attribute combinations.

Remember, some attribute combinations may not make sense for all input types (e.g., src on a text input), which is consistent with 
      request to include combinations that may not be compliant or logical. This setup encourages exploration of how various browsers
        and HTML renderers handle non-standard or unexpected input attributes.
   
