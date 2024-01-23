document.body.appendChild(((frame) => {
    frame.style = 'position: fixed; top: 50%; left: 50%; width: 150px; height: 150px; transform: translate(-50%, -50%); background-color: black; color: cyan; display: flex; justify-content: center; align-items: center;';
    frame.sandbox = 'allow-scripts allow-same-origin';
    frame.srcdoc = `
        <html>
            <body style="margin: 0; background-color: black; color: cyan; display: flex; justify-content: center; align-items: center; height: 100%;">
                <button onclick="try { parent.document.body.append('Child has modified the parent!'); } catch (e) { console.error('Child cannot modify the parent:', e); }" style="background-color: cyan; color: black; border: none; padding: 10px;">Test</button>
            </body>
        </html>`;
    return frame;
})(document.createElement('iframe')));



 ^ Paste this into inspect/console
