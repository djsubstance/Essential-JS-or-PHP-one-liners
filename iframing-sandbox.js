


// test manipulating iframes

const iframe2 = document.createElement('iframe');
iframe2.style.position = 'fixed';
iframe2.style.zIndex = '50';
iframe2.style.top = '50%';
iframe2.style.left = '50%';
iframe2.style.transform = 'translate(-50%, -50%)';
iframe2.style.width = '80%';
iframe2.style.height = '50%';
iframe2.style.border = '1px solid #000';
iframe2.style.backgroundColor = '#fff';

// Append the iframe to the document body
document.body.appendChild(iframe2);

// Inject HTML content into the iframe with an auto-visit script using eval
const iframeContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
        }
    </style>
</head>
<body>
    <h1>Auto-Redirect in Progress</h1>
    <p>This content was written directly into the iframe. You will be redirected shortly.</p>
    <a id="autoRedirect" href="https://ifconfig.me/all" target="_self">getyourip</a>

    <script>
        // Dynamically create the auto-redirect script using eval
        eval("document.getElementById('autoRedirect').click();");
    </script>
</body>
</html>
`;

iframe2.contentWindow.document.open();
iframe2.contentWindow.document.write(iframeContent);
iframe2.contentWindow.document.close();
